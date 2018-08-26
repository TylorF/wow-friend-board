import React, { Component } from 'react';

import * as classes from './AppBar.module.css';

class AppBar extends Component {
    state = {
        expanded: false,
        selection: null,
        content: null
    };

    getDropDownTabClass = (tab) => {
        const tabClasses = [classes.DropDownTab];
        if(this.state.expanded && this.state.selection === tab) {
            tabClasses.push(classes.Active); 
        }
        return tabClasses.join(' ');
    }

    onTabClick (tabName, tabContent){
        if(tabName === this.state.selection){
            this.setState({selection: null, content: null, expanded: false});
        } else {
            this.setState({selection: tabName, content: tabContent, expanded: true});
        }
    }

    childTabs = () => {
        // Turn it into an array in case there's only one element
        return [].concat(this.props.children).map((tabDef) => {
            const tabName = tabDef.props.title;
            return (
                <div 
                    key={tabName}
                    className={this.getDropDownTabClass(tabName)} 
                    onClick={() => this.onTabClick(tabName, tabDef)}
                >{tabName}</div>
            );
        });
    }

    getDropDownClass = () => {
        if (this.state.expanded)
            return [classes.DropDown, classes.open].join(' ');
        else
            return classes.DropDown;
    }
    
    render () {
        return(
            <React.Fragment>
                <header className={classes.AppBar}>
                    <div className={classes.Logo}>WoW Friend Board</div>
                    <div className={classes.DropDownTabHolder}>
                        {this.childTabs()}
                    </div>
                </header>
                <div className={this.getDropDownClass}>
                    {this.state.content}
                </div>
            </React.Fragment>
        );
    }
}

export const BarTab = (props) => {
    return props.children;
};

export default AppBar;
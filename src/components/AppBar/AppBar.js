import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as classes from './AppBar.module.css';

class AppBar extends Component {
  state = {
    expanded: false,
    selection: null
  };

  onTabClick(tabName, event) {
    const { selection } = this.state;
    if (tabName === selection) {
      this.setState({ selection: null, expanded: false });
      event.target.blur();
    } else {
      this.setState({ selection: tabName, expanded: true });
    }
  }

  getDropDownTabClass = tab => {
    const { expanded, selection } = this.state;
    const tabClasses = [classes.DropDownTab];
    if (expanded && selection === tab) {
      tabClasses.push(classes.Active);
    }
    return tabClasses.join(' ');
  };

  childTabs = () => {
    const { children } = this.props;
    // Turn it into an array in case there's only one element
    return [].concat(children).map(tabDef => {
      const tabName = tabDef.props.title;
      return (
        <div
          key={tabName}
          role="tab"
          tabIndex="0"
          className={this.getDropDownTabClass(tabName)}
          onClick={e => this.onTabClick(tabName, e)}
          onKeyPress={e => {
            if (e.key === 'Enter') this.onTabClick(tabName, e);
          }}
        >
          {tabName}
        </div>
      );
    });
  };

  activeTab = () => {
    const { children } = this.props;
    const { selection } = this.state;
    return children.filter(tab => tab.props.title === selection);
  };

  getDropDownClass = () => {
    const { expanded } = this.state;
    if (expanded) return [classes.DropDown, classes.open].join(' ');
    return classes.DropDown;
  };

  render() {
    return (
      <React.Fragment>
        <header className={classes.AppBar}>
          <div className={classes.Logo}>WoW Friend Board</div>
          <div className={classes.DropDownTabHolder} role="tablist">
            {this.childTabs()}
          </div>
        </header>
        <div className={this.getDropDownClass()}>{this.activeTab()}</div>
      </React.Fragment>
    );
  }
}

AppBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

AppBar.defaultProps = {
  children: []
};

// BarTab component for wrapping content
// requires title prop
export const BarTab = props => props.children;

export default AppBar;

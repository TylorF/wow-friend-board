import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as classes from './AppBar.module.css';

class AppBar extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  };

  static defaultProps = {
    children: []
  };

  state = {
    tabs: [],
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

  registerTab = tabName => {
    this.setState(prevState => ({ tabs: [...prevState.tabs, tabName] }));
  };

  childTabs = () => {
    const { tabs } = this.state;
    return tabs.map(tab => (
      <div
        key={tab}
        role="tab"
        tabIndex="0"
        className={this.getDropDownTabClass(tab)}
        onClick={e => this.onTabClick(tab, e)}
        onKeyPress={e => {
          if (e.key === 'Enter') this.onTabClick(tab, e);
        }}
      >
        {tab}
      </div>
    ));
  };

  getDropDownTabClass = tab => {
    const { expanded, selection } = this.state;
    const tabClasses = [classes.DropDownTab];
    if (expanded && selection === tab) {
      tabClasses.push(classes.Active);
    }
    return tabClasses.join(' ');
  };

  renderChildren = (children, selectedIndex) =>
    children.map((child, ind) => {
      const selected = ind === selectedIndex;
      const style = selected
        ? [classes.DropDownContent, classes.open]
        : [classes.DropDownContent];
      return (
        <div className={style.join(' ')}>
          {React.cloneElement(child, { registerTab: this.registerTab })}
        </div>
      );
    });

  getDropDownClass = () => {
    const { expanded } = this.state;
    if (expanded) return [classes.DropDown, classes.open].join(' ');
    return classes.DropDown;
  };

  render() {
    const { tabs, selection } = this.state;
    const { children } = this.props;
    return (
      <React.Fragment>
        <header className={classes.AppBar}>
          <div className={classes.Logo}>WoW Friend Board</div>
          <div className={classes.DropDownTabHolder} role="tablist">
            {this.childTabs()}
          </div>
        </header>
        <div className={this.getDropDownClass()}>
          {this.renderChildren(children, tabs.indexOf(selection))}
        </div>
      </React.Fragment>
    );
  }
}

export default AppBar;

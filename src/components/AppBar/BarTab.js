import { Component } from 'react';
import PropTypes from 'prop-types';

// BarTab component for wrapping content for the AppBar
// requires title prop, children, and is injected with
// registerTab by the appBar on load
class BarTab extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOf([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element
    ]).isRequired,
    registerTab: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { registerTab, title } = this.props;
    registerTab(title);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default BarTab;

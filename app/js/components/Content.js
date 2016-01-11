import React from 'react';

export default class Content extends React.Component {

  render() {
    return (
      <div>Current value: {this.props.count}</div>
    );
  }
}

Content.propTypes = { count: React.PropTypes.number };

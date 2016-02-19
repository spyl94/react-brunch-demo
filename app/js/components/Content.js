import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class Content extends React.Component {

  render() {
    return (
      <FormattedMessage
        id="value"
        defaultMessage="Current value: {count} !"
        values={{
          count: this.props.count
        }}
      />
    );
  }
}

Content.propTypes = {
  count: React.PropTypes.number,
};

import React from 'react';
import { FormattedMessage } from 'react-intl';

const Content = ({ count }) =>
  <FormattedMessage
    id="value"
    defaultMessage="Current value: {count}"
    values={{ count }}
  />
;

Content.propTypes = {
  count: React.PropTypes.number,
};

export default Content;

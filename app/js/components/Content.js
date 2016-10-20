import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

const Content = ({ count }) =>
  <FormattedMessage
    id="value"
    defaultMessage="Current value: {count}"
    values={{ count }}
  />
;

Content.propTypes = {
  count: PropTypes.number,
};

const mapStateToProps = count => ({ count });
export default connect(mapStateToProps)(Content);

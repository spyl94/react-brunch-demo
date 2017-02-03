import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import type { State } from '../store';

const Content = ({ count }: { count: number }) =>
  <FormattedMessage
    id="value"
    defaultMessage="Current value: {count}"
    values={{ count }}
  />
;

const mapStateToProps = (state: State) => ({ count: state.counter });
export default connect(mapStateToProps)(Content);

import React from 'react';
import { connect, type Connector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import type { State } from '../store';

type Props = { count: number };
const Content = ({ count }: Props) =>
  <FormattedMessage
    id="value"
    defaultMessage="Current value: {count}"
    values={{ count }}
  />
;

const mapStateToProps = (state: State) => ({ count: state.counter });
const connector: Connector<{}, Props> = connect(mapStateToProps);
export default connector(Content);

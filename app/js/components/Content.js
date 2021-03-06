import React from 'react';
import { connect, type Connector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import type { State } from '../types';

type Props = {| count: number |};
const Content = ({ count }: Props) =>
  <FormattedMessage
    id="value"
    defaultMessage="Current value: {count}"
    values={{ count }}
  />
;

const mapStateToProps = (state: State) => ({
  count: state.counter,
  // notUsedProp: true,
  // An unknown props will also throw an error
});
const connector: Connector<{}, Props> = connect(mapStateToProps);
export default connector(Content);

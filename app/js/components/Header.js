import React from 'react';
import { connect, type Connector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { incrementAction, decrementAction } from '../redux/counter';
import type { Dispatch } from '../types';

type Props = {| // Always use exact type for props
  increment: () => void,
  decrement: () => void,
|};
const Header = ({ increment, decrement }: Props) =>
  <section>
    <Button
      onClick={() => increment()}
      bsStyle="primary"
    >
      <FormattedMessage
        id="increase"
        defaultMessage="Increase"
      />
    </Button>
    <Button
      onClick={() => decrement()}
      bsStyle="danger"
    >
      <FormattedMessage
        id="decrease"
        defaultMessage="Decrease"
      />
    </Button>
  </section>
;

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => { dispatch(incrementAction())}, // trying to dispatch { type: 'UNKNOWN_ACTION' }
  decrement: () => { dispatch(decrementAction())}, // will throw an incompatible error
});
const connector: Connector<{}, Props> = connect(
  null,
  mapDispatchToProps
);
export default connector(Header);

import React from 'react';
import { connect, type Connector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import * as actions from '../redux/counter';

type Props = { increment: Function, decrement: Function };
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

const connector: Connector<{}, Props> = connect(null, actions);
export default connector(Header);

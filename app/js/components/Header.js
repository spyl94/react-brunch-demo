// @flow
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import * as actions from '../redux/counter';

const Header = ({ increment, decrement }: { increment: Function, decrement: Function }) =>
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

export default connect(null, actions)(Header);

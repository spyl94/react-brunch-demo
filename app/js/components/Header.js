import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import * as actions from '../redux/counter';

const Header = ({ increment, decrement }) =>
  <section>
    <Button onClick={() => increment()}>
      <FormattedMessage
        id="increase"
        defaultMessage="Increase"
      />
    </Button>
    <Button onClick={() => decrement()}>
      <FormattedMessage
        id="decrease"
        defaultMessage="Decrease"
      />
    </Button>
  </section>
;

Header.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

export default connect(null, actions)(Header);

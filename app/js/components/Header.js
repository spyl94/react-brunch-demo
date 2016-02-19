import React from 'react';
import CountAction from '../actions/CountAction';
import {Button} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

export default class Header extends React.Component {

  handleIncrease() {
    CountAction.increase();
  }

  handleDecrease() {
    CountAction.decrease();
  }

  render() {
    return (
      <section>
        <Button onClick={this.handleIncrease}>
          <FormattedMessage
            id="increase"
            defaultMessage="Increase"
          />
        </Button>
        <Button onClick={this.handleDecrease}>
          <FormattedMessage
            id="decrease"
            defaultMessage="Decrease"
          />
        </Button>
      </section>
    );
  }

}

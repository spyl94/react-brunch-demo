import React from 'react';
import CountAction from '../actions/CountAction';
import {Button} from 'react-bootstrap';

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
          Increase
        </Button>
        <Button onClick={this.handleDecrease}>
          Decrease
        </Button>
      </section>
    );
  }

}

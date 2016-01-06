import React from 'react';
import CountAction from '../actions/CountAction';

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
        <button onClick={this.handleIncrease}>
          Increase
        </button>
        <button onClick={this.handleDecrease}>
          Decrease
        </button>
      </section>
    );
  }

}

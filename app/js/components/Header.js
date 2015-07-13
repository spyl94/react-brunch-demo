import CountAction from '../actions/CountAction';

export default class Header extends React.Component {

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

  handleIncrease() {
    CountAction.increase();
  }

  handleDecrease() {
    CountAction.decrease();
  }

}

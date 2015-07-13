import Header from './Header';
import Content from './Content';
import CountStore from '../stores/CountStore';

export default class App extends React.Component {

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    CountStore.addChangeListener(this.changeListener);
  }

  componentWillUnmount() {
    CountStore.removeChangeListener(this.changeListener);
  }

  getCountState() {
    return {
      count: CountStore.count,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Content count={this.state.count}/>
      </div>
    );
  }

  constructor() {
    super();
    this.state = this.getCountState();
  }

  _onChange() {
    this.setState(this.getCountState());
  }
}

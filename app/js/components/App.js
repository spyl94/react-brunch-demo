import Header from './Header';
import Content from './Content';
import CountStore from '../stores/CountStore';

export default class App extends React.Component {

	constructor() {
	    super();
	    this.state = this.getCountState();
	}

	_onChange() {
		this.setState(this.getCountState());
	}

	getCountState() {
		return {
			count: CountStore.count
		};
	}

	componentDidMount() {
		this.changeListener = this._onChange.bind(this);
		CountStore.addChangeListener(this.changeListener);
	}

	componentWillUnmount() {
		CountStore.removeChangeListener(this.changeListener);
	}

	render() {
		return (
		  <div>
	      	<Header />
	      	<Content count={this.state.count}/>
	      </div>
	    )
	}
}

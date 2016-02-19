import React from 'react';
import Header from './Header';
import Content from './Content';
import CountStore from '../stores/CountStore';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      count: CountStore.count,
    };
    this.onChange = ::this.onChange;
  }

  componentDidMount() {
    CountStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    CountStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      count: CountStore.count,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Content count={this.state.count} />
      </div>
    );
  }

}

import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  tick() {
    this.setState({
      date: new Date(),
    })
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
    console.log('mount')
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('ummount')
  }
  render() {
    return (
      <div>
        <h1>hellow, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
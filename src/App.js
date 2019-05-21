import React, { Component } from "react";
import Timer from "./Counter";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 90000
    };
  }

  startStop = () => {
    if (this.state.timer) {
      clearInterval(this.state.timer);
      this.setState({
        timer: null
      });
    } else {
      var timer = setInterval(() => {
        const newCount = this.state.count - 1;
        this.setState({
          count: newCount,
          timer: timer
        });
        if (this.state.count <= 0) {
          clearInterval(this.state.timer);
        }
      }, 1);
    }
  }

  updateCount = () =>
    this.setState({
      count: this.state.count + 1
    });

  reset = () => {
    clearInterval(this.state.timer);
    this.setState({
      count: 90000,
      timer: null
    });
  }

  increment = () => {
    clearInterval(this.state.timer);
    this.setState({
      count: this.state.count + 30000,
      timer: null
    });
  }

  decrement = () => {
    clearInterval(this.state.timer);
    this.setState({
      count: this.state.count - 30000,
      timer: null
    });
  }

  render() {
    // console.log("render has been executed!");
    return (
      <div className="App">
        <Timer
          startStop={this.startStop}
          updateCount={this.updateCount}
          reset={this.reset}
          increment={this.increment}
          decrement={this.decrement}
          {...this.state}/>
      </div>
    )
  }
}

export default App;

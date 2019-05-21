import React, { Component } from "react";

class Timer extends Component {

  render() {
    return (
      <div>
        <h1>Bacon Timer</h1>
        <h3>
          {Math.floor((this.props.count/(1000 * 60)))%60}:{Math.floor((this.props.count/1000))%60}
        </h3>
        <button onClick={this.props.startStop}>
            {this.props.timer ? 'Pause' : 'Start'}
        </button>
        <button onClick={this.props.reset}>
            Reset
        </button>
        <br/>
        <button onClick={this.props.increment}>
            Increment
        </button>
        <button onClick={this.props.decrement}>
            Decrement
        </button>
      </div>
    );
  }
}

export default Timer;

import React, { Component } from "react";
import Footer from "./Footer";

export default class LifeCycle extends Component {
  state = {
    number: 1,
  };
  handleIncrease = () => this.setState({ number: this.state.number + 1 });
  handleDecrease = () => this.setState({ number: this.state.number - 1 });
  componentDidMount() {
    var timer = 600;
    this.myCountDown = setInterval(() => {
      // console.log("c down", timer--);
    }, 1000);
    // only 1 run
    console.log("ok DID M");
  }
  componentWillUnmount() {
    clearInterval(this.myCountDown);
    console.log("UnM");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    if (nextState.number == 5) {
      return false;
    }
    return true;
  }
  componentDidUpdate(prevProps) {
    console.log(prevProps);
    console.log("Updated");
  }
  render() {
    console.log("rendered");
    return (
      <div className="text-center pt-5">
        <button onClick={this.handleDecrease} className="btn btn-danger">
          -
        </button>
        <button className="mx-5">{this.state.number}</button>
        <button onClick={this.handleIncrease} className="btn btn-warning">
          +
        </button>
        <Footer />
      </div>
    );
  }
}

import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { increaseCounterAction, resetCounter } from "./actions/counter";
import Form from "./components/Form";

class App extends React.Component {
  handleIncrease = (event) => {
    this.props.onIncrease();
  };
  handleReset = (event) => {
    this.props.onReset();
  };
  render() {
    const { counter } = this.props;
    return (
      <section>
        {counter}
        <button onClick={this.handleIncrease}>increase</button>
        <button onClick={this.handleReset}>reset</button>
        <Form />
      </section>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { counter: state.counter };
};

const mapActionToProps = {
  onIncrease: increaseCounterAction,
  onReset: resetCounter,
};

export default connect(mapStateToProps, mapActionToProps)(App);

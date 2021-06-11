import React, { Component, useEffect } from "react";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";

import { connect } from "react-redux";
import { fetchSmurfs } from "./actions/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  ////this useEffect isn't calling for some reason

  componentDidMount = (props) => {
    console.log("this is props", props);
    this.props.fetchSmurfs();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SmurfList />
          <AddForm />
        </main>
      </div>
    );
  }
}

export default connect(null, { fetchSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.

import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import Smurf from "./Smurf"

import { fetchSmurf } from './actions';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      newSmurf: ''
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateNewSmurf = this.updateNewSmurf.bind(this);
  }

  addSmurf(event) {
    event.preventDefault();
    this.props.addSmurf({
      value: this.state.newSmurf,
      complete: false
    });
    this.setState({
      newSmurf: ''
    });
  }

  updateNewSmurf(event) {
    this.setState({
      newSmurf: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <form onSubmit={this.addSmurf}>
        <input
        onChange={this.updateNewSmurf}
        placeholder="New Smurf"
        value={this.state.newSmurf}
        />
      </form>
      <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

mapStateToProps = (state) => {
  return{
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchSmurf }) (App);

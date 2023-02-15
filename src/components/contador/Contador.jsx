import "./Contador.css";
import React, { Component } from "react";

import Display from "./Display";
import Buttons from "./Buttons";
import PassForm from "./PassForm";

export default class Contador extends Component {
  state = {
    numero: this.props.valor || 0,
    salto: this.props.salto || 5,
  };

  increment = () => {
    this.setState({
      numero: this.state.numero + this.state.salto,
    });
  };

  decrement = () => {
    this.setState({
      numero: this.state.numero - this.state.salto,
    });
  };

  setSalto = (newPasso) => {
    this.setState({
      salto: newPasso,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero = {this.state.numero}/> 
        <PassForm salto={this.state.salto} setSalto={this.setSalto}/>
        <Buttons increment={this.increment} decrement={this.decrement}/>
      </div>
    );
  }
}

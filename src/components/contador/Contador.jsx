import "./Contador.css";
import React, { Component } from "react";

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

  setSalto = (event) => {
    this.setState({
      salto: +event.target.value,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <h3>{this.state.numero}</h3>
        <div>
          <label htmlFor="passoInput"> Passo: </label>
          <input
            id="passoInput"
            type="number"
            value={this.state.salto}
            onChange={this.setSalto}
          />
        </div>
        <button onClick={this.increment}>Inc</button>
        <button onClick={this.decrement}>Dec</button>
      </div>
    );
  }
}

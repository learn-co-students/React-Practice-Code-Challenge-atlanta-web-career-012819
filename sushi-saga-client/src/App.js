import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import Wallet from "./components/Wallet";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    index: 0,
    funds: 100
  };

  getSushis = () => {
    return fetch(API)
      .then(response => response.json())
      .then(sushis => this.setState({sushis}))
  };

  getCurrent = () => {
    const sushis = this.state.sushis
    const current = this.state.index;

    return sushis.slice(current, current + 4)
  }

  getNext = () => {
    let i = this.state.index;

    i = i + 4 >= this.state.sushis.length ? 0 : i + 4

    this.setState({
      index: i
    });
  }

  handleEat = (sushi) => {
    if (sushi.price <= this.state.funds && !sushi.eaten) {
      const sushis = this.state.sushis.map(item => {
        return sushi.id === item.id ? { ...item, eaten: true} : item
      })

      this.setState({
        sushis,
        eaten: [...this.state.eaten, sushi],
        funds: this.state.funds - sushi.price
       })
    }
  };

  handleMore = () => {
    this.getNext();
  };

  addFunds = e => {
    e.preventDefault();
    const amount = parseInt(e.target.amount.value, 10)

    if (amount > 0) this.setState({funds: this.state.funds + amount})

    e.target.reset()
  }

  componentDidMount() {
    this.getSushis()
  }

  render() {
    return (
      <div className="app">
        <Wallet addFunds={this.addFunds} />
        <SushiContainer
          sushis={this.getCurrent()}
          handleEat={this.handleEat}
          handleMore={this.handleMore}
        />
        <Table wallet={this.state.funds} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;

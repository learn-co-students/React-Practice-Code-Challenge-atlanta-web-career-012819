import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

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
    fetch(API)
      .then(response => response.json())
      .then(sushis => {
        const current = this.state.index;
        this.setState({
          sushis: sushis.slice(current, current + 4),
          index: current + 4
        });
      });
  };

  handleEat = (sushi) => {
    // console.log(id);
    // const sushi = this.state.sushis.find(sushi => sushi.id === id)
    // sushi.eaten = true
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
    this.getSushis();
  };

  componentDidMount() {
    this.getSushis();
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          handleEat={this.handleEat}
          handleMore={this.handleMore}
        />
        <Table wallet={this.state.funds} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;

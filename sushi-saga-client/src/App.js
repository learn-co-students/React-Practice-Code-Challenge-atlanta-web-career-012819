import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    index: 0
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

  handleEat = (id) => {
    // console.log(id);
    // const sushi = this.state.sushis.find(sushi => sushi.id === id)
    // sushi.eaten = true
    const sushis = this.state.sushis.map(sushi => {
      return sushi.id === id ? { ...sushi, eaten: true} : sushi
    })
    this.setState({ sushis })
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
        <Table />
      </div>
    );
  }
}

export default App;

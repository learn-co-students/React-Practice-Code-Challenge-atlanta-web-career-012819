import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    fourSushi: [],
    table: [],
    budget: 100
  }

  componentDidMount() {
    this.fetchSushi()
  }

  fetchSushi = () => {
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({sushis: sushis, fourSushi: sushis.slice(0, 4)}))
  }

  handleSushiClick = (sushi) => {
    
    if (sushi.price < this.state.budget && this.state.budget > 0) {
        let newBudget = this.state.budget - sushi.price
        let updateTable = [...this.state.table, sushi]

        this.setState({
          budget: newBudget,
          table: updateTable
        })
    }
  }

  renderFourMore = (e)=> {
    
    const allSushi = this.state.sushis
    const length = this.state.sushis.length
    const randomSushi = [
      allSushi[this.getRandomInt(length)],
      allSushi[this.getRandomInt(length)],
      allSushi[this.getRandomInt(length)],
      allSushi[this.getRandomInt(length)]
    ]

    this.setState({
      fourSushi: randomSushi
    })
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushis={this.state.fourSushi} handleSushiClick={this.handleSushiClick} table={this.state.table} renderFourMore={this.renderFourMore}/>
        <Table table={this.state.table} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;
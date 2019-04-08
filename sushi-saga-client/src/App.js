import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    money: 100
  }

  handleData = data => {
    const newSushiData = data.map(sushi => {
      sushi.eaten = false
      sushi.id < 5 ? sushi.active = true : sushi.active = false
      return sushi
    })
    this.setState({ sushi: newSushiData })
  }

  handleOrder = sushiId => {
    const sushi = this.state.sushi.find(s => s.id === sushiId)
    if (sushi.price <= this.state.money) {
      const sushiList = this.state.sushi.map(s => {
        return s.id === sushiId ? {...s, eaten: true} : s
      })
      this.setState({
        sushi: sushiList,
        money: this.state.money - sushi.price})
    } else {
      alert(`You don't have enough money for this sushi!`)
    }
  }

  handleMore = () => {
    const lastActive = this.state.sushi.filter(s => s.active)[3]
    const idOfLastActive = this.state.sushi.indexOf(lastActive) + 1
    const newSushiArray = this.state.sushi.map(s => {
      return (s.id > idOfLastActive && s.id < idOfLastActive + 5) ? {...s, active: true} : {...s, active: false} 
    })
    this.setState({
      sushi: newSushiArray
    })
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => this.handleData(data))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi.filter(s => s.active)} handleOrder={this.handleOrder} handleMore={this.handleMore} />
        <Table sushi={this.state.sushi} money={this.state.money}/>
      </div>
    );
  }
}

export default App;
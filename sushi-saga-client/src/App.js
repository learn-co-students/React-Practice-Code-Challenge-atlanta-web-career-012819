import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    eatenIds: [],
    lastSushiIndex: 0,
    budget: 100
  }
  handleMoreSushi = (e)=>{
    const sushiLeft = this.state.sushi.length - this.state.lastSushiIndex
    if(sushiLeft >4 )
      this.setState({lastSushiIndex: this.state.lastSushiIndex + 4})
  }

  handleEat = (sushi) =>{
    if (this.calculateMoney()>= sushi.price){
      this.setState({eatenIds: [...this.state.eatenIds,sushi.id]})
    }
  }
  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({sushi: data}))
  }


  offerSushi(){
    //pick four sushi, 
    return this.state.sushi.slice(this.state.lastSushiIndex, this.state.lastSushiIndex + 4)
  }
  
  sushiEaten(){
    const eatenIds = this.state.eatenIds
    const sushi = this.state.sushi
    return sushi.filter(function(sushi){
      return eatenIds.includes(sushi.id)
    })
  }

  calculateMoney(){
    let spent = 0
    //if(this.state.eatenIds.length > 0)
      //console.log('this.shushiEaten() :', this.sushiEaten());
      spent =  this.sushiEaten().reduce((sum,ele)=>{
        return sum + ele.price
      },0)
    return this.state.budget - spent
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  
          sushi={this.offerSushi()} 
          moreAction={this.handleMoreSushi} 
          eatAction={this.handleEat}
          eatenIds={this.state.eatenIds} />

        <Table sushiEaten={this.state.eatenIds} budget={this.calculateMoney()} />
      </div>
    );
  }
}

export default App;
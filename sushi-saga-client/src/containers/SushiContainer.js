import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => (
  <div className="belt">
    {props.sushi.map(sushiObj => <Sushi sushi={sushiObj} handleClick={props.handleOrder}/>)}
    <MoreButton handleMore={props.handleMore}/>
  </div>
)

export default SushiContainer
import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        
      {props.sushis.map((sushiElement)=> <Sushi sushi={sushiElement} handleSushiClick={props.handleSushiClick} table={props.table}/>
      )}
     <MoreButton renderFourMore={props.renderFourMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
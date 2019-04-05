import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const amIEatin = (id)=>{
    return props.eatenIds.includes(id)
  }
  return (
    <Fragment>
      <div className="belt">
        {props.sushi.map((sushi)=><Sushi key={sushi.id} sushi={sushi} eaten={amIEatin(sushi.id)} eatAction={props.eatAction} />)}
        <MoreButton moreAction={props.moreAction}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
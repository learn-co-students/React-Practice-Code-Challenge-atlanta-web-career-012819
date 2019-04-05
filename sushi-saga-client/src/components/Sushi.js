import React from 'react'

const Sushi = (props) => {
  const {img_url, price, name} = props.sushi
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={()=>props.eatAction(props.sushi)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eaten ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
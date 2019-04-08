import React from 'react'

const Sushi = (props) => (
    <div className="sushi">
      <div className="plate" 
           onClick={() => {props.handleClick(props.sushi.id)}} >
          {!props.sushi.eaten? <img src={props.sushi.img_url} alt={props.sushi.name} width="100%" /> : null }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
)

export default Sushi
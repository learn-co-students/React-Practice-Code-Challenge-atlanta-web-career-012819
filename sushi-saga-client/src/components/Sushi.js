import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={(e) => props.handleSushiClick(props.sushi)}>
        { 
          props.table.includes(props.sushi) ?
            null
          :
            <img src={props.sushi.img_url} alt="sushi" width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
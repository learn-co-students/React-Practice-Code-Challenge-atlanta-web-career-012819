import React from 'react'

const MoreButton = (props) => {
  
  let handleClick = () => {
    props.renderFourMore()
  }
    return <button onClick={handleClick}>
            More sushi!
          </button>
}

export default MoreButton
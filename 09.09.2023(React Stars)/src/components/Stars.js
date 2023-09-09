import React from 'react'

const Stars = (props) => {
  const { rating } = props
  const stars = [1,2,3,4,5]
  return (
    <div>
      {stars.map(elem => <span className={`fa fa-star ${Math.round(rating) >= elem && 'active'}`}></span>)}
    </div>
  )
}

export default Stars


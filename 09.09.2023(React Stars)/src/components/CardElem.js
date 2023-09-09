import React from 'react'
import Stars from './Stars';

const CardElem = (props) => {


      const {item, deleteCard} = props;

  return (
    <div className='card' onDoubleClick={() => deleteCard(item.id)}>
      <div className='card__img'><img src={item.images[0]} alt={item.title} /></div>
      <div className='card__info'>
        <h2>{item.title}</h2>
        <p>Price: {item.price} $</p>
        <div><Stars rating={item.rating}/></div>
       </div>
    </div>
  )
}

export default CardElem
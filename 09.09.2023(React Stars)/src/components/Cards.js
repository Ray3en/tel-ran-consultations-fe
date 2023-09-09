import React from 'react'
import CardElem from './CardElem'


const Cards = (props) => {

    const{items, deleteCard} = props;

  return (
    <>
    <div className='cards__container'>
        {(items.length > 0) ? items.map(elem => <CardElem key={elem.id} item={elem} deleteCard={deleteCard}/>) : <p>Please wait...</p> }
        <div>
        </div>
    </div>
    <div style={{width: '100%'}}>
            <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://jspaint.app/#local:4409d686e8302">
            </iframe>
    </div>
    </>
  )
}

export default Cards
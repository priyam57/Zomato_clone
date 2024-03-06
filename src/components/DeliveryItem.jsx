import React from 'react'

const DeliveryItem = ({item}) => {
  return (
    <div>
        <div className='delivery-cover'>
            <img src={item.cover} alt='cover-page' className='delivery-image'/>
        </div>
        <div className='delivery-title'>{item.title}</div>
    </div>
  )
}

export default DeliveryItem
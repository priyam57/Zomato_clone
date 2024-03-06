import React from 'react'
import Filters from './Filters'
import DeliveryCollection from './DeliveryCollection'
import TopBrands from './TopBrands'
import Explore from './Explore'
import { Restaurant } from '../data/Restaurant'

const deliveryFilters = [
  {
    id:1,
    icon : <i className='fi fi-rr-settings-sliders absolute-center'></i>,
    title : "Filters",
  },
  {
    id:2,
    title : "Rating: 4.0+",
  },
  {
    id:3,
    title:"Safe and Higeneic"
  },
  {
    id:4,
    title:"Pure Veg"
  },
  {
    id:5,
    title:"Delivery Time",
    icon : <i className='fi fi-rr-apps-sort absolute-center'></i>
  },
  {
    id:6,
    title: "Greate Offers",
  }
]

const restaurantList = Restaurant;

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
       <Filters filterList={deliveryFilters}/>
      </div>
      <DeliveryCollection/>
      <TopBrands/>
      <Explore list={restaurantList} collectionName = 'Delivery Restaurants in Bangalore' />
    </div>
  )
}

export default Delivery
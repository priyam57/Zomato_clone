import React from 'react'
import Collection from './Collection'
import { DiningOut } from '../data/DiningOut';
import Filters from './Filters';
import Explore from './Explore';

const collectionList = [
  {
    id:1,
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1705557723.png?output-format=webp",
    places:"12 places"
  },
  {
    id:2,
    title:"Newly Opened",
    cover:"https://b.zmtcdn.com/data/collections/f25923193488d2884f8689f185d418ef_1705558811.png?output-format=webp",
    places:"12 places",
  },
  {
    id:3,
    title:"Veggie Friendly",
    cover:"https://b.zmtcdn.com/data/collections/fdcf90c9aadc2e4eed25bc5486653989_1709187376.png?output-format=webp",
    places:"23 places"
  },
  {
    id:4,
    title:"Trending this week",
    cover:"https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247359.jpg?output-format=webp",
    places:"30 places"
  },
  {
    id:5,
    title:"Best of Bengaluru",
    cover:"https://b.zmtcdn.com/data/collections/fbd237478a5d3b6ea08de83c30230cdd_1705558245.png?output-format=webp",
    places:"116 places"
  },
  {
    id:6,
    title:"Outdoor Seating",
    cover:"https://b.zmtcdn.com/data/collections/1322e8a1ff6ae914cd70bc8ec849d20d_1705558664.png?output-format=webp",
    places:"24 places"
  },
  {
    id:7,
    title:"Brilliant Biryanis",
    cover:"https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg?output-format=webp",
    places:"16 places"
  },
  {
    id:8,
    title:"Best Pizza Places In Town",
    cover:"https://b.zmtcdn.com/data/collections/92bf1f87ad0a90b94007e79b13eb592c_1705558517.png?output-format=webp",
    places:"22 places"
  }
]

const diningFilters = [
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

const diningList = DiningOut;
const Dining = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className='max-width'>
      <Filters filterList={diningFilters}/>

      </div>
      <Explore list={diningList} collectionName="Dine-out Restaurents in Bangalore"/>
    </div>
  )
}

export default Dining
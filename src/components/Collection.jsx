import React from 'react';
import Slider from "react-slick";
import NextArrow from '../carousel/NextArrow';
import PrevArrow from '../carousel/PrevArrow';

const Collection = ({list}) => {

  const settings = {
    infinite:false,
    slidesToShow:4,
    slidesToScroll:1,
    nextArrow: <NextArrow/>,
    prevArrow : <PrevArrow/>,

};

  return (
    <div className='collection-wrapper'>
        <div className='max-width collection'> 
        <div className='collection-title'>Collections</div>
        <div className='collection-subtitle'>
            <div className='collection-text'>
            Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
            </div>
            <div className='collection-location'>
               <div>All collections in Bangalore</div>
               <i className='fi fi-rr-caret-right absolute-center'></i>
            </div>

        </div>
        <Slider {...settings}>
                {
                    list.map((item)=>{
                        return(
                        <div>
                            <div className='collection-cover'>
                                <img src={item.cover} className='collection-image' alt={item.title} />
                                <div className='collection-card'>{item.title}</div>
                                <div className='collection-card-subtitle'>
                                    <div>{item.places}</div>
                                    <i className='fi fi-rr-caret-right absolute-center'></i>
                                </div>
                            </div>
                        </div>
                        )
                        
                    })
                }
            </Slider>
        

        </div>

    </div>
  )
}

export default Collection
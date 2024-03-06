import React from 'react'

const Header = () => {
  return (
    <div className='max-width header'>
      <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='zomato-logo' className='header-logo'/>
      <div className='header-right'>
        <div className='header-location'>
          <div className='location-wrapper'>
            <div className='location-icon'>
            <i className="fi fi-rr-marker absolute-center location-icon-logo"></i>
             <div>Bangalore</div>
            </div>
            <i className='fi fi-rr-caret-down  absolute-center'></i>
          </div>
          <div className='location-seperate'></div>
          <div className='header-search'>
            <i className='fi fi-rr-search  absolute-center search-icon'></i>
            <input placeholder='Search for restaurent, cuisine or a dish' className='search-input' />
          </div>
        </div>
        <div className='profile-wrapper'>
          <img src='https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A'
           alt='profile-logo' className='header-profile-image'/>
           <span className='header-username'>Vanshika</span>
           <i className='fi fi-rr-angle-small-down  absolute-center profile-down'></i>
        </div>
      </div>
    </div>
  )
}

export default Header
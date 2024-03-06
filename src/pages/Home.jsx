import React, { useState } from 'react'
import Header from '../components/Header'
import TabOption from '../components/TabOption'
import Footer from '../components/Footer'
import Delivery from '../components/Delivery'
import Dining from '../components/Dining'
import Night from '../components/Night'

const Home = () => {
    const [active , setActive] = useState("Delivery")

    const screenMade = (tab)=>{
        switch(tab){
            case "Delivery":
                return <Delivery/>
            case "Dining Out":
                return <Dining/>
            case "Nightlife":
                return <Night/>
            default:
                return <Delivery/>
        }
    }

  return (
    <div>
        <Header/>
        <TabOption active= {active} setActive = {setActive} />
        {screenMade(active)}

        <Footer/>
    </div>
  )
}



export default Home

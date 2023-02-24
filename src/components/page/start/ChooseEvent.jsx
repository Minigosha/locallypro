import React, {useState} from 'react'
import Hero from '../../atoms/hero/Hero'
import Event from '../../atoms/event/Event'
import Footer from '../../organims/footer/Footer'
import HeaderMessage from '../../atoms/header/HeaderMessage'

const ChooseEventPage = () => {
    const [events, setEvents] = useState([
        <Event 
            date = {'2/7'}
            time = {'19:00-20:00'}
            address = {'Mjärdevi, Linköping'}
        />,
        <Event 
            date={'1/4'}
            time = {'17:00-19:00'}
            address = {'T1, Linköping'}
        
        />,
        <Event 
            date={'3/8'}
            time = {'18:00-19:00'}
            address = {'Stora Torget, Linköping'}
        />,
        <Event 
            date={'4/4'}
            time = {'17:00-19:00'}
            address = {'T1, Linköping'}
        />,
    ])
    return(
        <div>
            <Hero 
                /*source = {"https://images.pexels.com/photos/4421377/pexels-photo-4421377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                */
                alt = {"Green Wheat"}    
            ></Hero>
            <HeaderMessage  message={'Choose where and when you want to buy local products:'}/> 
            {events.map(event => event)}

            <Footer></Footer>



        </div>
    )
}
export default ChooseEventPage




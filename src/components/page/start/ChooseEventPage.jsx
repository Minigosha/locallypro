import React, {useState} from 'react'
import Hero from '../../atoms/hero/Hero'
import Event from '../../atoms/event/Event'
import Footer from '../../organims/footer/Footer'
import Intro from '../../atoms/intro/Intro'
import EventCard from '../../molecules/eventCard/EventCard'
import ContentContainer from '../../atoms/contentContainer/ContentContainer'
//import Search from '../../atoms/search/Search'

const ChooseEventPage = () => {
    const [rawEvents, setRawEvents] = useState([
        {
            date : '2/7',
            time : '19:00-20:00',
            address : 'Mjärdevi, Linköping'
        },
        {
            date : '1/4',
            time : '17:00-19:00',
            address : 'T1, Linköping'
        },
        {
            date : '9/3',
            time : '18:00-19:00',
            address : 'Tallboda, Linköping'
        },
        {
            date : '6/5',
            time : '15:00-16:30',
            address : 'Malmslätt, Linköping'
        },
    ])

    //setRawEvents()

    const [events, setEvents] = useState([
        <Event 
            date = '2/7'
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
        <>
            {/* Header */}
        
            <Hero 
                source = {"https://images.pexels.com/photos/4421377/pexels-photo-4421377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                
                alt = {"Green Wheat"}    
            ></Hero>
        

            {/* Content */}
            <Intro  intro={'Choose when and where you want to buy local products:'}/>

            {/*<Search></Search>*/}

            <ContentContainer>
                {/*{events.map(event => event)}*/}
                {rawEvents.map(event => <EventCard date = {event.date} time = {event.time} address = {event.address} />) }

            </ContentContainer>
            
            <Footer></Footer>



        </>
    )
}
export default ChooseEventPage




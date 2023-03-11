import React, {useState} from 'react'
import Hero from '../../atoms/hero/Hero'
import Event from '../../atoms/NOevent/Event'
//import Footer from '../../organisms/footer/Footer'
import Intro from '../../atoms/intro/Intro'
import EventCard from '../../molecules/eventCard/EventCard'
import ContentContainer from '../../atoms/contentContainer/ContentContainer'
import Footer from '../../organisms/footer/Footer'
import UserButton from '../../atoms/buttons/user/UserButton'
import BasicModal from '../../molecules/modals/BasicModal'
import LoginForm from '../../molecules/forms/login/LoginForm'
//import Search from '../../atoms/search/Search'


const ChooseEventPage = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [events, setEvents] = useState([
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

    //setEvents()

    return(
        <>
            <BasicModal
                onClose={() => setShowLogin(false)} show={showLogin}
                modalTitle="Log in"
                modalContent={<LoginForm setShow={setShowLogin} />}
            />

            {/* Header */}
        
            <Hero 
                source = {"https://i.pinimg.com/originals/f0/77/d3/f077d3049799fee40694e5db9a90f5ca.png"}
                
                alt = {"Green Wheat"}    
            ></Hero>
        

            {/* Content */}
            <Intro  intro={'Choose when and where you want to buy local products:'}/>

            {/*<Search></Search>*/}

            <ContentContainer>
                {/*{events.map(event => event)}*/}
                {events.map(event => <EventCard date = {event.date} time = {event.time} address = {event.address} />) }

            </ContentContainer>

            {/* FOOTER */}
            <Footer>
                <UserButton
                  onClick={() => setShowLogin(true)}
                />

            </Footer>

            




        </>
    )
}
export default ChooseEventPage




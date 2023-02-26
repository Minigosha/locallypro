import React from 'react'
import './Hero.css'

const Hero = ({source, altText}) => {
    return(
        <>
            <div className = "hero" style={{backgroundImage: "linear-gradient(45deg, rgba(61, 188, 54, 0.5), rgba(0, 0, 0, 0.5)), url('"+source+"')"}}>
                <img className = "img"
                    /*src = {source}*/
                    alt = {altText}
                    
                />
                <h1>LocallyPro</h1>
            </div>

        </>
    )
}


export default Hero
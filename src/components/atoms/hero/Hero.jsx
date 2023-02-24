import React from 'react'
import './Hero.css'

const Hero = ({source, altText}) => {
    return(
        <>
            <div className = "hero">
                <img className = "img"
                    src = {source}
                    alt = {altText}
                />
                <h1>LocallyPro</h1>
            </div>

        </>
    )
}


export default Hero
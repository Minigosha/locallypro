import React from "react";
import './ShowMore.css'
import { useState } from "react";
import OpenSubmenu from "../../atoms/buttons/submenu/OpenSubmenu";
import CloseSubmenu from "../../atoms/buttons/submenu/CloseSubmenu";
//TUTORIAL : https://contactmentor.com/show-hide-component-react-js/
//https://www.pluralsight.com/guides/how-to-show-and-hide-reactjs-components




export default function ToggleVissibility({children}){
    const [showMore, setShowMore] = useState();
    /*var buttonText = show ? "Hide Component" : "Show Component";*/
    var buttonShowed = showMore ? <CloseSubmenu/> : <OpenSubmenu/>;

    function toggleShowMore() {
        setShowMore(!showMore);
      }

    return(
        <div >{/*className="centered"*/}
            
            {showMore && children}
            <div className="centered">
                <div onClick={toggleShowMore}> {buttonShowed}</div>
                {/*<OpenSubmenu  onClick={toggleShowMore}></OpenSubmenu>*/}
                {/*<button onClick={toggleShow}>{buttonText}</button>*/}

            </div>
        </div>
    )
}
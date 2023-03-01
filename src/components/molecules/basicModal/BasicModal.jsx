//import React, { useEffect } from "react";
//import {CSSTransition} from 'react-transition-group';
import './BasicModal.css';
//import { ReactDOM } from "react";
import React from 'react';

//TUTORIAL:
//https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a


const BasicModal = props /*(modalTitle, modalContent, modalFooter)*/  => {

    
    if (!props.show){
        return null
    }


    return (
        /*<CSSTransition
            in={props.show}
            unmountOnExit
            timeout={{enter:0, exit: 300}}
        >*/

            <div className={`'modal' ${props.show ?'show': ''}`} onClick={props.onClose}>
                <div className='modal-content' onClick = {e => e.stopPropagation()}>
          
                <div className='modal-header'>

                    <h4 className='modal-title'>
                        {props.modalTitle}
                        MODAL TITLE
                    </h4>

                </div>

                <div className='modal-body'>
                    {/*{modalContent}*/}
                    Modal content
                </div>

                <div className='modal-footer'>
                    {/*{modalFooter}*/}
                    <button onClick={props.onClose} className='button'> Close </button>
                
                </div>

            </div>
        </div>
       /* </CSSTransition>*/
    )

}
export default BasicModal
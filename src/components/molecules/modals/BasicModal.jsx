//import React, { useEffect } from "react";
//import {CSSTransition} from 'react-transition-group';
import './BasicModal.css';
//import { ReactDOM } from "react";
import React from 'react';
//import BasicForm from '../../atoms/forms/BasicForm';

//TUTORIAL:
//https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a


const BasicModal = props => {

    
    if (!props.show){
        return null
    }


    return (


            <div className={`'modal' ${props.show ?'show': ''}`} onClick={props.onClose}>
                
                <div className={'modal-content'} onClick = {e => e.stopPropagation()}>
          
                <div className='modal-header'>

                    <h2 className='modal-title'>
                        {props.modalTitle}
                    </h2>

                </div>

                <div className='modal-body'>
                    {props.modalContent}
                </div>

                <div className='modal-footer'>
                    {props.modalFooter}
                </div>

            </div>
        </div>
      
    )

}
export default BasicModal
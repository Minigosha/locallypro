import React from "react";

//TUTORIAL:
//https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a


const BasicModal = props /*(modalTitle, modalContent, modalFooter)*/  => {

if (!props.show){
    return null
}
    return (
        <div className= "modal">
            <div className="modal-content">
                <div className="modal-header">

                    <h4 className="modal-title">
                        {/*{modalTitle}*/}
                        MODAL TITLE
                    </h4>

                </div>

                <div className="modal-body">
                    {/*{modalContent}*/}
                    Modal content
                </div>

                <div className="modal-footer">
                    {/*{modalFooter}*/}
                    <button> Close </button>
                
                </div>

            </div>
        </div>
    )

}
export default BasicModal
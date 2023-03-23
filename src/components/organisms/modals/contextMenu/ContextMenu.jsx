import React from "react";
import './ContextMenu.css'

// TUTORIALS TO CHECK (Mouse position with js):
// https://blog.logrocket.com/creating-react-context-menu/
// https://medium.com/@anandsimmy7/creating-a-custom-context-menu-component-using-react-hooks-10bcbc65daae
// https://www.pluralsight.com/guides/how-to-create-a-right-click-menu-using-react



const ContextMenu = props => {
        
    if (!props.show){
        return null
    }
    return(
        

        <div className='background' onClick={props.onClose}>
            
                <div className='content' onClick = {e => e.stopPropagation()} >
                    
                    <div>
                        {props.modalContent}
                    </div>

                </div>

            
        </div>
    )
}
export default ContextMenu;
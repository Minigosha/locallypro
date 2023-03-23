import React from "react";
import './ContextMenu.css'



function BasicContextMenuContent() {


    return (
        <div>
            <div className='item'>
                See details
            </div>
            <div className='item'>
                Edit
            </div>
            <div className='item'>
                Duplicate 
            </div>
            <div className='item-warning'>
                Remove item
            </div>
        </div>
    )

}
export default BasicContextMenuContent;

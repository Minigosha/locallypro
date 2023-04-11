import React from "react";
import './ContextMenu.css';





function BasicContextMenuContent({ handleDelete, handleEdit}) {

    return (
        <div>
            {/*
            <div className='item'>
                See details
            </div>
            */}
            <div className='item' onClick={() => handleEdit()} >
                Edit
            </div>
            {/*
            <div className='item'>
                Duplicate 
            </div>
            */}
            <div className='item-warning' onClick={() => handleDelete()}>
                Remove item
            </div>
        </div>
    )

}
export default BasicContextMenuContent;

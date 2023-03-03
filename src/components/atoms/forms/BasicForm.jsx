
import React from 'react'
import './BasicForm.css'


const BasicForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
      
        <label for="fname" className='labels'>First name:</label><br/>
        <input type="text" className='basicForm' placeholder='First name' onChange={(e)=>{props.changeText(e.target.value)}}
        ></input><br/>
        
        <label for="lname" className='labels'>Last name:</label><br/>
        <input type="text" className='basicForm' placeholder='Last name' onChange={(e)=>{props.changeText(e.target.value)}}
        ></input><br/>

        <input type="submit" value="Accept"></input>
      </form>

    </div>
  
  )
}

export default BasicForm

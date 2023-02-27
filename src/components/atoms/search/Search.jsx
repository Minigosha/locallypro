
import React from 'react'
import './Search.css'

const Text = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" className='textField' placeholder='search...' onChange={(e)=>{props.changeText(e.target.value)}}></input>
      </form>
    </div>
  
  )
}

export default Text
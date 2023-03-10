
import React from 'react'
import './SearchBar.css'
import '../../molecules/forms/BasicForm.css'



const SearchBar = (props) => {


  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input 
          type="text" 
          className = {`textField searchField`}
          placeholder='Search...' 
          onChange={(e)=>{props.changeText(e.target.value)}}

        ></input>
      </form>
    </div>
  
  )
}

export default SearchBar
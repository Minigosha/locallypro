
import React from 'react'
import './SearchBar.css'
import '../../molecules/forms/BasicForm.css'
import { useState } from 'react'

//TUTORIAL: https://www.youtube.com/watch?v=sWVgMcz8Q44



const SearchBar = (props, myData, returnData) => {

  const [query, setQuery] = useState("");

  const fetchData = (value) =>{
    //fetch("https://jsonplaceholder.typicode.com/users")
    fetch({myData})
      .then(response => response.json())
      .then((json) => {
        const results = json.filter((myData) => {
          return (
            returnData 
            /*value && 
            user && 
            user.name && 
            user.name.toLowerCase().includes(value) */
          
         )
        })
        console.log(results)
      });
  }

  const handleChange = (value) => {
    setQuery(value)
    fetchData(value)
  }



  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input 
          type="search" 
          name="search-form"
          className = {`textField searchField`}
          placeholder='Search...' 
          onChange={(e)=>{handleChange(e.target.value)}}

        ></input>
      </form>
    </div>
  
  )
}

export default SearchBar
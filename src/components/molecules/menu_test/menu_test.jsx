import React from "react";
import { useState } from "react";


function FruitPicker() {
    const [myFruit, setSelectedFruit] = useState('orange'); // Declare a state variable...
    // ...
    return (
      <select
        value={myFruit} // ...force the select's value to match the state variable...
        onChange={e => setSelectedFruit(e.target.value, console.log(myFruit))} // ... and update the state variable on any change!
      >
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
    );
  }

  export default FruitPicker;


  ///////////////////////////////////////////////////////////
/*  const [selectValue, setSelectValue] = React.useState("");

  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
    console.log(value);
  };

  <select onChange={onChange} className="form-select">
  <option defaultValue disabled>
      Select Fruit
  </option>
  <option value="Apples">Apples</option>
  <option value="Grape">Grape</option>
  <option value="Bananas">Bananas</option>
  <option value="Blueberries">Blueberries</option>
  <option value="Melons">Melons</option>
</select>

*/
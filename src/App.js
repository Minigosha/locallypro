import React from "react";
import ProducerStartPage from './components/page/producer/ProducerStartPage';
import ChooseEventPage from './components/page/start/ChooseEventPage';
import BasicModal from "./components/molecules/basicModal/BasicModal";
import { useState } from "react";



function App() {
  {/* TESTING BASICMODAL */}
  const[show, setShow] = useState(false)

  return (
    <div>

      <ChooseEventPage></ChooseEventPage>
      <ProducerStartPage></ProducerStartPage>
  
        {/* TESTING BASICMODAL */}
        <div>
          <button onClick={() => setShow(true)}>Show modal</button>            
          <BasicModal onClose ={()=>setShow(false)} show = {show} />
        </div>
          {/* TESTING BASICMODAL */}

    </div>
  );
}

export default App;

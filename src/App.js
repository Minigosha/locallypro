import React from "react";
import { Routes, Link, Route, useNavigate } from "react-router-dom";

import ProducerStartPage from './components/page/producer/ProducerStartPage';
import ChooseEventPage from './components/page/start/ChooseEventPage';
import BasicModal from "./components/molecules/modals/BasicModal";
import { useState } from "react";
import AddEventForm from "./components/molecules/forms/event/AddEventForm";
//import { ReactDOM } from "react";



function App() {
  const nav = useNavigate();
  const[show, setShow] = useState(false)



  return (
    <div>

      {/*<ProducerStartPage></ProducerStartPage>*/}
      
  
        {/* TESTING BASICMODAL */}
        <div>
          <button onClick={() => setShow(true)}>Show modal</button>            
          <BasicModal onClose ={()=>setShow(false)} show = {show}
          modalTitle= "test"
          modalContent={<AddEventForm/>}
          />

     
          {/*<Route path="ProducerStartPage" element={<ProducerStartPage />}/>*/}
          

        </div>
        <div>
                <button onClick={()=> <ProducerStartPage/>}> Producer button</button>

                <Link to="/ProducerStartPage">Producer Link</Link>
                <Link to="/ChooseEventPage">Event Link</Link>

                <Routes>
                    <Route path="/" element={<ChooseEventPage/>} />
                    <Route path="/ChooseEventPage" element={<ChooseEventPage/>} />
                    <Route path="/ProducerStartPage" element={<ProducerStartPage/>} />
                </Routes>

            </div>
     

    </div>
  );
}

export default App;

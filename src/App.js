import React from "react";
import { Routes, Link, Route, useNavigate } from "react-router-dom";

import ProducerStartPage from './components/page/producer/ProducerStartPage';
import ChooseEventPage from './components/page/start/ChooseEventPage';
import ChooseProductPage from "./components/page/customer/ChooseProductPage";
import ChooseProducerPage from "./components/page/customer/ChooseProducerPage";
import BasicModal from "./components/molecules/modals/BasicModal";
import { useState } from "react";
import AddEventForm from "./components/molecules/forms/event/AddEventForm";
//import { ReactDOM } from "react";



function App() {
  const nav = useNavigate();
  const [show, setShow] = useState(false)



  return (
    <div>

      <div>

        <Link to="/ProducerStartPage">Producer Link</Link> <br/>
        <Link to="/ChooseEventPage">Event Link</Link> <br/>
        <Link to="/ChooseProducerPage">Choose Producer</Link> <br/>
        <Link to="/ChooseProductPage">Choose Product</Link> <br/>

        <Routes>
          <Route path="/" element={<ChooseEventPage />} />
          <Route path="/ChooseEventPage" element={<ChooseEventPage />} />
          <Route path="/ProducerStartPage" element={<ProducerStartPage />} />
          <Route path="/ChooseProducerPage" element={<ChooseProducerPage />} />
          <Route path="/ChooseProductPage" element={<ChooseProductPage />} />
        </Routes>

      </div>


    </div>
  );
}

export default App;

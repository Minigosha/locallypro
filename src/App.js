import React from "react";
import BasicModal from "./components/molecules/basicModal/BasicModal";
import ProducerStartPage from './components/page/producer/ProducerStartPage';
import ChooseEventPage from './components/page/start/ChooseEventPage';

function App() {
  return (
    <div>
      <ChooseEventPage></ChooseEventPage>
      <ProducerStartPage></ProducerStartPage>

    </div>
  );
}

export default App;

import React from "react";
import { Routes, Link, Route, useNavigate } from "react-router-dom";

import ProducerStartPage from './components/page/producer/ProducerStartPage';
import ChooseEventPage from './components/page/start/ChooseEventPage';
import ChooseProductPage from "./components/page/customer/ChooseProductPage";
import ChooseProducerPage from "./components/page/customer/ChooseProducerPage";
import SuperAdminStart from "./components/page/superAdmin/SuperAdminStart";
import BasicModal from "./components/molecules/modals/BasicModal";
import { useState } from "react";
import AddEventForm from "./components/molecules/forms/event/AddEventForm";
//import { ReactDOM } from "react";
//import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
//import React, { useState } from "react";
//import { PageLayout } from "./components/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { ProfileData } from "./components/ProfileData";
import { callMsGraph } from "./graph";
import EventCard from "./components/molecules/eventCard/EventCard";


function ProfileContent() {
  const { instance, accounts } = useMsal();
  const [accessToken, setAccessToken] = useState(null);
  const [apiReply, setApiReply] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function RequestAccessToken() {
      const request = {
          ...loginRequest,
          account: accounts[0]
      };

      // Silently acquires an access token which is then attached to a request for Microsoft Graph data
      instance.acquireTokenSilent(request).then((response) => {
          setAccessToken(response.accessToken);
      }).catch((e) => {
          instance.acquireTokenPopup(request).then((response) => {
              setAccessToken(response.accessToken);
          });
      });
  }

  function TryGetDataFromApi() {

    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };
    console.log(headers); // Log headers object to confirm Authorization header is set

    fetch("/api/Events", options)
    
   // fetch("/api/Events")
      .then(response =>
      {      
        response.json().then(data => setApiReply(data))
      })
    .catch(error => console.log(error));

   
  }

  return (
      <>
          <h5 className="card-title">Welcome {name}</h5>
          {accessToken ? 
              <div>
                {JSON.stringify(accessToken)}
                <p>Access Token Acquired!</p>
                <button onClick={TryGetDataFromApi}>Request Api Data</button>
              </div>
              :
              <button onClick={RequestAccessToken}>Request Access Token</button>
          }
          {apiReply && <p>{JSON.stringify(apiReply)}</p>} {/* Display API response */}
      </>
  );
};



function App() {
  const nav = useNavigate();
  const [show, setShow] = useState(false)



  return (
    <div>

      <AuthenticatedTemplate>
        <p>You are signed in!</p>
        <ProfileContent />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>You are not signed in! Please sign in.</p>
      </UnauthenticatedTemplate>


      <div>

        <Link to="/SuperAdminStart">Super Admin Site</Link> <br/>
        <Link to="/ProducerStartPage">Producer Link</Link> <br/>
        <Link to="/ChooseEventPage">Customer Link</Link> <br/>
        {/*<Link to="/ChooseProducerPage">Choose Producer</Link> <br/>*/}
        {/*<Link to="/ChooseProductPage">Choose Product</Link> <br/>*/}

        <Routes>
          <Route path="/" element={<ChooseEventPage />} />
          <Route path="/ChooseEventPage" element={<ChooseEventPage />} />
          <Route path="/ProducerStartPage" element={<ProducerStartPage />} />
          <Route path="/ChooseProducerPage/Event/:eventID" element={<ChooseProducerPage />} />
          <Route path="/ChooseProductPage/Event/:eventID/Producer/:producerID" element={<ChooseProductPage />} />
          <Route path="/SuperAdminStart" element={<SuperAdminStart />} />
          {/*<Route path="/api/Events/:eventID" element={<EventCard/>}/> */}
        </Routes>

      </div>


    </div>
  );
}

export default App;

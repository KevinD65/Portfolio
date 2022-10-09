import '../App.css';

import React, {useState, useEffect} from 'react';
import profilePicture from '../assets/profilePicture.JPG';

import TopBanner from './topbanner';
import TopNavbar from './topnavbar';
import Introduction from './introduction';
import Projects from './projects';
import ContactMe from './contact';

import { Routes, Route, useNavigate } from "react-router-dom";

/**
 * Routing to all pages throughout the application
 */
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "landing/",
        element: <DataDisplay />,
        children: [
          {
            path: "introduction/",
            element: <Introduction />,
          },
        ],
      },
    ],
  }
]);*/

function Landing() {
  const[currentDataDisplayed, changeDataDisplay] = useState("landing"); //landing, introduction, projects, contact me

  /**
   * Changes the data display state so respective data can be displayed to the screen
   */
  const changeDataDisplayState = (newState) => {
    switch(newState){
      case "landing":
        changeDataDisplay("landing");
        break;
      case "intro":
        changeDataDisplay("intro");
        break;
      case "projects":
        changeDataDisplay("projects");
        break;
      case "contact":
        changeDataDisplay("contact");
        break;
      default:
    }
  };

  //DETERMINES THE URL PATH BASED ON WHAT DATA IS BEING DISPLAYED ON THE SCREEN
  let path;
  if(currentDataDisplayed !== undefined && currentDataDisplayed !== "landing"){
    path = String(currentDataDisplayed) + "/";
  }
  else{
    path = "/";
  }  

  //NAVIGATE TO THE PATH ROUTE AND RENDER CORRESPONDING COMPONENTS WHEN currentDataDisplayed IS UPDATED
  const navigate = useNavigate();
  useEffect(() => {
    navigate(path); //navigate to the path route
  }, [currentDataDisplayed]); //dependency set to currentDataDisplayed so rerender only occurs when currentDataDisplayed is updated

  return (
    <div>
      <TopBanner/>
      <TopNavbar changeDataDisplay = {changeDataDisplayState}/>
      <Routes>
        <Route path="/" element={<img src={profilePicture} alt="Oops! Couldn't Load Content." id="profilePicture"/>}/>
        <Route path="intro/" element={<Introduction />}/>
        <Route path="projects/" element={<Projects />}/>
        <Route path="contact/" element={<ContactMe />}/>
      </Routes>
    </div>
  );
}
  
export default Landing;
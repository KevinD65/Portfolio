import './App.css';
import React, {useState} from 'react';
import TopBanner from './components/topbanner';
import TopNavbar from './components/topnavbar';
import DataDisplay from './components/datadisplay';

function App() {
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
      case "project":
        changeDataDisplay("project");
        break;
      case "contact":
        changeDataDisplay("contact");
        break;
    }
  }

  return (
    <div className="App">
      <TopBanner/>
      <TopNavbar changeDataDisplay = {changeDataDisplayState}/>
      <DataDisplay currentDataDisplay ={currentDataDisplayed} changeDataDisplay = {changeDataDisplay}/>
    </div>
  );
}

export default App;

import './App.css';
import React, {useState} from 'react';
import TopBanner from './components/topbanner';
import TopNavbar from './components/topnavbar';
import DataDisplay from './components/datadisplay';

function App() {
  const[currentDataDisplayed, changeDataDisplay] = useState("landing"); //landing, introduction, projects, contact me

  return (
    <div className="App">
      <TopBanner/>
      <TopNavbar changeDataDisplay = {changeDataDisplayState}/>
      <DataDisplay currentDataDisplay ={currentDataDisplayed} changeDataDisplay = {changeDataDisplay}/>
    </div>
  );
}

export default App;

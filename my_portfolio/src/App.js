import './App.css';
import React from 'react'; //import without brackets since React is the default export in the react module
import { Routes, Route } from 'react-router-dom';
import Landing from './components/landing';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;

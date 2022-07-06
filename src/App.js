import React from 'react'
import {SignIn,FlyControl,AddFlight,SortFlights,DeleteFlight} from './components'
import Parent from './context/FlyContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Parent>
    <div className="Fly Project">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/control-panel" element={<FlyControl/>}/>
          <Route path="/control-panel/add" element={<AddFlight/>}/>
          <Route path="/control-panel/sort" element={<SortFlights/>}/>
          <Route path="/control-panel/delete" element={<DeleteFlight/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </Parent>
  );
}

export default App;

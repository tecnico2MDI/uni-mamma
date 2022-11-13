import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./componets/Main";

export const PATHS = {
  MAIN: "/",
};

function App() {
  return (
    <div className="App">
        This is APP
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.MAIN} element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

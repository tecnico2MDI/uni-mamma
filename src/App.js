import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import Main from "./componets/Main";

export const PATHS = {
  MAIN: "/",
};

function App() {
  return (
    <div className="App">
        This is APP
      <HashRouter>
        <Routes>
          <Route path={PATHS.MAIN} element={<Main />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

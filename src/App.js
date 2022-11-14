import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import Main from "./componets/Main";

import s from  './App.module.scss';


export const PATHS = {
  MAIN: "/",
};

function App() {
  return (
    <div className={s.App}>
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

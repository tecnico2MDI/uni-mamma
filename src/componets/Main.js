import React from "react";
import { isIOS, isAndroid, isBrowser } from "react-device-detect";
import { Route, Routes } from "react-router-dom";
import Android from "./Android";
import Browser from "./Browser";
import Ios from "./Modals/Ios";
import ChronologyPage from "./Pages/ChronologyPage/ChronologyPage";
import ChildPage from "./Pages/ChildPage/ChildPage";
import MainContent from "./Pages/MainPage/MainContent";
import WeekInfo from "./Pages/ChildPage/Cards/WeekInfo";
import ChildMeasures from "./Pages/ChildPage/Cards/ChildMeasures";

const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/info" element={<WeekInfo />} />
                <Route path="/baby-measures" element={<ChildMeasures />} />
                <Route path="/" element={<MainContent />} />
                <Route path="/baby" element={<ChildPage />} />
                <Route path="/guide" element={<ChronologyPage />} />
            </Routes>
            {isBrowser && <Browser />}
            {isAndroid && <Android />}
            {isIOS && <Ios />}
        </>
    );
};

export default Main;

import React from "react";
import { isIOS, isAndroid, isBrowser } from "react-device-detect";
import { Route, Routes } from "react-router-dom";
import Android from "./Android";
import Browser from "./Browser";
import Ios from "./Modals/Ios";
import GuidePage from "./Pages/GuidePage/GuidePage";
import ChildPage from "./Pages/ChildPage/ChildPage";
import MainContent from "./Pages/MainPage/MainContent";
import WeekInfo from "./Pages/ChildPage/Cards/WeekInfo";
import ChildMeasures from "./Pages/ChildPage/Cards/ChildMeasures";
import MyWeight from "./Pages/ChildPage/Cards/MyWeight";
import TimeLine from "./Pages/ChildPage/Cards/TimeLine";

const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/info" element={<WeekInfo />} />
                <Route path="/baby-measures" element={<ChildMeasures />} />
                <Route path="/my-weight" element={<MyWeight />} />
                <Route path="/timeline" element={<TimeLine />} />
                <Route path="/" element={<MainContent />} />
                <Route path="/baby" element={<ChildPage />} />
                <Route path="/guide" element={<GuidePage />} />
            </Routes>
            {isBrowser && <Browser />}
            {isAndroid && <Android />}
            {isIOS && <Ios />}
        </>
    );
};

export default Main;

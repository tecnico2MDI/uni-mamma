import React from 'react';
import { isIOS, isAndroid, isBrowser } from "react-device-detect";
import Android from "./Android";
import Browser from "./Browser";
import Ios from "./Modals/Ios";
import ChildPage from "./Pages/ChildPage/ChildPage";
import MainContent from "./Pages/MainPage/MainContent";


const Main = () => {
    return (
        <>
            {/*<ChildPage/>*/}
            <MainContent/>
            {isBrowser &&  <Browser/>}
            {isAndroid && <Android />}
            {isIOS && <Ios/>}
        </>
    );
};

export default Main;

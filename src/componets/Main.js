import React from 'react';
import { isIOS, isAndroid } from "react-device-detect";
import Android from "./Android";
import Ios from "./Ios";

const Main = () => {
    return (
        <div>
            {isIOS && <Ios/>}
            {isAndroid && <Android />}
        </div>
    );
};

export default Main;

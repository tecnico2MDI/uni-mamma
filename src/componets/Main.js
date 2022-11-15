import React from 'react';
import { isIOS, isAndroid, isBrowser } from "react-device-detect";
import Android from "./Android";
import Ios from "./Ios";
import Browser from "./Browser";

import s from "../App.module.scss";


const Main = () => {
    return (
        <div>
            {isBrowser &&  <Browser/>}
            <div className={s.navBar}>
                {isAndroid && <Android />}
                {isIOS && <Ios/>}
            </div>
        </div>
    );
};

export default Main;

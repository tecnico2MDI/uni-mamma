import React from 'react';
import { isIOS, isAndroid } from "react-device-detect";
import IOSModal from "./Modals/IOSModal";
import AndroidModal from "./Modals/AndroidModal";

const Main = () => {
    return (
        <div>
            {isIOS && <IOSModal/>}
            {isAndroid && <AndroidModal />}
        </div>
    );
};

export default Main;

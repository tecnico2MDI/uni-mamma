import React, {useEffect} from 'react';
import { isIOS, isAndroid } from "react-device-detect";
import IOSModal from "./Drawers/IOSModal";
import AndroidModal from "./Drawers/AndroidModal";
const Main = () => {



    return (
        <div>
            {isIOS && <IOSModal/>}
            {isAndroid && <AndroidModal />}
        </div>


    );
};

export default Main;

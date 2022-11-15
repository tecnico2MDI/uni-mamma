import React, {useEffect, useState} from 'react';
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import Face4Icon from "@mui/icons-material/Face4";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import DownloadingIcon from "@mui/icons-material/Downloading";


let deferredPrompt;

const Android = () => {
     const handleInstallPwa = async () => {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        deferredPrompt = null;
    };

    useEffect(() => {

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;

        });
    }, [])

    const [selected, setSelected] = useState(0);

    return (
        <div>
            <BottomNavigation
                value={selected}
                onChange={(value, newValue) => {
                    setSelected(newValue);
                }}
            >
                <BottomNavigationAction  label="Mamma" icon={<Face4Icon/>} />
                <BottomNavigationAction
                    label="Bebe"
                    icon={<ChildFriendlyIcon  />}
                />
                <BottomNavigationAction  label="Guida" icon={<ReceiptLongIcon />} />
                <BottomNavigationAction onClick={handleInstallPwa} label="Aggiungi" icon={<DownloadingIcon  />} />
            </BottomNavigation>
        </div>
    );
};

export default Android;
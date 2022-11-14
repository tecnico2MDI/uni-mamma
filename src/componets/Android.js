import React, {useEffect} from 'react';
import Button from '@mui/material/Button';


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

    return (
        <div>
            <Button variant="contained" onClick={handleInstallPwa}>Install App</Button>
        </div>
    );
};

export default Android;

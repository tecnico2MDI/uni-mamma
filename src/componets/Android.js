import React, { useEffect, useState } from "react";
import BottomNav from "./BottomNav";

let deferredPrompt;

const Android = () => {
    const [selected, setSelected] = useState("mother");

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (e) => {
            e.preventDefault();
            deferredPrompt = e;
        });
    }, []);

    const handleInstallPwa = async () => {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        deferredPrompt = null;
    };

    const handleChangeNav = (nav) => {
        setSelected(nav);
        if (nav === "download") {
            handleInstallPwa().then(() => {});
        }
    };

    return (
        <div style={{ width: "100%", position: "fixed", bottom: 0 }}>
            <BottomNav current={selected} onChange={handleChangeNav} />
        </div>
    );
};

export default Android;

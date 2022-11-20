import React from "react";
import { Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Face4Icon from "@mui/icons-material/Face4";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import DownloadingIcon from "@mui/icons-material/Downloading";

const BottomNav = ({ current, onChange }) => {
    return (
        <div style={{ width: "100%", position: "fixed", bottom: 0 }}>
            <BottomNavigation
                value={current}
                onChange={(value, newValue) => {
                    onChange(newValue);
                }}
            >
                <BottomNavigationAction
                    component={Link}
                    to="/"
                    value="mother"
                    style={{ color: "#26BEB9" }}
                    label="Mamma"
                    icon={<Face4Icon />}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/baby"
                    value="baby"
                    style={{ color: "#26BEB9" }}
                    label="Bebe"
                    icon={<ChildFriendlyIcon />}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/guide"
                    value="guide"
                    style={{ color: "#26BEB9" }}
                    label="Guida"
                    icon={<ReceiptLongIcon />}
                />
                <BottomNavigationAction
                    value="download"
                    style={{ color: "#26BEB9" }}
                    label="Aggiungi"
                    icon={<DownloadingIcon />}
                />
            </BottomNavigation>
        </div>
    );
};

export default BottomNav;

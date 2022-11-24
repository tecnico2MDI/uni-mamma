import React from "react";
import { Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Face4Icon from "@mui/icons-material/Face4";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import DownloadingIcon from "@mui/icons-material/Downloading";
import { makeStyles } from "@material-ui/core/styles";
import s from "./BottomNav.module.scss";
import { StyledBoxNav } from "../Styles/theme";

const useStyles = makeStyles({
    root: {
        height: 80
    }
});

const BottomNav = ({ current, onChange }) => {
    const classes = useStyles();

    return (
        <StyledBoxNav>
            <BottomNavigation
                value={current}
                className={classes.root}
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
                    className={s.standalone}
                    value="download"
                    style={{ color: "#26BEB9" }}
                    label="Aggiungi"
                    icon={<DownloadingIcon />}
                />
            </BottomNavigation>
        </StyledBoxNav>
    );
};

export default BottomNav;

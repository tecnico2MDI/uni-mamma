import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DownloadingIcon from '@mui/icons-material/Downloading';
import Face4Icon from '@mui/icons-material/Face4';


import { useState } from "react";

function NavBar() {
    const [selected, setSelected] = useState(0);
    return (
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
            <BottomNavigationAction  label="Aggiungi" icon={<DownloadingIcon  />} />
        </BottomNavigation>
    );
}

export default NavBar;

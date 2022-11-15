import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import img from '../../img/logoTrasparente.png'
import IosShareIcon from '@mui/icons-material/IosShare';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import { Grid, IconButton} from "@mui/material";
import Tada from 'react-reveal/Tada';
import {
    StyledBox,
    StyledTimeline,
    StyledTimelineContent,
    StyledTTimelineDot,
} from "../Styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import Face4Icon from "@mui/icons-material/Face4";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import DownloadingIcon from "@mui/icons-material/Downloading";

import s from './Styles/Modal.module.scss'


const IOSModal = () => {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selected, setSelected] = useState(0);
    useEffect(() => {
        window.matchMedia('(display-mode: standalone)').addEventListener('change', (evt) => {
            let displayMode = 'browser';
            if (evt.matches) {
                displayMode = 'standalone';
            }
            // Log display mode change to analytics
            console.log('DISPLAY_MODE_CHANGED', displayMode);
        });
    }, [])

    return (
        <div style={{marginBottom: "20px"}} >
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
                <div className={s.standalone}>
                    <BottomNavigationAction onClick={handleOpen}  label="Aggiungi" icon={<DownloadingIcon  />} />
                </div>
            </BottomNavigation>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <StyledBox className={s.standalone}>
                    <Box className={s.mainTitle}>
                        Installare la App sul tuo Iphone
                    </Box>

                    <Grid container>
                        <Grid item xs={8}>
                           <div>
                               <IconButton
                                   style={{ position: "absolute", top: "0", right: "0" }}
                                   onClick={() => setOpen(false)}
                               >
                                   <CloseIcon />
                               </IconButton>
                           </div>
                            <StyledTimeline position="left">
                                <TimelineItem position="left">
                                    <TimelineSeparator>
                                        <StyledTTimelineDot sx={{background: '#ED1163'}}>
                                            <IosShareIcon className={s.icon}/>
                                        </StyledTTimelineDot>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <StyledTimelineContent>Tocca</StyledTimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <StyledTTimelineDot>
                                            <AddBoxOutlinedIcon className={s.icon}/>
                                        </StyledTTimelineDot>
                                    </TimelineSeparator>
                                    <StyledTimelineContent>Aggiungi a Home</StyledTimelineContent>
                                </TimelineItem>
                            </StyledTimeline>
                        </Grid>
                        <Grid item xs={4}>
                            <Tada>
                                <div className={s.imagineDrawer}>
                                    <img src={img} alt=""/>
                                    <div className={s.title}>Uni mamma</div>
                                </div>
                            </Tada>
                        </Grid>
                    </Grid>
                </StyledBox>
            </Modal>
        </div>
    );
};

export default IOSModal;

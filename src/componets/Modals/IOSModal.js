import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import img from '../../img/logoTrasparente.png'
import IosShareIcon from '@mui/icons-material/IosShare';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import {Grid} from "@mui/material";
import Tada from 'react-reveal/Tada';
import {StyledBox, StyledTimeline, StyledTimelineContent, StyledTTimelineDot} from "../Styles/theme";

import s from './Styles/Modal.module.scss'


const IOSModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className={s.IosModalMain}>
            <Button onClick={handleOpen}>Install APP</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <StyledBox>
                    <Box className={s.mainTitle}>
                        Installare la App sul tuo Iphone
                    </Box>

                    <Grid container>
                        <Grid xs={8}>
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
                        <Grid xs={4}>
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

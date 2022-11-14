import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import img from '../../img/logoTrasparente.png'
import IosShareIcon from '@mui/icons-material/IosShare';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import {Grid} from "@mui/material";
import {timelineContentClasses} from "@mui/lab";
import Tada from 'react-reveal/Tada';


import s from './Styles/Modal.module.scss'
import {StyledTimelineContent, StyledTTimelineDot} from "../Styles/theme";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: 170,
    bgcolor: 'white',
    boxShadow: 50,
    p: 4,
    borderRadius: "10px"
};

const IOSModal = () => {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className={s.IosModalMain}>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Box className={s.mainTitle}>
                        Installare la App sul tuo Iphone
                    </Box>

                    <Grid container>
                        <Grid xs={8}>
                            <Timeline position="left" sx={{
                                [`& .${timelineContentClasses.root}`]: {
                                    flex: 1,
                                },
                            }}>
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
                            </Timeline>
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
                </Box>
            </Modal>
        </div>
    );
};

export default IOSModal;

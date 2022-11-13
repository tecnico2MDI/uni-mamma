import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './Styles/drawer.css'
import img from '../../img/logoTrasparente.png'
import IosShareIcon from '@mui/icons-material/IosShare';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {Grid} from "@mui/material";
import { timelineContentClasses } from "@mui/lab";
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';

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
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{color: '#ED1163', fontWeight: 'bold'}}>
                        Installare la App sul tuo Iphone
                    </Box>

                    <Grid container>
                        <Grid xs={8} >
                            <Timeline position="left" sx={{
                                [`& .${timelineContentClasses.root}`]: {
                                    flex: 1,
                                },
                            }}>
                                <TimelineItem position="left">
                                    <TimelineSeparator>
                                        <TimelineDot  sx={{background: '#ED1163'}}>
                                            <Fade>
                                                <IosShareIcon/>
                                            </Fade>
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>Tocca</TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot sx={{background: '#26BEB9'}}>
                                            <Fade>
                                                <AddBoxOutlinedIcon/>
                                            </Fade>
                                        </TimelineDot>
                                    </TimelineSeparator>
                                    <TimelineContent>Aggiungi a Home</TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </Grid>
                        <Grid xs={4}>
                            <Tada>
                            <div className="imagineDrawer">

                                    <img src={img} alt=""/>
                                    <div className="title">Uni mamma</div>

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

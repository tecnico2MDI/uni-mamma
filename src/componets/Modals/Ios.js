import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import img from "../../img/logoTrasparente.png";
import IosShareIcon from "@mui/icons-material/IosShare";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import { Grid, IconButton } from "@mui/material";
import Tada from "react-reveal/Tada";
import {
    StyledBox,
    StyledTimeline,
    StyledTimelineContent,
    StyledTTimelineDot
} from "../Styles/theme";
import CloseIcon from "@mui/icons-material/Close";

import s from "./Styles/Modal.module.scss";
import BottomNav from "../BottomNav";

const Ios = () => {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = useState("mother");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChangeNav = (nav) => {
        setSelected(nav);
        if (nav === "download") {
            handleOpen(true);
        }
    };

    return (
        <div className={s.navBar}>
            <BottomNav current={selected} onChange={handleChangeNav} />

            <div className={s.standalone}>
                <Modal open={open} onClose={handleClose} className={s.standalone}>
                    <StyledBox className={s.standalone}>
                        <Box className={s.mainTitle}>Installare la App sul tuo Iphone</Box>

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
                                            <StyledTTimelineDot sx={{ background: "#ED1163" }}>
                                                <IosShareIcon className={s.icon} />
                                            </StyledTTimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <StyledTimelineContent>Tocca</StyledTimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <StyledTTimelineDot>
                                                <AddBoxOutlinedIcon className={s.icon} />
                                            </StyledTTimelineDot>
                                        </TimelineSeparator>
                                        <StyledTimelineContent>
                                            Aggiungi a Home
                                        </StyledTimelineContent>
                                    </TimelineItem>
                                </StyledTimeline>
                            </Grid>
                            <Grid item xs={4}>
                                <Tada>
                                    <div className={s.imagineDrawer}>
                                        <img src={img} alt="" />
                                        <div className={s.title}>Uni mamma</div>
                                    </div>
                                </Tada>
                            </Grid>
                        </Grid>
                    </StyledBox>
                </Modal>
            </div>
        </div>
    );
};

export default Ios;

import React from "react";
import { Grid, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

import s from "./WeekInfo.module.scss";

const WeekInfo = () => {
    const navigate = useNavigate();
    return (
        <div className={s.weekInfoBlock}>
            <Grid container>
                <Grid item xs={12}>
                    <div className={s.goBackButton}>
                        <IconButton onClick={() => navigate(-1)}>
                            <ArrowBackIcon />
                        </IconButton>
                    </div>
                    <div className={s.title}>Settimana 14</div>
                </Grid>
                <Grid item xs={6}>
                    d
                </Grid>
                <Grid item xs={6}>
                    d
                </Grid>
            </Grid>
        </div>
    );
};

export default WeekInfo;

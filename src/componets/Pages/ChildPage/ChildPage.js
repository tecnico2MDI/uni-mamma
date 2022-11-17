import React from 'react';
import {Grid} from "@mui/material";
import s from '../styles/ChildPage.module.scss'
import InfoCards from "./InfoCards";

const ChildPage = () => {
    return (
        <div className={s.childPageBlock}>
            <Grid container>
                <Grid item xs={6}>
                    <InfoCards/>
                </Grid>
                <Grid item xs={6}>
                    <InfoCards/>
                </Grid>
                <Grid item xs={6}>
                    <InfoCards/>
                </Grid>
                <Grid item xs={6}>
                    <InfoCards/>
                </Grid>
            </Grid>
        </div>
    );
};

export default ChildPage;

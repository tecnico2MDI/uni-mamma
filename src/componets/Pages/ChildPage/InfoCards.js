import React from 'react';
import s from '../styles/InfoCards.module.scss'
import {Grid} from "@mui/material";

const InfoCards = ({data}) => {
    return (
        <>
            <Grid container>
                {data.map(({title, Icon}) => (
                    <Grid item xs={6}>
                        <div className={s.infoCardsBlock}>
                            <div className={s.title}>
                                {title}
                            </div>
                            <div className={s.iconPosition}>
                                <div className={s.iconBlock}>
                                    <div className={s.icon}>
                                        <Icon/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>

        </>


    );
};

export default InfoCards;

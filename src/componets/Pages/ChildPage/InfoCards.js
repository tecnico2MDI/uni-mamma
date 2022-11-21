import React from "react";
import s from "../styles/InfoCards.module.scss";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const InfoCards = ({ data }) => {
    return (
        <>
            <Grid container>
                {data.map(({ title, Icon, link }) => (
                    <Grid item xs={6}>
                        <Link to={link}>
                            <div className={s.infoCardsBlock}>
                                <div className={s.title}>{title}</div>
                                <div className={s.iconPosition}>
                                    <div className={s.iconBlock}>
                                        <div className={s.icon}>
                                            <Icon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default InfoCards;

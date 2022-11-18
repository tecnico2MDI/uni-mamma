import React from 'react';
import {Grid} from "@mui/material";
import s from '../styles/ChildPage.module.scss'
import InfoCards from "./InfoCards";
import DateRangeIcon from "@mui/icons-material/DateRange";
import StraightenIcon from "@mui/icons-material/Straighten";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";

const data = [
    {title: "Info settiminale", Icon: DateRangeIcon},
    {title: "Dimensioni", Icon: StraightenIcon},
    {title: "Linea del tempo", Icon: EventRepeatIcon},
    {title: "Il mio peso", Icon: MonitorWeightIcon},
]


const ChildPage = () => {
    return (
        <div className={s.childPageBlock}>
            <InfoCards data={data}/>
        </div>
    );
};

export default ChildPage;

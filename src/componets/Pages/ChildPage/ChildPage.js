import React from "react";
import InfoCards from "./InfoCards";
import DateRangeIcon from "@mui/icons-material/DateRange";
import StraightenIcon from "@mui/icons-material/Straighten";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import { Link } from "react-router-dom";

import s from "../styles/ChildPage.module.scss";

const data = [
    { title: "Info settiminale", Icon: DateRangeIcon },
    { title: "Dimensioni", Icon: StraightenIcon },
    { title: "Linea del tempo", Icon: EventRepeatIcon },
    { title: "Il mio peso", Icon: MonitorWeightIcon }
];

const ChildPage = () => {
    return (
        <div className={s.childPageBlock}>
            <Link to="/info">
                <InfoCards data={data} />
            </Link>
        </div>
    );
};

export default ChildPage;

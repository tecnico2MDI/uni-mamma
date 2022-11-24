import React from "react";
import InfoCards from "./InfoCards";
import DateRangeIcon from "@mui/icons-material/DateRange";
import StraightenIcon from "@mui/icons-material/Straighten";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import Fade from "react-reveal/Fade";

import s from "../styles/ChildPage.module.scss";

const data = [
    { title: "Info settiminale", Icon: DateRangeIcon, link: "/info" },
    { title: "Dimensioni", Icon: StraightenIcon, link: "/baby-measures" },
    { title: "Linea del tempo", Icon: EventRepeatIcon, link: "/timeline" },
    { title: "Il mio peso", Icon: MonitorWeightIcon, link: "/my-weight" }
];

const ChildPage = () => {
    return (
        <div className={s.childPageBlock}>
            <Fade>
                <InfoCards data={data} />
            </Fade>
        </div>
    );
};

export default ChildPage;

import React from "react";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import s from "./WeekInfo.module.scss";
import WeekSlider from "../../../Common/Slider/WeekSlider";

const WeekInfo = () => {
    const navigate = useNavigate();
    return (
        <div className={s.weekInfoBlock}>
            <div className={s.goBackButton}>
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </IconButton>
            </div>
            <div>
                <WeekSlider />
            </div>
        </div>
    );
};

export default WeekInfo;

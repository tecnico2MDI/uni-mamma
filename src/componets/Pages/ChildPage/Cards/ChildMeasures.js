import React from "react";
import s from "./WeekInfo.module.scss";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import MeasureSlide from "../../../Common/Slider/MeasureSlide";

const ChildMeasures = () => {
    const navigate = useNavigate();

    return (
        <div className={s.weekInfoBlock}>
            <div className={s.goBackButton}>
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </IconButton>
            </div>
            <div className={s.carausel}>
                <MeasureSlide />
            </div>
        </div>
    );
};

export default ChildMeasures;

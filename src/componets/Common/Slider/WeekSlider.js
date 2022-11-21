import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import s from "../styles/CommonSliderStyles.module.scss";

const data = [
    {
        imgPath:
            "https://www.nostrofiglio.it/images/2021/01/19/quattordicesima-settimana-di-gravidanza_900x760.jpg",
        label: "Qui sara informazione ( setiimana 1) +imagine"
    },
    {
        imgPath:
            "https://www.nostrofiglio.it/images/2021/01/19/quattordicesima-settimana-di-gravidanza_900x760.jpg",
        label: "Qui sara informazione ( setiimana 2)"
    },
    {
        imgPath:
            "https://www.nostrofiglio.it/images/2021/01/19/quattordicesima-settimana-di-gravidanza_900x760.jpg",
        label: "Qui sara informazione ( setiimana 3)"
    },
    {
        imgPath:
            "https://www.nostrofiglio.it/images/2021/01/19/quattordicesima-settimana-di-gravidanza_900x760.jpg",
        label: "Qui sara informazione ( setiimana 4)"
    },
    {
        imgPath:
            "https://www.nostrofiglio.it/images/2021/01/19/quattordicesima-settimana-di-gravidanza_900x760.jpg",
        label: "Qui sara informazione ( setiimana 5)"
    },
    {
        imgPath:
            "https://www.nostrofiglio.it/images/2021/01/19/quattordicesima-settimana-di-gravidanza_900x760.jpg",
        label: "Qui sara informazione ( setiimana 6) + ALTRI "
    }
];

const WeekSlider = () => {
    console.log(data);
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: 500, flexGrow: 1 }}>
            <div className={s.week}>Settimana {activeStep}</div>
            <MobileStepper
                variant="progress"
                steps={6}
                position="static"
                activeStep={activeStep}
                sx={{
                    color: "#49C8C4",
                    ".MuiMobileStepper-progress": { backgroundColor: "rgba(73,200,196,0.38)" },
                    ".MuiLinearProgress-bar": { backgroundColor: "#49C8C4" }
                }}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                        {activeStep + 1}
                        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        {activeStep}
                    </Button>
                }
            />
            <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {data.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 250,
                                    display: "block",
                                    maxWidth: 400,
                                    overflow: "hidden",
                                    width: "100%",
                                    borderRadius: "5px"
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </SwipeableViews>
            <Paper
                square
                elevation={0}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    height: 50,
                    pl: 2
                }}
            >
                <Typography>{data[activeStep].label}</Typography>
            </Paper>
        </Box>
    );
};

export default WeekSlider;

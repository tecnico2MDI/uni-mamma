import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { Grid } from "@mui/material";
import s from "../styles/CommonSliderStyles.module.scss";
import hImg from "../../../img/height.png";
import wImg from "../../../img/weight.png";

const data = [
    {
        imgPath:
            "https://www.cerretobio.com/images/cerreto/prodotti/ita/i-semi-tostati/semi-di-sesamo-tostati/semi-di-sesamo-tostati.png",
        height: ">1 mm",
        weight: "1-2 mg",
        title: "Semi di sesamo"
    },
    {
        imgPath:
            "https://www.cerretobio.com/images/cerreto/prodotti/ita/i-semi/semi-di-lino/semi-di-lino.png",
        height: "2 mm",
        weight: "2-3 g",
        title: "Semi di lino"
    },
    {
        imgPath:
            "https://www.cerretobio.com/images/cerreto/prodotti/ita/i-legumi/lenticchie-verdi/lenticchie-verdi.png",
        height: "3 mm",
        weight: "3-4 g",
        title: "Lenticche"
    },
    {
        imgPath:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/TheStructorr_cherries.svg/1024px-TheStructorr_cherries.svg.png",
        height: "4 mm",
        weight: "4-5 g",
        title: "Cherry"
    },
    {
        imgPath: "https://icons.veryicon.com/png/o/food--drinks/fruit-icon/blackberry-7.png",
        height: "5 mm",
        weight: "5-6 g",
        title: "Blackberry"
    },
    {
        imgPath:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/520-grapes.svg/800px-520-grapes.svg.png",
        height: "6 mm",
        weight: "6-7 g",
        title: "Grape"
    }
];

const WeekSlider = () => {
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
                                alt={step.img}
                            />
                        ) : null}
                    </div>
                ))}
            </SwipeableViews>
            <Paper square elevation={0}>
                <Grid container>
                    <Grid item xs={12}>
                        <div className={s.title}>{data[activeStep].title}</div>
                    </Grid>
                    <Grid item xs={6} p={1}>
                        <div className={s.heightBlock}>
                            Lunghezza: <div className={s.data}>{data[activeStep].height}</div>
                            <img className={s.img} src={hImg} alt="img" />
                        </div>
                    </Grid>
                    <Grid item xs={6} p={1}>
                        <div className={s.heightBlock}>
                            Peso: <div className={s.data}>{data[activeStep].weight}</div>
                            <img
                                className={s.img}
                                style={{ marginBottom: "4px" }}
                                src={wImg}
                                alt="img"
                            />
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default WeekSlider;

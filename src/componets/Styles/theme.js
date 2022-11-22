import { createTheme, styled } from "@mui/material/styles";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";
import { timelineContentClasses } from "@mui/lab";
import Timeline from "@mui/lab/Timeline";
import { Button, Checkbox, LinearProgress, TextField } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: {
                    "& label.Mui-focused": {
                        color: "gray"
                    },
                    "& .MuiInput-underline:after": {
                        borderBottomColor: "#AE99E0"
                    },
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            color: "#AE99E0"
                        },
                        "&:hover fieldset": {
                            borderColor: "var(--mui-selector-on-selected) !important"
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "var(--hover-table-bg-color)"
                        }
                    }
                }
            }
        }
    }
});

export default theme;
//TextField
export const StyledTextField = styled(TextField)({
    background: "transparent !important",
    "& label.Mui-focused": {
        color: "#26BFB9"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#26BFB9"
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#26BFB9"
        },
        "&:hover fieldset": {
            borderColor: "#26BFB9"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#26BFB9"
        }
    }
});
//checkbox
export const StyledCheckbox = styled(Checkbox)({
    color: "#26BFB9",
    "&, &.Mui-checked": {
        color: "#26BFB9"
    }
});
//button
export const StyledButton = styled(Button)({
    minWidth: "90%",
    color: "#26BFB9",
    borderColor: "#26BFB9",
    "&, &.Mui-checked": {
        color: "#26BFB9"
    },
    "&:hover": {
        backgroundColor: "white",
        borderColor: "26BFB9",
        boxShadow: "none"
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "white",
        borderColor: "#26BFB9"
    },
    "&:focus": {
        boxShadow: "none",
        borderColor: "#26BFB9"
    }
});
export const StyledButtonWeight = styled(Button)({
    padding: "20px",
    minWidth: "100%",
    color: "#26BFB9",
    borderColor: "#26BFB9",
    "&, &.Mui-checked": {
        color: "#26BFB9"
    },
    "&:hover": {
        backgroundColor: "white",
        borderColor: "26BFB9",
        boxShadow: "none"
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "white",
        borderColor: "#26BFB9"
    },
    "&:focus": {
        boxShadow: "none",
        borderColor: "#26BFB9"
    }
});

//modals
export const StyledTTimelineDot = styled(TimelineDot)({
    position: "relative",
    background: "#26BEB9",
    height: "20px",
    width: "20px"
});
export const StyledTimelineContent = styled(TimelineContent)({
    fontSize: "14px",
    marginTop: "12px"
});

//linear progress
export const StyledLinearProgress = styled(LinearProgress)({
    backgroundColor: "rgba(73,200,196,0.36)",
    "& .MuiLinearProgress-bar": {
        backgroundColor: "#49C8C4"
    }
});

export const StyledTimeline = styled(Timeline)(() => ({
    [`& .${timelineContentClasses.root}`]: {
        flex: 1
    }
}));

export const StyledBox = styled("div")`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 170px;
    background-color: white;
    padding: 35px;
    border-radius: 10px;
`;

export const StyledBoxDataModal = styled("div")`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 300px;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
`;

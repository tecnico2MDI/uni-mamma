import { createTheme, styled } from "@mui/material/styles";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";
import {timelineContentClasses} from "@mui/lab";
import Timeline from "@mui/lab/Timeline";


const theme = createTheme({
    palette: {
        error: {
            light: "#26BFB9",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000"
        },
        warning: {
            light: "#ffcf33",
            main: "#ffc400",
            dark: "#b28900",
            contrastText: "#000"
        },
        success: {
            light: "#a2cf6e",
            main: "#8bc34a",
            dark: "#618833",
            contrastText: "#000"
        }
    },
    components: {
        MuiButtonBase: {
            defaultProps: {},
            styleOverrides: {
                root: {
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {},
                text: {
                    fontSize: "16px"
                }
            }
        },

        MuiMenuItem: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        background: "var(--hover-table-bg-color)"
                    },
                    "&.Mui-selected:hover": {
                        backgroundColor: "var(--mui-selector-on-selected) !important"
                    },
                    "&.Mui-selected": {
                        background: "var(--mui-selector-on-selected) !important",
                        backgroundColor: "var(--mui-selector-on-selected) !important"
                    },
                    "&.active": {
                        backgroundColor: "var(--mui-selector-on-selected) !important"
                    },
                    "&.focus": {
                        backgroundColor: "var(--mui-selector-on-selected) !important"
                    }
                }
            }
        },
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    minHeight: "300px",
                    maxHeight: "300px"
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {}
            }
        },
        MuiTooltip: {
            styleOverrides: {
                popper: {}
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                listbox: {
                    fontSize: "12px !important",
                    lineHeight: "inherit"
                },
                root: {}
            }
        },

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
        },
        MuiBottomNavigationAction: {
            styleOverrides: {

            }
        }
    }
});

export default theme;

//modals
export const StyledTTimelineDot= styled(TimelineDot)({
    position: 'relative',
    background: '#26BEB9',
    height: '20px',
    width: "20px",

});
export const StyledTimelineContent= styled(TimelineContent)({
    fontSize:"14px",
    marginTop: "12px"

});

export const StyledTimeline = styled(Timeline)(() => ({
    [`& .${timelineContentClasses.root}`]: {
        flex: 1,
    },
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

export const StylesBottomNavigationAction = styled("div")`
  display: block;
  @media (display-mode: standalone) {
    body {
      display: none;
    }
  }
`;

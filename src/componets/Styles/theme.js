import { createTheme, styled } from "@mui/material/styles";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";


const theme = createTheme({
    palette: {
        error: {
            light: "#ff7961",
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
                root: {}
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

        MuiSelect: {
            styleOverrides: {
                select: {
                    outline: "none",
                    border: "none"
                },
                outlined: {
                    outline: "none"
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

// export const StyledBox = styled("div")`
//     font-size: 20px;
//     color: var(--table-title-color);
//     margin-left: 15px;
//     margin-bottom: 10px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     @media (max-width: 480px) {
//         font-size: 18px;
//         margin-bottom: 15px;
//     }
// `;

// export const StyledTableRow = styled(TableRow)(() => ({
//     maxWidth: "125px",
//     minWidth: "125px",
//     overflowX: "auto",
//     whiteSpace: "nowrap",
//     "&:hover": {
//         background: "var(--hover-table-bg-color)"
//     }
// }));

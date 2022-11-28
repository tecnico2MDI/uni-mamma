import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress, Grid } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { StyledButton, StyledTextField } from "../Styles/theme";
import s from "./styles/CoomonFormStyles.module.scss";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../store/slice/user-slice";

const LoginForm = ({ onLogin }) => {
    const loading = useSelector(selectIsLoading);
    const [contactInfo, setContactInfo] = useState({
        email: "",
        password: ""
    });

    const changeHandler = (e) => {
        setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        onLogin();
    };

    return (
        <div className={s.mainForm}>
            <Grid container>
                <Grid item xs={12}>
                    <div className={s.header}>
                        <div className={s.iconBlock}>
                            <PermIdentityIcon className={s.icon} />
                        </div>
                        <div className={s.title}>Hai un account?</div>
                    </div>

                    <StyledTextField
                        sx={{ minWidth: "90%" }}
                        value={contactInfo.email}
                        onChange={changeHandler}
                        id="email"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        required
                        autoFocus
                    />
                    <StyledTextField
                        sx={{ minWidth: "90%" }}
                        value={contactInfo.password}
                        onChange={changeHandler}
                        id="outlined"
                        label="Password"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        required
                    />
                    <div className={s.checkBoxBlock}>
                        <div className={s.saveTitle}>
                            <Link to="/recover-password">Hai dimenticato la tua password?</Link>
                        </div>
                    </div>
                    {loading ? (
                        <CircularProgress style={{ color: "#26BEB9" }} />
                    ) : (
                        <StyledButton variant="outlined" type="submit" onClick={handleSubmit}>
                            <b>Login</b>
                        </StyledButton>
                    )}

                    <div className={s.accountBlock}>
                        <div className={s.title}>Non hai il tuo account?</div>
                        <div className={s.saveTitle}>
                            <Link to="/register">Crea un account</Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default LoginForm;

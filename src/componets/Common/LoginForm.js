import React, {useState} from 'react';
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import { Grid} from "@mui/material";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {StyledButton, StyledTextField} from "../Styles/theme";
import s from './styles/CoomonFormStyles.module.scss'

const LoginForm = ({onLogin}) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [contactInfo, setContactInfo] = useState({
        email: "",
        password: "",
        checked: true
    });

    const changeHandler = e => {
        setContactInfo({...contactInfo,[e.target.name]:e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
            <div className={s.mainForm} >
                <Grid container>
                    <Grid item xs={12}>
                        <div className={s.header}>
                            <div className={s.iconBlock}>
                                <PermIdentityIcon className={s.icon} />
                            </div>
                            <div className={s.title}>Hai un account?</div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <StyledTextField sx={{minWidth: "90%"}}
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
                            <StyledTextField sx={{minWidth: "90%"}}
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
                                    {/*Salva i dati*/}
                                    {/*<StyledCheckbox {...label} onChange={handleClick}*/}
                                    {/*                checked={contactInfo.checked}*/}
                                    {/*                type="checkbox"*/}
                                    {/*                name='checkbox'*/}
                                    {/*/>*/}
                                </div>
                                <div className={s.saveTitle}>
                                    <Link to="/recover-password">Hai dimenticato la tua password?</Link>
                                </div>
                            </div>
                            <StyledButton
                                variant="outlined"
                                type="submit"
                                onClick={() => {
                                    onLogin();
                                    navigate(searchParams.get("redirectTo"));
                                }}
                            >
                                <b>Login</b>
                            </StyledButton>
                            <div className={s.accountBlock}>
                                <div className={s.title}>
                                    Non hai il tuo account?
                                </div>
                                <div className={s.saveTitle}>
                                    <Link to ="/register">Crea un account</Link>
                                </div>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </div>
    );
};

export default LoginForm;

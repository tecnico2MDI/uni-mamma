import React, {useState} from 'react';
import {Grid} from "@mui/material";

import s from './styles/CoomonFormStyles.module.scss'
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import {StyledButton, StyledTextField} from "../Styles/theme";
import {Link} from "react-router-dom";

const RegisterForm = () => {

    const [contactInfo, setContactInfo] = useState({
        email: "",
        password: "",
        repeatPassword: "",
    });

    const { email, password, repeatPassword } = contactInfo;

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== repeatPassword) {
            console.log("Passwords do not match");
        } else {
            console.log("Passwords are matched");
            const newUser = {
                email,
                password,
                repeatPassword
            };
            try {
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                };
                const body = JSON.stringify(newUser);
                // const res = await axios.post("/api/users", body, config);
                // console.log(res.data);
            } catch (err) {
                console.error(err.response.data);
            }
        }
    };


    const changeHandler = e => {
        setContactInfo({...contactInfo,[e.target.name]:e.target.value});
    }
    return (
        <div className={s.mainForm}>
            <Grid container>
                <Grid item xs={12}>
                    <div className={s.header}>
                        <div className={s.iconBlock}>
                            <PermIdentityIcon className={s.icon} />
                        </div>
                        <div className={s.title}>Registati ora</div>
                    </div>
                    <form onSubmit={onSubmit}>
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
                        <StyledTextField sx={{minWidth: "90%"}}
                                         value={contactInfo.repeatPassword}
                                         onChange={changeHandler}
                                         id="outlined"
                                         label="Repeat Password"
                                         type="password"
                                         name="repeatPassword"
                                         autoComplete="current-password"
                                         margin="normal"
                                         variant="outlined"
                                         required
                        />


                        <StyledButton sx={{marginTop: '20px'}}
                            variant="outlined"
                            type="submit"
                        >
                            <b>Registrati</b>
                        </StyledButton>

                        <div className={s.accountBlock}>
                            <div className={s.title}>
                                Hai gia il account?
                            </div>
                            <div className={s.saveTitle}>
                                <Link to ="/login">LogIn</Link>
                            </div>
                        </div>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default RegisterForm;

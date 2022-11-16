import React from 'react';
import {StyledButton, StyledTextField} from "../Styles/theme";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate} from 'react-router-dom';

import s from './styles/CoomonFormStyles.module.scss'

const RecoverPass = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={s.goBackButton}>
                <IconButton  onClick={() => navigate(-1)}><ArrowBackIcon/></IconButton>
            </div>
            <div className={s.mainForm}>
                <div className={s.header}>
                    <div className={s.iconBlock}>
                        <PermIdentityIcon className={s.icon} />
                    </div>
                    <div className={s.title}>Problemi di accesso?</div>
                    <div>
                        Inserisci e-mail e ti invieremo un link per accedere di nuovo al tuo account.
                    </div>
                </div>
                <StyledTextField sx={{minWidth: "90%"}}
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
                <StyledButton sx={{marginTop: "20px"}}
                              variant="outlined"
                              type="submit"
                >
                    <b>Avanti</b>
                </StyledButton>
            </div>
        </div>
    );
};

export default RecoverPass;

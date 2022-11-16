import React from 'react';
import s from './styles/CoomonFormStyles.module.scss'
import {StyledButton, StyledTextField} from "../Styles/theme";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const RecoverPass = () => {
    return (
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
            <StyledButton
                variant="outlined"
                type="submit"
            >
                <b>Avanti</b>
            </StyledButton>
        </div>
    );
};

export default RecoverPass;

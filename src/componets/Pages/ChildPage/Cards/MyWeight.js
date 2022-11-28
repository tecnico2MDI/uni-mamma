import React, { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import styles from "./styles/WeekInfo.module.scss";
import s from "./styles/MyWeight.module.scss";
import { StyledButtonWeight, StyledTextField } from "../../../Styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, updateUser } from "../../../../store/slice/user-slice";

const MyWeight = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const [weight, setWeight] = useState({
        firstWeight: user.firstWeight,
        secondWeight: user.secondWeight
    });

    const changeHandler = (e, newValue) => {
        setWeight(newValue);
        dispatch(updateUser({ ...weight, [e.target.name]: e.target.value }));
    };

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <div className={styles.weekInfoBlock}>
                <div className={styles.goBackButton}>
                    <IconButton onClick={() => navigate(-1)}>
                        <ArrowBackIcon />
                    </IconButton>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={s.title}>Inserisci il tuo peso all'ultima mestruazione:</div>
                    <StyledTextField
                        sx={{ minWidth: "100%" }}
                        type="number"
                        label="Peso initiale"
                        name="firstWeight"
                        onChange={changeHandler}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>
                        }}
                    />
                    <div className={s.title}>Inserisci il tuo peso di oggi:</div>
                    <StyledTextField
                        sx={{ minWidth: "100%", paddingBottom: "30px" }}
                        type="number"
                        label="Peso attuale"
                        name="secondWeight"
                        onChange={changeHandler}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>
                        }}
                    />
                    <StyledButtonWeight style={{ padding: "10px" }} type="submit">
                        <span style={{ color: "#49C8C4" }}>Registra il tuo peso</span>
                    </StyledButtonWeight>
                </form>
            </div>
        </div>
    );
};

export default MyWeight;

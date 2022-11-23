import React from "react";
import styles from "./styles/WeekInfo.module.scss";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HearingIcon from "@mui/icons-material/Hearing";
import RedeemIcon from "@mui/icons-material/Redeem";
import img1 from "../../../../img/img1.jpg";
import img2 from "../../../../img/img2.jpg";
import img3 from "../../../../img/img3.jpg";
import img4 from "../../../../img/img4.jpg";
import s from "./styles/TimeLine.module.scss";

const numbers = [];
for (let i = 1; i < 43; i++) {
    numbers.push(i);
}
const TimeLine = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.weekInfoBlock}>
                <div className={styles.goBackButton}>
                    <IconButton onClick={() => navigate(-1)}>
                        <ArrowBackIcon />
                    </IconButton>
                </div>
            </div>

            <div className={s.mainTimeLineBlock}>
                <div className={s.numbers}>
                    {numbers.map((m) => (
                        <div className={s.number} key={m}>
                            {m}
                        </div>
                    ))}
                    <div className={s.line1}>
                        Esami del sangue per animia falciforme e talassemia
                    </div>
                    <div className={s.line2}>Esame per gli anticorpi</div>
                    <div className={s.line3}>Test anamalie cromosomiche</div>
                    <div className={s.line4}>Translucenza nucale</div>
                    <div className={s.line5}>Ecografia per la dotazione</div>
                    <div className={s.line6}>1 ecografia</div>
                    <div className={s.line7}>Test di gravidanza</div>
                    <div className={s.line8}>Integratore di acido folico</div>
                    <div className={s.line9}>Ecografia morfologica</div>
                    <div className={s.line10}>Ecografia per rilevare il sesso</div>
                    <div className={s.line11}>Si prepara la cameretta</div>
                    <div className={s.line12}>Piano del parto</div>
                    <div className={s.line13}>La borsa per ospedale</div>
                    <div className={s.dot1}>
                        <FavoriteIcon className={s.icon} />
                        Il cuore del bambino inizia a battere
                    </div>
                    <div className={s.vl}></div>
                    <div className={s.dot2}>
                        <HearingIcon className={s.icon} />
                        Il bambino recunosce le voci
                    </div>
                    <div className={s.vl2}></div>
                    <div className={s.dot3}>
                        <RedeemIcon className={s.icon} />
                        Termine
                    </div>
                    <div className={s.vl3}></div>
                    <div className={s.image}>
                        <img className={s.img1} src={img1} alt="" />
                    </div>
                    <div className={s.image2}>
                        <img className={s.img2} src={img2} alt="" />
                    </div>
                    <div className={s.image3}>
                        <img className={s.img3} src={img3} alt="" />
                    </div>
                    <div className={s.image4}>
                        <img className={s.img4} src={img4} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimeLine;

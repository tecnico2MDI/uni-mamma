import React, {useState} from 'react';
import {Grid, Box, ImageListItem, ImageListItemBar, IconButton, InputAdornment} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import Modal from "@mui/material/Modal";
import Avatar from 'react-avatar';
import Fade from 'react-reveal/Fade';
import Card from "./Card";
import {StyledBoxDataModal, StyledLinearProgress, StyledTextField} from "../../Styles/theme";
import { FaBaby } from 'react-icons/fa';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from "dayjs";
import 'dayjs/locale/it-ch';
import * as updateLocale from 'dayjs/plugin/updateLocale';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';
import TodayIcon from '@mui/icons-material/Today';

import s from '../styles/MainContent.module.scss'

const data = [
    {id: 1, title: "Conservazione del latte materno", type: "Allatamento", link: "https://unimamma.it/allattamento/conservazione-latte-materno/",img:"https://www.uppa.it/wp-content/uploads/2020/01/guida-allattamento-al-seno.jpg" },
    {id: 2, title: "Il sacco nanna: guida all’uso", type: "Sonno del neonato-bambino", img: "https://www.uppa.it/wp-content/uploads/2020/04/favorire-sviluppo-neonato.jpg", link: "https://unimamma.it/sonno-del-neonato-bambino/il-sacco-nanna-guida-alluso"},
    {id: 3, title: "Sindrome del bambino scosso", type: "Allatamento", img: "https://www.nostrofiglio.it/site_stored/imgs/0003/012/1_comesopravvivereneonato.1500x1000.jpg", link: "https://unimamma.it/cura-e-igiene-del-neonato/sindrome-del-bambino-scosso/"},
    {id: 4, title: "Conservazione del latte materno", type: "Parto", img: "https://www.uppa.it/wp-content/uploads/2020/01/guida-allattamento-al-seno.jpg", link: "https://unimamma.it/parto/posizioni-del-parto-quali-le-migliori/"},
    {id: 5, title: "Cura delle ragadi: premessa", type: "Allatamento", img: "https://www.uppa.it/wp-content/uploads/2020/01/guida-allattamento-al-seno.jpg", link: "https://unimamma.it/allattamento/cura-delle-ragadi/"},
]
// termin settimani


const MainContent = () => {
    dayjs.extend(updateLocale);
    dayjs.extend(localizedFormat);
    dayjs.locale('it-ch');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(dayjs(new Date()));
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const preventDay = dayjs(value).add(9,"month").locale('it-ch').format("LL");
    const term = 14;
    const result = Math.round((term / 40) * 100)

    let trimester;
    if(term <= 12 ) {
        trimester = "Primo trimestre"
    } else if (term <=27) {
        trimester ="Secondo trimestre"
    } else {
        trimester ="Terzo trimestre"
    }
    return (
        <Box className={s.mainContent}>
            <Grid container>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Fade>
                        <div className={s.firstBlock}>
                            <div className={s.title}>Buongiorno Marina</div>
                            <div className={s.avatar}>
                                <Avatar  color="#EE236F" name="Marina Gherman" round={true}  size="60" />
                            </div>
                            <ImageListItem>
                                <img src="https://flomaster.club/uploads/posts/2022-07/1658358616_2-flomaster-club-p-zarodish-risunok-krasivo-2.jpg"
                                     loading="lazy"
                                     alt='img'/>
                                <ImageListItemBar
                                    title={`Sei a settimana: ${term}`}
                                    // subtitle="Settimana: 7"
                                    actionIcon={
                                        <IconButton
                                            aria-label={`info about`}
                                            onClick={handleOpen}
                                        >
                                            <SettingsIcon style={{ color: 'white',marginRight: "10px" }} />
                                        </IconButton>
                                    }
                                />
                                <Modal
                                    open={open}
                                    onClose={handleClose}>
                                    <StyledBoxDataModal>
                                        <div className={s.modalBlock}>
                                            <div className={s.modalIconBlock}>
                                                <FaBaby style={{color: "white", fontSize: "30px", position: "absolute", top: "10%", left: "12%"}}/>
                                            </div>
                                            <div className={s.infoText}>Inserisci il primo giorno del tuo ultimo periodo o la data del concepimento</div>
                                            <div className={s.calendar}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <MobileDatePicker
                                                        label="Inserisci la tua data"
                                                        inputFormat="DD/MM/YYYY"
                                                        value={value}
                                                        onChange={handleChange}
                                                        renderInput={(params) => <StyledTextField {...params} InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <TodayIcon sx={{color: "#EE236F"}} />
                                                                </InputAdornment>
                                                            )
                                                        }} />}
                                                    />
                                                </LocalizationProvider>
                                            </div>
                                            <div className={s.infoText}>Sulla base di questo, la data di nascita preliminare: </div>
                                            <div className={s.preventDay}>{preventDay}</div>
                                        </div>
                                    </StyledBoxDataModal>
                                </Modal>
                            </ImageListItem>
                        </div>
                        <div className={s.progressBarBlock}>
                            <div className={s.title}>{`settimana ${term} di gravidanza`} </div>
                            <div className={s.subTitle}>{trimester}</div>
                            <div className={s.progressBar}>
                                <div className={s.percentResult}>{result}%</div>
                                <StyledLinearProgress variant="determinate" value={result} />
                            </div>
                        </div>
                        <div className={s.secondBlock}>
                            <Card data={data}/>
                        </div>
                    </Fade>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainContent;

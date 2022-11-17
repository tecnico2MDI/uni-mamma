import React from 'react';
import s from '../styles/MainContent.module.scss'
import {Grid, Box, ImageListItem, ImageListItemBar, IconButton} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from 'react-avatar';
import Fade from 'react-reveal/Fade';
import Card from "./Card";
import {StyledLinearProgress} from "../../Styles/theme";

const data = [
    {id: 1, title: "Conservazione del latte materno", type: "Allatamento", link: "https://unimamma.it/allattamento/conservazione-latte-materno/",img:"https://www.uppa.it/wp-content/uploads/2020/01/guida-allattamento-al-seno.jpg" },
    {id: 2, title: "Il sacco nanna: guida all’uso", type: "Sonno del neonato-bambino", img: "https://www.uppa.it/wp-content/uploads/2020/04/favorire-sviluppo-neonato.jpg", link: "https://unimamma.it/sonno-del-neonato-bambino/il-sacco-nanna-guida-alluso"},
    {id: 3, title: "Sindrome del bambino scosso", type: "Allatamento", img: "https://www.nostrofiglio.it/site_stored/imgs/0003/012/1_comesopravvivereneonato.1500x1000.jpg", link: "https://unimamma.it/cura-e-igiene-del-neonato/sindrome-del-bambino-scosso/"},
    {id: 4, title: "Conservazione del latte materno", type: "Parto", img: "https://www.uppa.it/wp-content/uploads/2020/01/guida-allattamento-al-seno.jpg", link: "https://unimamma.it/parto/posizioni-del-parto-quali-le-migliori/"},
    {id: 5, title: "Cura delle ragadi: premessa", type: "Allatamento", img: "https://www.uppa.it/wp-content/uploads/2020/01/guida-allattamento-al-seno.jpg", link: "https://unimamma.it/allattamento/cura-delle-ragadi/"},
]
// termin settimani

const term = 7;
const result = Math.round((term / 40) * 100)

const MainContent = () => {
    return (
        <Box className={s.mainContent}>
            <Grid container>
                <Grid item xs={12}>
                    <Fade>
                        <div className={s.firstBlock}>
                        <div className={s.title}>Buongiorno Marina</div>
                        <div className={s.avatar}>
                            <Avatar  color={"#EE236F"} name="Marina Gherman" round={true}  size="60" />
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
                                    >
                                        <SettingsIcon style={{ color: 'white',marginRight: "10px" }} />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    </div>
                        <div className={s.progressBarBlock}>
                            <div className={s.title}>{`settimana ${term} di gravidanza`} </div>
                            <div className={s.subTitle}>Primo trimestre</div>
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

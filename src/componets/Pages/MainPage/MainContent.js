import React from 'react';
import s from '../styles/MainContent.module.scss'
import {Grid, Box, ImageListItem, ImageListItemBar, IconButton} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from 'react-avatar';
import Fade from 'react-reveal/Fade';
import Card from "./Card";

const data = [
    {id: 1, title: "Conservazione del latte materno", type: "Allatamento", link: "https://unimamma.it/allattamento/conservazione-latte-materno/",img:"https://www.uppa.it/wp-content/uploads/2020/01/guida-allattamento-al-seno.jpg" },
    {id: 2, title: "Il sacco nanna: guida all’uso", type: "Sonno del neonato-bambino", img: "https://www.uppa.it/wp-content/uploads/2020/04/favorire-sviluppo-neonato.jpg", link: "https://unimamma.it/sonno-del-neonato-bambino/il-sacco-nanna-guida-alluso"},
    {id: 3, title: "Sindrome del bambino scosso", type: "Allatamento", img: "https://www.nostrofiglio.it/site_stored/imgs/0003/012/1_comesopravvivereneonato.1500x1000.jpg", link: "https://unimamma.it/cura-e-igiene-del-neonato/sindrome-del-bambino-scosso/"},
    {id: 4, title: "Conservazione del latte materno", type: "Parto", img: "https://www.uppa.it/wp-content/uploads/2020/01/guida-allattamento-al-seno.jpg", link: "https://unimamma.it/parto/posizioni-del-parto-quali-le-migliori/"},
    {id: 5, title: "Cura delle ragadi: premessa", type: "Allatamento", img: "https://www.uppa.it/wp-content/uploads/2020/01/guida-allattamento-al-seno.jpg", link: "https://unimamma.it/allattamento/cura-delle-ragadi/"},
]

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
                            <img src="https://img.freepik.com/free-photo/small-baby-lies-basket-with-plaid_8353-7789.jpg?w=996&t=st=1668611447~exp=1668612047~hmac=eadd8ee7373cf1e6ca3477d66791693382beab67c232f66999cac7c6f33c19a1"
                                loading="lazy"
                                alt='img'/>
                            <ImageListItemBar
                                title="Sei a settimana: 7"
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

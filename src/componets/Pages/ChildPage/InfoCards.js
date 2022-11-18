import React from 'react';
import DateRangeIcon from '@mui/icons-material/DateRange';
import StraightenIcon from '@mui/icons-material/Straighten';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import s from '../styles/InfoCards.module.scss'

const data = [
    {title: "Info settiminale", Icon: DateRangeIcon},
    {title: "Dimensioni", Icon: StraightenIcon},
    {title: "Linea del tempo", Icon: EventRepeatIcon},
    {title: "Il mio peso", Icon: MonitorWeightIcon},
]

const InfoCards = () => {
    return (
        <>
            {data.map(({title, Icon}) => (
                <div className={s.infoCardsBlock}>
                    <div className={s.title}>
                        {title}
                    </div>
                    <div className={s.iconPosition}>
                        <div className={s.iconBlock}>
                            <div className={s.icon}>
                                <Icon/>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>


    );
};

export default InfoCards;

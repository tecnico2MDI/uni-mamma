import React from 'react';
import s from '../styles/InfoCards.module.scss'



const InfoCards = ({data}) => {
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

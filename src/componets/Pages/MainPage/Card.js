import React from 'react';
import s from "../styles/Card.module.scss"


const Card = ({data}) => {
    return (
        <>
            {data.map((m)=> <div className={s.cardBlock} key={m.id}>
                <div className={s.img}>
                    <img src={m.img} alt="img"/>
                    <div className={s.type}>
                        {m.type}
                    </div>
                </div>
                <div className={s.title}>
                    {m.title}
                </div>
                <div className={s.link}>
                    <a href={m.link}>Continua a leggere..</a>
                </div>
            </div>)}
        </>

    );
};

export default Card;

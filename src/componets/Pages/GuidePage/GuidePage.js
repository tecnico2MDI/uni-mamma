import React from "react";
import s from "../styles/GuidePage.module.scss";
import Card from "../MainPage/Card";

const data = [
    {
        id: 1,
        title: "Prepararsi all'allattamento",
        type: "Gratis",
        link: "https://corsi.unimamma.it/courses/prepararsi-all-allattamento-2",
        img: "https://unimamma.it/wp-content/uploads/2022/09/minicorso-gratuito-preparati-ad-allattare-OK.jpg"
    },
    {
        id: 1,
        title: "Check-List. Acquisti Utili in Gravidanza",
        type: "Gratis",
        link: "https://unimamma.it/risorse-gratuite/check-list-acquisti-utili-in-gravidanza/",
        img: "https://unimamma.it/wp-content/uploads/2022/05/Checklist-gravidanza-ok.jpg"
    },
    {
        id: 1,
        title: "Indicazioni per la Nanna. " + "Sicura del Neonato",
        type: "Gratis",
        link: "https://unimamma.it/risorse-gratuite/indicazioni-per-la-nanna-sicura-del-neonato/",
        img: "https://unimamma.it/wp-content/uploads/2022/03/Indicazioni-per-la-nanna-sicura-del-neonato-Corsi-Unimamma-Alessandra-Bellasio-2.jpg"
    },
    {
        id: 1,
        title: "Massaggio del Neonato. (0-18 Mesi)",
        type: "A pagamento",
        link: "https://corsi.unimamma.it/courses/massaggio-del-neonato-0-18-mesi",
        img: "https://unimamma.it/wp-content/uploads/2022/03/Massaggio-del-neonato-Corsi-Unimamma-Alessandra-Bellasio-2.png"
    }
];
const GuidePage = () => {
    return (
        <div className={s.chronologyBlock}>
            <div className={s.title}> Tutti i corsi</div>
            <Card data={data} title={"Clicca Qui"} />
        </div>
    );
};

export default GuidePage;

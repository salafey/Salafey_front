import { useState, useEffect } from 'react';
import { displayContent } from 'next/dist/client/dev/fouc';
import Contact from '../../components/contact';
import { Event } from '../../components/event';
import Titre, { Grand_Titre, SousTitre_1 } from '../../components/titre';
import { Vide } from '../../components/vide';
import Data from './event.json';

import { CountDown } from '../../constantes/countdown';

export default function Evenement() {
  return (
    <div>
      <section class="bannierePage">
        <EventProche
          image={'https://media.graphassets.com/YZnN3sfyTDutBtshvwFP'}
        />
      </section>
      <section>
        <div className="container">
          <SousTitre_1 style={{ marginBottom: 36 }}>
            Évènements passés
          </SousTitre_1>
          {Data.map((el, key) => (
            <Event
              image={el.image}
              titre={el.titre}
              soustitre={el.desc}
              publie={el.date}
              key={key}
            />
          ))}
        </div>
        <Vide />
        <Contact />
      </section>
    </div>
  );
}

export function EventProche({ image }) {
  const [day, setDay] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setDay(CountDown('Dec 16, 2022 12:00:00').day);
      setHours(CountDown('Dec 16, 2022 12:00:00').hours);
      setMinutes(CountDown('Dec 16, 2022 12:00:00').minutes);
      setSeconds(CountDown('Dec 16, 2022 12:00:00').seconds);
    }, 1000);
  }, [day, hours, minutes, seconds]);

  return (
    <div className="eventProche" style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <Titre style={{ color: 'white', marginBottom: 16 }}>Évènement</Titre>
        <div className="eventHaut" style={{ backgroundImage: `url(${image})` }}>
          <div className="content">
            <div>
              <div className="left">
                <div className="logo">
                  <div>
                    <img
                      src="https://media.graphassets.com/7lPj4Z0TsyMsaS7eS8UQ"
                      alt="salafey logo"
                      width="100%"
                    />
                  </div>
                </div>
                <Grand_Titre style={{ color: 'white' }}>
                  <span className="theme">theme</span>
                  MON IDENTITE
                </Grand_Titre>
                <div className="countdown">
                  <h1>
                    {day} Jrs {hours} : {minutes} : {seconds}s
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="eventPartenaire">
          <Partenaire image="https://media.graphassets.com/Uwx83KHzRr2Wyy1lGtHT" />
          <Partenaire image="https://media.graphassets.com/TqlYYmRb7RwhPna3gcbl" />
          <Partenaire image="https://media.graphassets.com/Dk2qBDcaSmmQDZHnvx86" />
          <Partenaire image="https://media.graphassets.com/YHuLDEhFT5KAZE3jd7kV" />
          <Partenaire image="https://media.graphassets.com/BH4FaQanTH2KpcKxkMDo" />
          <Partenaire image="https://media.graphassets.com/gPmTk3TWQuWHRsbPsX7b" />
          <Partenaire image="https://media.graphassets.com/cchvxSOYQ1mKZ4TzL8k2" />
          <Partenaire image="https://media.graphassets.com/hDwngxoATfiI11EBXJsl" />
          <Partenaire image="https://media.graphassets.com/LOjdyDaHQXyUN76bLmkg" />
          <Partenaire image="https://media.graphassets.com/PpFZZ5Z3Sk6E2qN0RRVL" />
          <Partenaire image="https://media.graphassets.com/IKjhcmN8ROCrXsZoGJgV" />
          <Partenaire image="https://media.graphassets.com/IKjhcmN8ROCrXsZoGJgV" />
          <Partenaire image="https://media.graphassets.com/IKjhcmN8ROCrXsZoGJgV" />
          <Partenaire image="https://media.graphassets.com/IKjhcmN8ROCrXsZoGJgV" />
        </div>
      </div>
    </div>
  );
}

function Partenaire({ image }) {
  return (
    <div className="Partenaire_logo">
      <div>
        <img src={image} alt="" height="58px" />
      </div>
    </div>
  );
}

// Uwx83KHzRr2Wyy1lGtHT

import { useState, useEffect } from 'react';
import { Bouton, PrincipalBouton } from './bouton';
import Titre, { SousTitre_1 } from './titre';
import { CountDown } from '../constantes/countdown';
import Link from 'next/link';

export default function EventsComponent({ inverse, image, link, children }) {
  const inverser = inverse ? true : false;
  return (
    <div className="eventComponent">
      <div className="container" data-inverse={inverser}>
        <div
          className="left"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="right">
          {children}
          <div style={{ marginTop: 36 }}>
            <Bouton
              style={{
                backgroundColor: '#4E7001',
                color: 'white',
                borderRadius: '50px',
              }}
              titre={'Lire plus'}
              href={link}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SpecialEvent({ data, href }) {
  const { dateEvent, picture, titre } = data[data.length - 1];

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
    <section
      id="specialEvent"
      style={{ backgroundImage: `url(${picture.url})` }}
    >
      <div className="container">
        <div className="right">
          <Titre style={{ color: 'white', textAlign: 'right' }}>
            Revivez <br />
            le Salon du livre <br />
            Salafey 2022 <br />
            en image
          </Titre>

          <PrincipalBouton href="/evenements/salafey_2022" />
        </div>
      </div>
    </section>
  );
}

export function EvenIntro({ inverse, image, children, color }) {
  const inverser = inverse ? true : false;
  return (
    <section className="eventIntro">
      <div className="eventComponent">
        <div className="container" data-inverse={inverser}>
          <div
            className="left"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="right">{children}</div>
        </div>
      </div>
    </section>
  );
}
export function EventComponent_2({ inverse, image, children }) {
  const inverser = inverse ? true : false;
  return (
    <div className="eventComponent">
      <div className="container" data-inverse={inverser}>
        <div
          className="left"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="right">{children}</div>
      </div>
    </div>
  );
}

export function Event({ image, titre, soustitre, url = '/' }) {
  const shut =
    soustitre.length <= 250 ? soustitre : `${soustitre.slice(0, 256)} ...`;

  return (
    <Link href={url}>
      <div className="eventItems">
        <div
          className="left"
          style={{
            backgroundImage: `url(https://media.graphassets.com/${image})`,
          }}
        ></div>
        <div className="right">
          <SousTitre_1>{titre}</SousTitre_1>
          <p>{shut}</p>
        </div>
      </div>
    </Link>
  );
}

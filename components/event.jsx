import { useState, useEffect } from 'react';
import { Bouton } from './bouton';
import Titre, { SousTitre_1 } from './titre';
import { CountDown } from '../constantes/countdown';

export default function EventsComponent({ inverse, image, link, children }) {
  return (
    <div className="eventComponent">
      <div
        className="container"
        style={{ flexDirection: inverse ? 'row-reverse' : 'row' }}
      >
        <div
          className="left"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="right">
          {children}
          <div style={{ marginTop: 36 }}>
            <Bouton
              style={{ backgroundColor: '#4E7001', color: 'white' }}
              titre={'Lire plus'}
              href={link}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SpecialEvent({ data }) {
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
          <Titre style={{ color: 'white', textAlign: 'right' }}>{titre} </Titre>
          <h1>
            {day} Jrs {hours} : {minutes} : {seconds}s
          </h1>
          <button>
            <svg width="32" height="32" viewBox="0 0 512 512">
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="m268 112l144 144l-144 144m124-144H100"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export function EvenIntro({ inverse, image, children, color }) {
  return (
    <section className="eventIntro">
      <div className="eventComponent">
        <div
          className="container"
          style={{ flexDirection: inverse ? 'row-reverse' : 'row' }}
        >
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
  return (
    <div className="eventComponent">
      <div
        className="container"
        style={{ flexDirection: inverse ? 'row-reverse' : 'row' }}
      >
        <div
          className="left"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="right">{children}</div>
      </div>
    </div>
  );
}

export function Event({ image, titre, soustitre, publie }) {
  return (
    <div className="eventItems" onClick={() => console.log('je fonctionne')}>
      <div
        className="left"
        style={{
          backgroundImage: `url(https://media.graphassets.com/${image})`,
        }}
      ></div>
      <div className="right">
        <SousTitre_1>{titre}</SousTitre_1>
        <p>{soustitre}</p>
        <span>{publie}</span>
      </div>
    </div>
  );
}

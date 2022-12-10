import { useState, useEffect, useRef } from 'react';
import Titre from './titre';
import { SavoirPlus } from './bouton';

export function Banniere({ data }) {
  const { title, paragraph, banniereLink, banniereImage } = data[0];
  const [position, setPosition] = useState(-100);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', (e) => {
        setPosition(Math.round(window.scrollY / 5.54) - 100);
      });
    }
  }, [position]);

  return (
    <section
      className="banniere"
      style={{
        backgroundImage: `url(${banniereImage.url})`,
        // textShadow: '0 0 50px black',
        position: 'relative',
        backgroundPosition: `center ${position}px`,
      }}
    >
      <div className="container">
        <div className="banniereContent">
          <Titre style={{ color: 'white' }}>{title}</Titre>
          <h3>{paragraph}</h3>
          <SavoirPlus href={'/'} />
        </div>
      </div>
    </section>
  );
}

// YZnN3sfyTDutBtshvwFP

export function Banniere_second({ image, children }) {
  return (
    <section
      className="banniere second"
      style={{
        backgroundImage: `url(${image})`,
        position: 'relative',
        backgroundPosition: `center center`,
      }}
    >
      <div className="container">
        <div className="banniereContent">{children}</div>
      </div>
    </section>
  );
}

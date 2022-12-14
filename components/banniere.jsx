import { useState, useEffect, useRef } from 'react';
import Titre from './titre';
import { SavoirPlus } from './bouton';

export function Banniere({ data, children }) {
  const { banniereImage } = data[0];
  const [position, setPosition] = useState(-100);

  const ref = useRef();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', (e) => {
        ref.current.animate(
          {
            backgroundPosition: `center ${
              Math.round(window.scrollY / 5.54) - 100
            }px`,
          },
          {
            duration: 500,
            fill: 'forwards',
          }
        );
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
      }}
      ref={ref}
    >
      <div className="container">
        <div className="banniereContent">{children}</div>
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

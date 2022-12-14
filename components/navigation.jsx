import { useState, useEffect, useRef } from 'react';
import { image, logo } from './image';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (typeof window !== 'undefined ') {
      let LastPosition = window.scrollY;

      window.addEventListener('scroll', () => {
        if (LastPosition > window.scrollY) {
          console.log('je monte', LastPosition, window.scrollY);
        } else {
          console.log('je descent', LastPosition, window.scrollY);
        }

        LastPosition = window.scrollY;
      });
    }
  }, [ref]);

  return (
    <div ref={ref} className="navBar">
      <div className="container">
        <Link href={'/'} className="logo">
          <div>
            <img src={logo} width={'100%'} alt="salafey logo" />
          </div>
        </Link>
        <div className="menu">
          <Link href={'/a_propos'} className="menuElement">
            À Propos de nous
          </Link>
          <Link href={'/evenements'} className="menuElement">
            Évènements
          </Link>
          <Link href={'/actualites'} className="menuElement">
            Actualites
          </Link>
          <Link href={'/partenariats'} className="menuElement">
            Partenairiats
          </Link>
        </div>
        <div onClick={handleClick} className="navbarButton">
          <div>
            <IconMenu statut={isOpen} />
          </div>
        </div>
        <nav data-open={isOpen} className="navbarReduct">
          <div className="navbarVertical">
            <Link href={'/objectif'} className="menuElement">
              Objectif
            </Link>
            <Link href={'/a_propos'} className="menuElement">
              A Propos de nous
            </Link>
            <Link href={'/evenements'} className="menuElement">
              Evenements
            </Link>
            <Link href={'/actualites'} className="menuElement">
              Actualites
            </Link>
            <Link href={'/partenariats'} className="menuElement">
              Partenariat
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

function IconMenu({ statut }) {
  if (statut === false) {
    return (
      <svg className="iconMenu" width="36" height="36" viewBox="0 0 512 512">
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="48"
          d="M88 152h336M88 256h336M88 360h336"
        />
      </svg>
    );
  } else {
    return (
      <svg width="32" height="32" viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"
        />
      </svg>
    );
  }
}

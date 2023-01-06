import Link from 'next/link';

export const SavoirPlus = ({ href }) => {
  return (
    <div className="Bouton_1">
      <Link href={href}>
        <button>
          Savoir plus
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
      </Link>
    </div>
  );
};
export const Bouton = ({ href, titre, style }) => {
  return (
    <div className="Bouton_2">
      <Link href={href}>
        <button style={{ ...style }}>
          {titre}
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
      </Link>
    </div>
  );
};

{
  /* <button >
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
          </button> */
}

export function PrincipalBouton() {
  return (
    <div className={'button'}>
      <span>Voire plus</span>
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
  );
}

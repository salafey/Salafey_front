import { SousTitre_1 } from '../../../components/titre';

export default function Telecharger({ url, href }) {
  return (
    <section
      className="telechargement"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="container">
        <div className="left">
          <SousTitre_1>Découvrez le salafey mag </SousTitre_1>
          <button>
            <a href={href}>Télécharger maintenant</a>
          </button>
        </div>
      </div>
    </section>
  );
}

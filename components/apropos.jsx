import Titre, { SousTitre_1 } from './titre';

export default function Apropos() {
  return (
    <div className="propos">
      <div className="container">
        <div className="left">
          <SousTitre_1>Notre Objectif</SousTitre_1>
          <h3>
            Sensibiliser, impliquer et accompagner les parents, les educateurs
            et les écoles à l'éveil, la promotion de la lecture et l'éducation
            consciente des enfants. Éveiller les enfants à la lecture, à la
            découverte culturelle et la confiance en soi en mettant à leur
            disposition le maximum de livres, jouets, jeux ainsi que tout autre
            contenu éducatif et de divertissement qui participe à construire
            leur identité culturelle positive
          </h3>
        </div>
        <div className="right">
          <div
            className="image_1"
            style={{
              backgroundImage:
                'url(https://media.graphassets.com/eN32C1AfSZWqguVV33V0)',
            }}
          ></div>
          <div
            className="image_2"
            style={{
              backgroundImage:
                'url(https://media.graphassets.com/RttVOunRGWbrMNvWfSJw)',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export function EventPartenaire({ image, children, inverse, alt }) {
  return (
    <section>
      <div className="container">
        <div
          className="eventPartenaire"
          style={{ flexDirection: inverse ? 'row-reverse' : 'row' }}
        >
          <div className="left">
            <div>
              <img src={image} alt={alt} width={'100%'} />
            </div>
          </div>
          <div className="right">{children}</div>
        </div>
      </div>
    </section>
  );
}

// https://media.graphassets.com/bLuHMXtwQSuN3qXJrj7A

import { EventPartenaire } from '../../../components/apropos';
import { Banniere_second } from '../../../components/banniere';
import Contact from '../../../components/contact';
import { EvenIntro, EventComponent_2 } from '../../../components/event';
import Paragraph from '../../../components/paragraph';
import TeamMember from '../../../components/team';
import Titre, {
  Grand_Titre,
  SousTitre_1,
  SousTitre_2,
} from '../../../components/titre';
import Telecharger from '../composants/telecharger';

const gallerie = [
  {
    "id": 1,
    "image": "https://media.graphassets.com/oj4Tn0CQS2WEtuMMfr2r"
  },
  {
    "id": 2,
    "image": "https://media.graphassets.com/r23WuNONS1mf5aznEl6O"
  },
  {
    "id": 3,
    "image": "https://media.graphassets.com/KmIbEFqXSPawYvmpjU0h"
  },
  {
    "id": 4,
    "image": "https://media.graphassets.com/Gse0mfwmTQGEKVgX6uJg"
  },
  {
    "id": 5,
    "image": "https://media.graphassets.com/A06T7YPVSnKdyCshW22q"
  },
  {
    "id": 6,
    "image": "https://media.graphassets.com/ZhPyB2TkRcO8V9pWCVBn"
  },
  {
    "id": 7,
    "image": "https://media.graphassets.com/e4EV8Se8Q6eQ9SzlpRWz"
  },
  {
    "id": 8,
    "image": "https://media.graphassets.com/SxcVFNwDQSmGLDzDt5xM"
  }
]

export default function Apropos() {
  const Element = gallerie.map((el) => (
    <div
      className="items-grid"
      style={{ backgroundImage: `url(${el.image})` }}
    ></div>
  ));
  return (
    <div>
      <div className="vide"></div>
      <Banniere_second
        image={'https://media.graphassets.com/YZnN3sfyTDutBtshvwFP'}
      >
        <Grand_Titre style={{ color: 'white' }}>
          le SALAFEY 2022 en image
        </Grand_Titre>
        <h3>
          Le Salon du livre africain pour enfants de Yaoundé-SALAFEY résumeé en
          quelques images
        </h3>
      </Banniere_second>

      <div className="container" style={{ padding: '64px 0' }}>
        <SousTitre_1
          style={{ width: '100%', textAlign: 'center', margin: '24px 0' }}
        >
          Pourquoi Le SALAFEY ?
        </SousTitre_1>
        <section style={{ marginBottom: 64 }}>
          <Paragraph>
            <span className="quote">
              L'objectif des Ateliers Read'Arts est de promouvoir au travers des
              activités (la lecture, les jeux concours, etc...) la découverte
              des oeuvres Africaines.
            </span>
            Pendant longtemps, les enfants africains ont été exposés à des
            modèles externes à leurs réalités socio-culturelles à travers la
            télévision, les jouets et même leurs livres à images. Ce qui a causé
            un complexe d’infériorité, une perte de repères identitaires, une
            faible confiance en soi etc…
          </Paragraph>
        </section>
      </div>
      <section id="events">
        <EventComponent_2
          image={'https://media.graphassets.com/RFJKw2kVQiqsWzm2UXes'}
        >
          <SousTitre_1>Nos activités :</SousTitre_1>
          <h3>Toutes nos activités auront pour objectifs de :</h3>
          <h3>
            <ul>
              <li>
                Sensibiliser, impliquer et accompagner les parents, les
                éducateurs et les écoles à l’éveil, la promotion de la lecture
                et l’éducation consciente des enfants.{' '}
              </li>
              <li>
                Éveiller les enfants à la lecture, à la découverte culturelle et
                la confiance en soi en mettant à leur disposition le maximum de
                livres, jouets, jeux ainsi que tout autre contenu éducatif et de
                divertissement qui participe à construire leur identité
                culturelle positive.{' '}
              </li>
            </ul>
          </h3>
        </EventComponent_2>
        <EventComponent_2
          image={'https://media.graphassets.com/JvqP4ZqQUKlhizGfHNbQ'}
          inverse
        >
          <SousTitre_1>
            Le Concours de Lecture-Ecriture-Dessin sous le thème « Mon Identité
            »
          </SousTitre_1>

          <p>
            En prélude à la première édition du Salon du livre africain pour
            enfants de Yaoundé- SALAFEY, l’équipe d’organisation a lancé ce
            concours dont les cibles sont les élèves des classes de CMI, CMII,
            6ième et 5ième. Ce sont au total 15 lauréats dont cinq (05) par
            catégorie, qui recevront leurs récompenses le troisième jour de
            l’évènement à la Fondation Solomon Tandeng Muna.
          </p>
          <p>
            Un programme détaillé sera bientôt disponible… <br />
            <br />
            <strong>
              <u>Encadré :</u>
            </strong>{' '}
            Proposer une Activité pendant le SALAFEY
          </p>
        </EventComponent_2>
        <EventComponent_2
          image={'https://media.graphassets.com/RFJKw2kVQiqsWzm2UXes'}
        >
          <SousTitre_1>Nos activités :</SousTitre_1>
          <h3>Toutes nos activités auront pour objectifs de :</h3>
          <h3>
            <ul>
              <li>
                Sensibiliser, impliquer et accompagner les parents, les
                éducateurs et les écoles à l’éveil, la promotion de la lecture
                et l’éducation consciente des enfants.{' '}
              </li>
              <li>
                Éveiller les enfants à la lecture, à la découverte culturelle et
                la confiance en soi en mettant à leur disposition le maximum de
                livres, jouets, jeux ainsi que tout autre contenu éducatif et de
                divertissement qui participe à construire leur identité
                culturelle positive.{' '}
              </li>
            </ul>
          </h3>
        </EventComponent_2>
      </section>
      <Banniere_second
        image={'https://media.graphassets.com/1UTFRt5OQd4YFBTnBOYn'}
      ></Banniere_second>
      <EvenIntro image={'https://media.graphassets.com/FsXZQlmIR2yGOME5jzNo'}>
        <Titre>État des lieux</Titre>
        <h3>
          <ul>
            <li>
              L'influence du livre sur les domaines pédagogiques et culturelles
              est encore mineure par rapports autres continents
            </li>
            <li>
              Faible mutualisation des efforts entre les auteurs majeurs de
              l'industrie créative et culturelle
            </li>
            <li>
              Une littérature jeunesse émergente mais avec une faible force de
              diffusion et de distribution
            </li>
          </ul>
        </h3>
      </EvenIntro>
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <SousTitre_1
            style={{ width: '100%', textAlign: 'center', marginBottom: 36 }}
          >
            Quelques images
          </SousTitre_1>
        </div>
        <div className="container">
          <div className="grid-4">{Element}</div>
        </div>
      </section>
      <Telecharger
        url="https://media.graphassets.com/RVQr8qpSi62xJoWqZg1M"
        href="https://media.graphassets.com/MxEQJJvzRDqKLycz44b1"
      />
      <section id="team">
        <div className="container">
          <SousTitre_1 style={{ marginBottom: 36, color: 'white' }}>
            Notre Equipe
          </SousTitre_1>
          <div className="grid">
            <TeamMember
              image={'https://media.graphassets.com/yBpiAdbQV2Db7bYLt8JQ'}
              nom="Nadine Mekougoum"
              role={
                'Fondatrice de l’association Harambee Africa | Les Librairies M’wina,'
              }
            />
            <TeamMember
              image={'https://media.graphassets.com/RtvSG8xuSCSfYAc3JIRw'}
              nom="Ray NDEBI"
              role={'Coordonateur | Partenariat'}
            />
            <TeamMember
              image={'https://media.graphassets.com/WVGaz53UQMaeCZpqLYxA'}
              nom="Pauline ONGONO"
              role={'Communication et Relation publique'}
            />
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
}

// FsXZQlmIR2yGOME5jzNo

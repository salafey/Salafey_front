import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { gql } from 'graphql-request';

import Apropos from '../components/apropos';
import { Banniere } from '../components/banniere';
import { hygraph } from './api/hygraph';
import EventsComponent, { SpecialEvent } from '../components/event';

import Titre, {
  SousTitre_2,
  SousTitre_1,
  Grand_Titre,
} from '../components/titre';
import Livre from '../components/livre';
import Contact from '../components/contact';

export default function Home({
  bannierePrincipales,
  eventDays,
  specialEvents,
  livres,
}) {
  const data1 = eventDays[eventDays.length - 1];
  const data2 = eventDays[eventDays.length - 2];

  const handleLivre = () => {
    const result = [];
    for (let i = 0; i <= 6; i++) {
      const data = livres[i];
      if (data !== undefined) {
        result.push(<Livre data={data} />);
      }
    }
    return result;
  };

  return (
    <>
      <Head>
        <title>SALAFEY 2022</title>
        <meta
          name="title"
          content="SALAFEY - Le Salon du Livre Africain pour les Enfants de Yaoundé"
        />
        <meta
          name="description"
          content="le SALAFEY a pour objectif de bâtir une génération d'enfants Africains avec une identité culturelle positive. Sensibiliser, impliquer et accompagner les parents, les éducateurs et les écoles à l'éveil, la promotion de la lecture et l'éducation consciente des enfants. Éveiller les enfants à la lecture, à la découverte culturelle et la confiance en soi en mettant à leur disposition le maximum de livres, jouets, jeux ainsi que tout autre contenu éducatif et de divertissement qui participe à construire leur identité culturelle positive"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="SALAFEY - Le Salon du Livre Africain pour les Enfants de Yaoundé"
        />
        <meta
          property="og:description"
          content="le SALAFEY a pour objectif de bâtir une génération d'enfants Africains avec une identité culturelle positive. Sensibiliser, impliquer et accompagner les parents, les éducateurs et les écoles à l'éveil, la promotion de la lecture et l'éducation consciente des enfants. Éveiller les enfants à la lecture, à la découverte culturelle et la confiance en soi en mettant à leur disposition le maximum de livres, jouets, jeux ainsi que tout autre contenu éducatif et de divertissement qui participe à construire leur identité culturelle positive"
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="SALAFEY - Le Salon du Livre Africain pour les Enfants de Yaoundé"
        />
        <meta
          property="twitter:description"
          content="le SALAFEY a pour objectif de bâtir une génération d'enfants Africains avec une identité culturelle positive. Sensibiliser, impliquer et accompagner les parents, les éducateurs et les écoles à l'éveil, la promotion de la lecture et l'éducation consciente des enfants. Éveiller les enfants à la lecture, à la découverte culturelle et la confiance en soi en mettant à leur disposition le maximum de livres, jouets, jeux ainsi que tout autre contenu éducatif et de divertissement qui participe à construire leur identité culturelle positive"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <main>
        <div className="vide"></div>
        <Banniere data={bannierePrincipales}>
          <div className="right">
            <Grand_Titre style={{ color: 'white' }}>Salafey</Grand_Titre>
            <span className="soutitre">
              SALON DU LIVRE AFRICAIN POUR ENFANTS DE YAOUNDÉ
            </span>
            <h2 className="soutitre">
              Batir une génération d'enfants Africains avec une identité
              culturelle positive
            </h2>
            <div className={'button'}>
              <span>Avoir plus d'Information</span>
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
        </Banniere>
        <section>
          <Apropos />
        </section>
        <section id="events">
          <div className="container">
            <SousTitre_2 style={{ color: '#4E7001', marginBottom: 36 }}>
              Quelques unes de nos Activités
            </SousTitre_2>
          </div>
          <EventsComponent link={'/'} image={data1.eventPicture.url}>
            <SousTitre_1>{data1.eventTitle}</SousTitre_1>
            <p>{data1.description[0]}</p>
          </EventsComponent>
          <EventsComponent
            inverse
            link={'/evenements/ville'}
            image={data2.eventPicture.url}
          >
            <SousTitre_1>{data2.eventTitle}</SousTitre_1>
            <p>{data2.description[0]}</p>
          </EventsComponent>
        </section>
        <SpecialEvent data={specialEvents} />
        <section id="ambitions">
          <div className="container">
            <SousTitre_2 style={{ marginBottom: 36 }}>
              Notre Ambition sur le long Term
            </SousTitre_2>
            <h3>
              Devenir un rendez-vous majeur des acteurs du livre Jeunesse et ses
              secteurs connexes en Afrique en :
            </h3>
          </div>
          <div className="tree">
            <div className="container">
              <div className="section uno">
                <div className="image">
                  <div>
                    <img
                      src="https://media.graphassets.com/w2R9BnoSSejtkoZEixkQ"
                      alt=""
                    />
                  </div>
                </div>
                <div className="texte">
                  Offrant un espace convivial d'echanges entre les differnts
                  acteurs.
                </div>
              </div>
              <div className="section">
                <div className="image">
                  <div>
                    <img
                      src="https://media.graphassets.com/wBH7QlfBSO69KCiwDUOD"
                      alt=""
                    />
                  </div>
                </div>
                <div className="texte">
                  Facilitant des rencontres B2B, B2C, B2A et B2E
                </div>
              </div>
              <div className="section trees">
                <div className="image">
                  <div>
                    <img
                      src="https://media.graphassets.com/HLDkQXmHRyWRh8SsIIxm"
                      alt=""
                    />
                  </div>
                </div>
                <div className="texte">
                  Creant un solide reseaux africain d'auters pour le changement
                  social pae le livre
                </div>
              </div>
            </div>
          </div>

          <div className="second">
            <div className="container">
              <div className="lePlus">
                <div
                  className="left"
                  style={{
                    backgroundImage: `url(https://media.graphassets.com/hSSVgZRyqx1qqnuwrZQx)`,
                  }}
                ></div>
                <div className="right">
                  <SousTitre_1 style={{ color: 'white' }}>
                    {' '}
                    Notre Cible
                  </SousTitre_1>

                  <h2>
                    <ul>
                      <li>
                        Les Maisons d'edition qui produisent la litterature
                        jeunesse
                      </li>
                      <li>
                        Les librairies, Bibliotheque et association litteraires
                        et culturelles
                      </li>
                      <li>Auteurs, Ecoles et famille</li>
                      <li>Diaspora Africaine et Entreprise</li>
                    </ul>
                  </h2>

                  <div className="flotant">
                    <div className="texte">En savoir plus</div>
                    <button>
                      <svg
                        className="fleche"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512"
                      >
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
              </div>
            </div>
          </div>
        </section>

        <section id="librairie">
          <div className="container">
            <div className="left">
              <Titre style={{ color: 'white' }}>
                Découvrez notre librairie jeunesse & Africaine
              </Titre>
              <div className="flotant">
                <div className="texte">En savoir plus</div>
                <button>
                  <svg
                    className="fleche"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="48"
                      d="m268 112l144 144l-144 144m124-144H100"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="right">{handleLivre()}</div>
          </div>
        </section>
        <Contact />
      </main>
    </>
  );
}

const QUERY = gql`
{
  bannierePrincipales {
    id
    title
    paragraph
    banniereLink
    banniereImage {
      url
    }
  }
  eventDays {
    id
    description
    eventTitle
    eventSlug
    eventPicture {
      id
      url
    }
  }
  specialEvents {
    titre
    picture {
      url
    }
    dateEvent
  }
  livres {
    id
    titre
    image {
      url
    }
  }
}`;

export async function getStaticProps() {
  const { bannierePrincipales, eventDays, specialEvents, livres } =
    await hygraph.request(QUERY);

  return {
    props: {
      bannierePrincipales,
      eventDays,
      specialEvents,
      livres,
    },
  };
}

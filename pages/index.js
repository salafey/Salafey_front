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
import ActusItem from '../components/actus';
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

  // setInterval(() => {
  //   CountDown().;
  // }, 1000);
 
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
      <Head></Head>
      <main>
        <Banniere data={bannierePrincipales}>
          <div className="right">
            <Grand_Titre style={{ color: 'white' }}>Salafey</Grand_Titre>
            <h1>2022</h1>
            <span className="soutitre">
              SALON DU LIVRE AFRICAIN <br /> POUR ENFANTS DE YAOUNDÉ
            </span>

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
              Devenir un rendez-vous majeur des acteurs du livre Jeune et ses
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
                        jeune
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
        {/* <section id="actus">
          <div className="container">
            <SousTitre_2 style={{ color: '#4E7001' }}>
              Decouvrez notre actualite
            </SousTitre_2>
            <div className="flotant">
              <div className="texte">Voir plus</div>
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
          <div className="container Articles">
            <ActusItem />
            <ActusItem />
            <ActusItem />
            <ActusItem />
          </div>
        </section> */}
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

export async function getServerSideProps() {
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

// hSSVgZRyqx1qqnuwrZQx

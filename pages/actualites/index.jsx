import { gql } from 'graphql-request';
import Contact from '../../components/contact';
import Titre, { SousTitre_1, SousTitre_2 } from '../../components/titre';
import { hygraph } from '../api/hygraph';

export default function Actualite({ articlesBlogs }) {
  console.log(articlesBlogs);
  const ArticleListe = (
    <div className="grid">
      {articlesBlogs.map((el, key) => (
        <ArticleItems
          titre={el.titre}
          id={el.id}
          image={el.firstImage.url}
          key={key}
          publier={el.createdAt}
        />
      ))}
    </div>
  );

  return (
    <div>
      <div className="vide"></div>
      <section className="bannierePage">
        {articlesBlogs.length === 0 ? null : (
          <EventProche
            image={'https://media.graphassets.com/YZnN3sfyTDutBtshvwFP'}
          />
        )}
      </section>
      <section className="list">
        <div className="container">
          <SousTitre_1 style={{ margin: '24px 0' }}>
            Tous les articles
          </SousTitre_1>
        </div>
        <div className="container" style={{ marginBottom: 24 }}>
          {articlesBlogs.length === 0 ? (
            <div
              style={{
                width: '100%',
                height: 200,
                padding: 18,
                backgroundColor: '#ededed',
                borderRadius: 12,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Aucun article pour le moment
            </div>
          ) : (
            ArticleListe
          )}
        </div>
      </section>
      <Contact />
    </div>
  );
}

function EventProche({ image }) {
  return (
    <div className="eventProche" style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <Titre style={{ color: 'white', marginBottom: 16 }}>Actualités</Titre>
        <div className="eventHaut" style={{ backgroundImage: `url(${image})` }}>
          <div className="content">
            <div>
              <div className="left">
                <h1 style={{ color: 'white' }}>Recent</h1>
                <Titre style={{ color: 'white' }}>Titre de L'actu</Titre>
                <div className="countdown">
                  <h1>Description</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleItems({ image, titre, publier, id }) {
  const datePubliched = new Date(publier);
  const FormatDate = () => {
    const mois = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ];

    const moisPublished = mois[datePubliched.getMonth()];
    const day =
      datePubliched.getDate() < 10
        ? `0${datePubliched.getDate()}`
        : datePubliched.getDate();

    return `${day} ${moisPublished} ${datePubliched.getFullYear()}`;
  };

  return (
    <div className="articleItems">
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="desc">
        <SousTitre_2>{titre}</SousTitre_2>
        <span>Publié le : {FormatDate()}</span>
      </div>
    </div>
  );
}

const QUERY = gql`
{
  articlesBlogs {
    titre
    slug
    id
    firstImage {
      url
    }
    publishedAt
    createdAt
  }
}
`;

export async function getServerSideProps() {
  const { articlesBlogs } = await hygraph.request(QUERY);
  return {
    props: {
      articlesBlogs,
    },
  };
}

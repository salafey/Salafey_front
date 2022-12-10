import { gql } from 'graphql-request';
import Contact from '../../components/contact';
import Titre, {
  Grand_Titre,
  SousTitre_1,
  SousTitre_2,
} from '../../components/titre';
import { hygraph } from '../api/hygraph';

export default function Actualite({ articlesBlogs }) {
  const ArticleListe = () => {
    <div className="grid">
      {articlesBlogs.map((el, key) => {
        const { id, titre, slug, firstImage } = el;
        <ArticleItems titre={titre} id={id} image={firstImage.url} />;
      })}
    </div>;
  };

  return (
    <div>
      <section class="bannierePage">
        <EventProche
          image={'https://media.graphassets.com/YZnN3sfyTDutBtshvwFP'}
        />
      </section>
      <section className="list">
        <div className="container">
          <SousTitre_1 style={{ marginBottom: 24 }}>
            Tous les articles
          </SousTitre_1>
        </div>
        <div className="container" style={{ marginBottom: 24 }}>
          {articlesBlogs.length === 0 ? (
            <div
              style={{
                width: '100%',
                padding: 18,
                backgroundColor: '#ededed',
                borderRadius: 12,
                textAlign: 'center',
              }}
            >
              Aucun articles pour le moment
            </div>
          ) : (
            ArticleListe()
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
  return (
    <div className="articleItems">
      <div
        className="image"
        style={{
          backgroundImage: image,
        }}
      ></div>
      <div className="desc">
        <SousTitre_2>{titre}</SousTitre_2>
        <span>{publier}</span>
      </div>
    </div>
  );
}

const QUERY = gql`
{
  articlesBlogs {
    id
    titre
    slug
    firstImage {
      url
    }
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

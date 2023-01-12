import Contact from '../../../components/contact';
import Paragraph from '../../../components/paragraph';
import Titre from '../../../components/titre';
import Banniere from '../composants/banniere';

import gallerie from './gallerie.json';

export default function EventArticle() {
  const Element = gallerie.map((el) => (
    <div
      className="items-grid"
      style={{ backgroundImage: `url(${el.image})` }}
    ></div>
  ));

  return (
    <div>
      <div className="vide"></div>
      <Banniere url={'https://media.graphassets.com/oMM0k2wqS9ebKE1G48CH'} />
      <div className="container">
        <Paragraph>
          <Titre style={{ marginBottom: 24 }}>
            FAANDOU DEFTERE (BOÎTE À LIVRES)
          </Titre>
          <p style={{ textAlign: 'justify' }}>
            Installation des boîtes à livres et promotion de la lecture dans les
            camps de refugiés au Cameroun. Notre objectif est de faire de la
            lecture une thérapie pour les enfants qui subissent la guerre; et un
            outil d'excellence scolaire. Nous avons déjà installé une dizaine de
            boîte à livres a ce jour.
          </p>
          <span className="quote">
            L'objectif des Ateliers Read'Arts est de promouvoir au travers des
            activités (la lecture, les jeux concours, etc...) la découverte des
            oeuvres Africaines.
          </span>
          {/* <p style={{ textAlign: 'justify' }}>
            Les Ateliers Read'Arts est l'une des activités majeurs que nous
            organisons depuis 2019 pour initier les enfants à la lecture
            plaisir, à l'art et à la science. Nous les organisons dans les
            musées et les espaces culturelles telque le Musée Ethographique et
            d'histoire des peuples de la forêt, Musée la BlacKitude, Musée
            National, Africréa, palais des Arts, The Forest Creative Loft à
            Douala, et dans les écoles. Nous avons également développer les
            lectures à domicile pour un suivi plus rapproché dans certaines
            familles et aidé à l'installation des bibliothèques familiales avec
            un minimum de 200 enfants formés à ce jour.
          </p> */}
        </Paragraph>
        <Paragraph>
          <h2 style={{ textAlign: 'left', fontSize: 28, marginTop: '36px' }}>
            Quelques photos
          </h2>
        </Paragraph>
        <div className="grid-4">{Element}</div>
      </div>
      <Contact />
    </div>
  );
}

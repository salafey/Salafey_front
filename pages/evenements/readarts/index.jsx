import Contact from '../../../components/contact';
import Paragraph from '../../../components/paragraph';
import Titre from '../../../components/titre';
import Banniere from '../composants/banniere';

export default function EventArticle() {
  return (
    <div>
      <div className="vide"></div>
      <Banniere />
      <div className="container">
        <Paragraph>
          <Titre style={{ marginBottom: 24 }}>LES ATELIERS READ'ARTS</Titre>
          <p style={{ textAlign: 'justify' }}>
            Les Ateliers Read'Arts est l'une des activités majeurs que nous
            organisons depuis 2019 pour initier les enfants à la lecture
            plaisir, à l'art et à la science. Nous les organisons dans les
            musées et les espaces culturelles telque le Musée Ethographique et
            d'histoire des peuples de la forêt, Musée la BlacKitude, Musée
            National, Africréa, palais des Arts, The Forest Creative Loft à
            Douala, et dans les écoles Nous avons éegalement développer les
            lectures a domiciles pour un suivi plus rapproché dans certaines
            familles et l'aide à l'installation des bibliothèques familiales
            avec un minimum de 200 enfants formés à ce jour
          </p>
        </Paragraph>
      </div>
      <Contact />
    </div>
  );
}

import { EventPartenaire } from '../../components/apropos';
import { Banniere_second } from '../../components/banniere';
import Contact from '../../components/contact';
import { EvenIntro, EventComponent_2 } from '../../components/event';
import Paragraph from '../../components/paragraph';
import TeamMember from '../../components/team';
import Titre, {
  Grand_Titre,
  SousTitre_1,
  SousTitre_2,
} from '../../components/titre';

export default function Apropos() {
  return (
    <div>
      <div className="vide"></div>
      <Banniere_second
        image={'https://media.graphassets.com/YZnN3sfyTDutBtshvwFP'}
      >
        <Grand_Titre style={{ color: 'white' }}>À propos de nous</Grand_Titre>
        <h3>
          Le Salon du livre africain pour enfants de Yaoundé-SALAFEY est une
          plateforme privilégiée d’échanges entre les acteurs du livre pour
          enfants en Afrique afin de discuter des avancées, des problèmes et
          enjeux et d’apporter des éléments de projection vers l’avenir
        </h3>
      </Banniere_second>
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
      <div className="container" style={{ padding: '64px 0' }}>
        <SousTitre_1
          style={{ width: '100%', textAlign: 'center', margin: '24px 0' }}
        >
          Pourquoi Le SALAFEY ?
        </SousTitre_1>
        <section style={{ marginBottom: 64 }}>
          <Paragraph>
            Pendant longtemps, les enfants africains ont été exposés à des
            modèles externes à leurs réalités socio-culturelles à travers la
            télévision, les jouets et même leurs livres à images. Ce qui a causé
            un complexe d’infériorité, une perte de repères identitaires, une
            faible confiance en soi etc…
          </Paragraph>
          <Paragraph>
            Malgré les belles initiatives (Maisons d’édition, librairies,
            associations littéraires, jeux vidéo, jouets…) mis en place pour
            pallier ce problème, il ya une faible mutualisation des efforts des
            acteurs majeurs de l’industrie créative et culturelle pour
            déclencher un grand mouvement de changement social.
          </Paragraph>
        </section>

        <div className="tree" style={{ marginBottom: 64 }}>
          <div className="container">
            <div className="section uno">
              <div
                className="texte"
                style={{
                  alignItems: 'center',
                  height: '100%',
                  display: 'flex',
                }}
              >
                On a une littérature jeunesse africaine émergente mais avec une
                faible force de diffusion et de distribution
              </div>
            </div>
            <div className="section">
              <div
                className="texte"
                style={{
                  alignItems: 'center',
                  height: '100%',
                  display: 'flex',
                }}
              >
                Une insuffisance des habitudes de lecture extra scolaires au
                sein des familles, des écoles et des entreprises.
              </div>
            </div>
            <div className="section trees">
              <div
                className="texte"
                style={{
                  alignItems: 'center',
                  height: '100%',
                  display: 'flex',
                }}
              >
                De nombreux livres d’auteurs africains et sa diaspora sont
                difficile d’accès
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="events">
        <SousTitre_1
          style={{ width: '100%', textAlign: 'center', marginBottom: '24px' }}
        >
          {' '}
          Que Faire ?{' '}
        </SousTitre_1>
        <div className="container" style={{ paddingBottom: 64 }}>
          <Paragraph>
            {' '}
            Nous avons pensé à créer : Un réseau d’acteurs de changement social
            par LE LIVRE : Le SALAFEY. Il se veut un carrefour de rencontre et
            d’échange avec tous les acteurs qui peuvent faire bouger les lignes.
          </Paragraph>
        </div>
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
      </section>
      <Banniere_second
        image={'https://media.graphassets.com/1UTFRt5OQd4YFBTnBOYn'}
      >
        <SousTitre_1 style={{ color: 'white' }}>Participants :</SousTitre_1>
        <ul className={'colors'}>
          <p>
            Nous invités toute la communauté africaine à ce Rendez-vous inédit !
          </p>
          <li>Auteur.e.s/Illustrateur.rice.s</li>
          <p>
            Auteur.e.s/Illustrateur.rice.s, inscrivez-vous au plutôt pour
            prendre part au SALAFEY
          </p>
          <li>Éditeur.rice. s/ Libraire.s/Bibliothèques</li>
          <p>
            Chers professionnels de l’édition, inscrivez-vous au plutôt pour
            prendre part au SALAFEY
          </p>
          <li>Établissements scolaires / Enfants</li>
          <p>
            Le SALAFEY est votre Rendez-vous ! Nous vous attendons nombreux. Des
            activités spéciales seront organisées pour vous et les élèves.
          </p>
          <li>Organisations / Associations</li>
        </ul>
      </Banniere_second>
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <SousTitre_1
            style={{ width: '100%', textAlign: 'center', marginBottom: 36 }}
          >
            Nous connaitre
          </SousTitre_1>
        </div>
        <EventPartenaire
          image={'https://media.graphassets.com/bLuHMXtwQSuN3qXJrj7A'}
          alt={'LOGO HARAMBEE AFRICA'}
        >
          <p>
            <strong>Harambee Africa</strong> est une organisation à but non
            lucratif mis en place en 2018 et légalisée le 04 septembre 2020 pour
            promouvoir la lecture et le livre comme outils de développement
            socio-économique. Avec son projet « Faandou Deftéré », elle installe
            des boîtes à livres et promeut la lecture dans les camps de
            réfugiés, les villages et les orphelinats au Cameroun. À ce jour,
            elle a : Installé des boîtes à livres (près de 2000 livres) au Camp
            des réfugiés de Gado-Badzéré, région de l’Est, à l’école primaire
            d’application de Monatélé et l’école catholique de Ngaountet 2,
            région du Centre. Installé une bibliothèque murale (Environ 300
            livres pour enfants et jeunes) à l’Orphelinat Sainte Rita de
            Mendong, Yaoundé. Elle a aussi équipé la bibliothèque de
            l’association Afrogiveness (Environ 200 livres pour enfants et
            jeunes) à l’occasion de la journée internationale de la Tolérance,
            Yaoundé et sensibilisé près de 3000 enfants et jeunes à la lecture.
          </p>
        </EventPartenaire>

        <EventPartenaire
          image={'https://media.graphassets.com/KZ2gR6rQw29kb2HQlY5j'}
          alt={"LOGO M'WINA"}
        >
          <p>
            <strong>L’entreprise M’WINA Sarl</strong> propose des livres et
            jouets africains pour enfants. Elle a été mise en place pour
            répondre au besoin des parents d’avoir le maximum de livres et
            jouets africains de qualité pour construire une identité culturelle
            positive chez leurs enfants. Elle offre des services d’éveil des
            enfants à la lecture, à l’art et à la science (Les ateliers Read
            ’arts - Lecture à domicile), de découverte culturelle (Visite des
            musées et lieux culturels) qui ont permis d’initier plus de 200
            enfants et jeunes à la lecture-plaisir, la connaissance et la
            confiance en soi etc. Elle anime également des ateliers de lecture
            dans les écoles et accompagne les ménages dans la création des
            bibliothèques familiales.
          </p>
        </EventPartenaire>
        <EventPartenaire
          image={'https://media.graphassets.com/QcrLBsL4Qae7kCgknhLG'}
          alt={'LOGO ONOAN'}
        >
          <p>
            Référence littéraire au Cameroun et en Afrique,{' '}
            <strong>ONOAN</strong> est un acteur des industries créatives et
            culturelles. L’association a été créée en 2019 et a démarré
            activement ses travaux en 2020. Elle comporte trois axes majeurs :
            l’Académie qui se charge de la formation et de l’accompagnement en
            creative writing, lecture, évaluation et analyse approfondie,
            traduction littéraire à travers ses ateliers et ses master class en
            ligne et en présentiel. L’agence littéraire qui conseille et
            accompagne les acteurs de la recherche de l’éditeur à la promotion.
            La maison des cultures qui accueille les auteurs et autres artistes
            en résidences et spectacles. Ônoan œuvre aussi pour la promotion du
            livre de qualité et l’épanouissement des élèves et étudiants en ce
            qui concerne la littérature dans leurs études. Elle a déjà encadré
            des dizaines d’auteurs, de traducteurs et autres passionnés du livre
            et de la critique à travers le monde
          </p>
        </EventPartenaire>
      </section>
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

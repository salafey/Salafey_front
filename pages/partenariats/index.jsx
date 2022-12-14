import Contact from '../../components/contact';
import Titre, { Grand_Titre } from '../../components/titre';

export default function Partenariat() {
  return (
    <div id="partenaire">
      <head>
        <title>Partenaire | SALAFEY 2022</title>
      </head>
      <div className="vide"></div>
      <div className="container">
        <Titre style={{ margin: '48px 0' }}>nos partenaires</Titre>
        <h1>Découvrez nos partnaires pour notre évènement SALAFEY 2022</h1>
        <div className="eventPartenaire">
          <Partenaire image="https://media.graphassets.com/Uwx83KHzRr2Wyy1lGtHT" />
          <Partenaire image="https://media.graphassets.com/TqlYYmRb7RwhPna3gcbl" />
          <Partenaire image="https://media.graphassets.com/Dk2qBDcaSmmQDZHnvx86" />
          <Partenaire image="https://media.graphassets.com/YHuLDEhFT5KAZE3jd7kV" />
          <Partenaire image="https://media.graphassets.com/BH4FaQanTH2KpcKxkMDo" />
          <Partenaire image="https://media.graphassets.com/gPmTk3TWQuWHRsbPsX7b" />
          <Partenaire image="https://media.graphassets.com/cchvxSOYQ1mKZ4TzL8k2" />
          <Partenaire image="https://media.graphassets.com/hDwngxoATfiI11EBXJsl" />
          <Partenaire image="https://media.graphassets.com/LOjdyDaHQXyUN76bLmkg" />
          <Partenaire image="https://media.graphassets.com/PpFZZ5Z3Sk6E2qN0RRVL" />
          <Partenaire image="https://media.graphassets.com/IKjhcmN8ROCrXsZoGJgV" />
          <Partenaire image="https://media.graphassets.com/Q2XF0dOoTpi60hhfaygd" />
          <Partenaire image="https://media.graphassets.com/ceyhHraRUOhs78VZSKfU" />
          <Partenaire image="https://media.graphassets.com/fHtdF07QQ6hL2irq1QOv" />
          <Partenaire image="https://media.graphassets.com/fhvS9jQ6Q76HAPh0CVm5" />
          <Partenaire image="https://media.graphassets.com/hEqis1oQKSVvhaLzphWA" />
          <Partenaire image="https://media.graphassets.com/xenbl93QGOlKIpe8TMVJ" />
          <Partenaire image="https://media.graphassets.com/aFOmhaPIRVeskrgwdTuw" />
          <Partenaire image="https://media.graphassets.com/BWNpDz4RQiShi5KtCRri" />
          <Partenaire image="https://media.graphassets.com/39oYbp6TE5bBoLgoeNQQ" />
          <Partenaire image="https://media.graphassets.com/NTX9yPLxQt2laaTHSs9F" />
        </div>
        <Contact />
      </div>
    </div>
  );
}

function Partenaire({ image }) {
  return (
    <div className="Partenaire_Items">
      <div>
        <img src={image} alt="" width="100%" />
      </div>
    </div>
  );
}

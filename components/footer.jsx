import { image } from './image';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <section>
          <div className="logo">
            <div>
              <img src={image} width={'100%'} alt="salafey logo" />
            </div>
          </div>
          <h5>
            SALAFEY <br />
            Decembre 2022
          </h5>
        </section>
        <section>
          <h4>Notre menu</h4>
          <div className="menuElement">Objectifs</div>
          <div className="menuElement">A Propos de nous</div>
          <div className="menuElement">Evenements</div>
          <div className="menuElement">Actualites</div>
          <div className="menuElement">Contactez-nous</div>
        </section>
        <section>
          <h4>CONTACT INFO </h4>
          <div className="menuElement">Email : contactmwinasarl@gmail.com</div>
          <div className="menuElement">Tel : +237 673662503/698591740</div>
        </section>
      </div>
    </footer>
  );
}

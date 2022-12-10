import { useState } from 'react';
import Titre, { SousTitre_2 } from './titre';

export default function Contact() {
  const [heightTextarea, setHeightTextarea] = useState(150);

  const handleTextareaChange = ({ target }) => {
    console.log(target.scrollHeight);

    if (target.scrollHeight <= 150) {
      setHeightTextarea(150);
    } else {
      setHeightTextarea(target.scrollHeight);
    }
  };
  return (
    <section className="contact">
      <div className="container">
        <div className="left">
          <Titre>Devenez bénévoles du SALAFEY</Titre>
          <p>
            Vous souhaitez faire partie de la dynamique et passionnée équipe de
            bénévoles de la première édition du SALAFEY ? Cette année, le
            SALAFEY aura lieu du Vendredi 16 au Dimanche 18 décembre 2022 au
            Musée National. Devenir bénévole !
          </p>
        </div>
        <div className="right">
          <SousTitre_2 style={{ color: 'white' }}>Contactez nous </SousTitre_2>
          <InputText
            titre="Nom et Prenom"
            type="text"
            placeholder="Votre nom et prenom"
            name="nomPrenom"
          />
          <InputText
            titre="Adresse E-mail "
            type="mail"
            placeholder="Votre adresse e-mail"
            name="mail"
          />
          <InputText
            titre="Ville et Pays"
            type="text"
            placeholder="Ex : Yaounde, Cameroun"
            name="mail"
          />
          <InputText
            titre="Objet"
            type="text"
            placeholder="L'objet de votre Message"
            name="objet"
          />

          <InputTextArea
            titre={'Votre Message'}
            style={{ height: heightTextarea }}
            onChange={handleTextareaChange}
          />
          <div className="champ">
            <button>Envoyer</button>
          </div>
        </div>
      </div>
    </section>
  );
}

const InputText = ({ type, titre, placeholder, value, onChange, name }) => {
  return (
    <div className={'champ'}>
      <label htmlFor={name}>{titre}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
const InputTextArea = ({
  titre,
  placeholder,
  value,
  onChange,
  name,
  style,
}) => {
  return (
    <div className={'champ'}>
      <label htmlFor={name}>{titre}</label>
      <textarea
        style={style}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></textarea>
    </div>
  );
};

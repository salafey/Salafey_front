export default function Titre({ children, style }) {
  return (
    <>
      <div style={{ ...style }} className="titre">
        {children}
      </div>
    </>
  );
}
export function Grand_Titre({ children, style }) {
  return (
    <>
      <div style={{ ...style }} className="grand-titre">
        {children}
      </div>
    </>
  );
}

export function SousTitre_1({ children, style }) {
  return (
    <>
      <div style={{ ...style }} className="titre_1">
        {children}
      </div>
    </>
  );
}

export function SousTitre_2({ children, style }) {
  return (
    <>
      <div style={{ ...style }} className="titre_2">
        {children}
      </div>
    </>
  );
}

export default function Livre({ data }) {
  const { image } = data;
  return (
    <div className="livre" style={{ backgroundImage: `url(${image.url})` }}>
      <div className="image">
        <div>
          <img src={`${image.url}`} width="100%" alt="" />
        </div>
      </div>
      <div className="texte"></div>
    </div>
  );
}

export default function Banniere({ url }) {
  return (
    <section className="page article banniere">
      <div className="container">
        <div
          className="diapos"
          style={{
            backgroundImage: `url(${url})`,
          }}
        ></div>
      </div>
    </section>
  );
}

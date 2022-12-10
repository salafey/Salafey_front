export default function ActusItem() {
  return (
    <div
      className="ActusItem"
      style={{
        backgroundImage:
          'url(https://media.graphassets.com/eN32C1AfSZWqguVV33V0)',
      }}
    >
      <div className="contenu">
        <div className="bas">
          <div className="titre">le titre de l'articles en toute lettre</div>
          <div className="plus">
            <button>
              <svg
                className="fleche"
                width="24"
                height="24"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m268 112l144 144l-144 144m124-144H100"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

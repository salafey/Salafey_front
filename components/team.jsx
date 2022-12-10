export default function TeamMember({ image, nom, role }) {
  return (
    <div className="teamMember">
      <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="desc">
        <div className="nom">{nom}</div>
        <div className="role">{role}</div>
      </div>
    </div>
  );
}

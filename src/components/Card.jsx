export function Card({ name, url }) {
  return (
    <div className="card">
      <img src={url} alt={name}></img>
      <p>{name}</p>
    </div>
  );
}

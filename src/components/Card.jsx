export function Card({ name, url, status, onClick }) {
  return (
    <div className="card" onClick={onClick} status={status}>
      <img src={url} alt={name}></img>
      <p>{name}</p>
    </div>
  );
}

import './Homepage.css';

function Homepage(props) {
  const filter = "";

  return (
    <div className="body">
      <div className="input">
        <label htmlFor="filter">Recherche par Nom de film</label>
        <input type="text" id="name" name="name" onChange></input>
      </div>
    </div>
  )
}
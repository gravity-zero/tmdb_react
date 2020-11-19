import './Searchbar.scss';

function Searchbar(props) {

  return (
    <div className="Searchbar">
        <form onSubmit={props.handleSubmit}>
      <div className="input">
        <label>
        <input 
        type="text" 
        id="title" 
        name="title" 
        placeholder="Recherche... Avengers, La r.."
        value={props.value}
        onChange={props.handleChange}
        />
        </label>
      </div>
    </form>
    </div>
  );
}

export default Searchbar; 
 
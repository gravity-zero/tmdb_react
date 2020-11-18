import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  //const filter = "";
  const [value, setValue] = useState({
     title: '' 
    });

  function handleSubmit(event) {
    event.preventDefault();
    setValue({
      ...value,
      [event.target.name]: event.target.value
    
    });
  }
  console.log(value);
  return (
    <form onSubmit={handleSubmit}>
    <div className="body">
      <div className="input">
        <label>
          Recherche par Nom de film
        <input 
        type="text" 
        id="title" 
        name="title" 
        value={value.title}
        />
        <input type="submit" onSubmit={handleSubmit} />
        </label>
      </div>
    </div>
    </form>
  )
}

export default Homepage;
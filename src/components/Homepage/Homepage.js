import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  //const filter = "";
  const [value, setValue] = useState({
     title: '' 
    });

  function handleChange(event) {
    setValue({
      ...value,
      [event.target.name]: event.target.value
      });
    }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(value.title);
  }

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
        onChange={handleChange}
        />
        <input type="submit" />
        </label>
      </div>
    </div>
    </form>
  )
}

export default Homepage;
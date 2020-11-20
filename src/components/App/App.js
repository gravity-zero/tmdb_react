import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState} from 'react';
import  Homepage  from '../Homepage/Homepage';
import Header from '../Header/Header';
import Details from '../Details/Details'
import Footer from '../Footer/Footer';


function App() {

  const [value, setValue] = useState({
    title: '' 
   });
  
   const [movies, setMovies] = useState({
    total_results: '',
    results: []
  });

  const [lang, setLang] = useState({
    value : "fr",
  })

  function handleChange(event) {
    setValue({
      ...value,
      [event.target.name]: event.target.value
      });
    }

  function changeLang(event) {
    setLang({value:event.target.value})
  }

  return (
    <BrowserRouter>
      <Header 
        handleChange={handleChange}
        value={value.title}
        setMovies={setMovies}
        setValue={setValue}
        changeLang={changeLang}
        lang={lang.value}
      />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Homepage movies={movies} />}
          />
          <Route
            exact
            path="/details/:id"
            render={props=> <Details {...props} lang={lang.value} />}
          />
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;

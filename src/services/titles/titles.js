
/*onst value = "";
const api_key = "497f09650e99d4bcfc441563baefcceb";
fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${value}`)*/

export function getMoviesByName(name, lang)
{
    const api_key = "497f09650e99d4bcfc441563baefcceb";

    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${name}&language=${lang}`)
    .then(response => response.json());
        
}




export function getMovieById(id, lang)
{
    const api_key = "497f09650e99d4bcfc441563baefcceb";

    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=${lang}`)
    .then(response => response.json());
        
}

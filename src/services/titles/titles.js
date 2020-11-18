
/*onst value = "";
const api_key = "497f09650e99d4bcfc441563baefcceb";
fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${value}`)*/

export function getMoviesByName(name)
{
    const api_key = "497f09650e99d4bcfc441563baefcceb";

    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${name}`)
    .then((data) => data.json())
    .then((response) => {
        console.log(response);
    })
        
}

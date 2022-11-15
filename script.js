const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=%22";
const API_KEY = "https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>"

const movies = document.getElementById("movies")
const form = document.getElementById("form")
const search = document.getElementById("search")

getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    console.log(data.results)
    showMovies(data.results)
}
function getClassByRate(vote) {
    if(vote >= 7.5) {
        return "green";
    } else if (vote > 6) {
        return "orange";
    } else {
        return "red";
    }
}

function showMovies (movie) {
const moviesEl = document.querySelector(".movies");

// document.querySelector(".movies").innerHTML = "";

    movie.forEach(movie => {
         const { title , poster_path,  vote_average, release_date} = movie
   
        
        const movieEl = document.createElement("div")
        movieEl.classList.add("movie")

        movieEl.innerHTML = `
            <div class="movie__cover-inner">
            <img 
            src="${IMG_PATH + poster_path}" 
            class="movie_cover" 
            alt=${title}/>
            <div class="movie__cover--darkened"></div>
            </div>
            <div class="movie__info"> 
            <div class="movie__title">${title}</div>
            <div class="movie__category">${release_date}</div>
            <div class="movie__average movie__average--${getClassByRate(vote_average)}"> ${vote_average} </div>
            </div>
        `;
        moviesEl.appendChild(movieEl)
    });
  }

    form.addEventListener("submit", (e) => {
    e.preventDefault()
    const searchTerm = search.value
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)
        search.value = ''
    }
    else{
        window.location.reload()
    }
    })


//   const searchapi = document.querySelector(".header__search");

//    form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     const searchapi = `${SEARCH_API}${search.value}`
//     if(search.value) {
//         getMovies(searchapi);
//     }
//   })



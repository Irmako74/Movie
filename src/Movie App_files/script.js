const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=%22"


getMovies(API_URL);

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    console.log(data.results)
    showMovies(data.results)
}

function showMovies (movie) {

    main.innerHTML = ''

    movie.forEach(movie => {
        const { title , poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
                 <img src="${IMG_PATH + poster_path}" alt=${title}>
//             <div class="movie-info"> 
//             <span>${vote_average}</span>
//             <h3>${title}</h3>
//             <p>${overview}</p>
//             </div>

            <div class="movie">
            <div class="movie__cover-inner">
                <img 
                src="${IMG_PATH + poster_path}" alt=${title}}"
                class="movie__cover"
                />
                <div class="movie__cover-darkened"></div>
            </div>

            <div class="movie__info">
                <div class="movie__title">${title}</div>
                    <div class="movie__category">${overview}</div>
                        <div class="movie__average movie__average--green">${vote_average}</div>
            </div>
        </div>
    `;
    });
}



// function showMovies (movie) {
//     main.innerHTML = ''

//     movie.forEach(movie => {
//         const { title , poster_path, vote_average, overview } = movie

//         const movieEl = document.createElement('div')
//         movieEl.classList.add('movie')

//         movieEl.innerHTML = `
//             <img src="${IMG_PATH + poster_path}" alt=${title}>
//             <div class="movie-info"> 
//             <span>${vote_average}</span>
//             <h3>${title}</h3>
//             <p>${overview}</p>
//             </div>
//         `
//         main.appendChild(movieEl)
//     });
//   }
let allMovies;
let container = document.querySelector('.container');
const userInput = document.querySelector('.input')

fetch('movies_.json')
.then(movie => movie.json())
.then(movie => allMovies = movie)
.then(allMovies => allMovies.sort())

userInput.addEventListener('input', (e) => {
    let searchValue = e.target.value.toLowerCase();
    let foundResults = allMovies.filter((item) => {
      if (searchValue === '') return null;
      return item.title.toLowerCase().includes(searchValue)
    })

    returned(foundResults)
})
let returned = (results) => {
    let htmlString = results.map((movie) => {
      return `
      <section class="resultsSection" href="${movie.streaming}">
         <h2 class="title">${movie.title}</h2>
         <div class="imgBox">
         <span>${movie.rating}</span>
         <a href="${movie.streaming}" target="_blank"><img src="${movie.img}" alt="${movie.title}"></a>
         </div>

      </section>
      `
    }).join('');
    container.innerHTML = htmlString;
}

let compras = ["rice", "bread", "frijol", "aguacate", "tomato"];
let newShopping = [...compras, compras.push("aceite girasol")]
let oldShopping = newShopping.pop();
let movies = [
    {name: "titanic", director: "alfonso cuaron", year: 2000},
    {name: "amazing spiderman", director: "sony", year: 2011},
    {name: "avatar", director: "guillermo del toro", year: 2008}

]

let resentMovies = movies.filter(movie =>  movie.year > 2010)
let directions = movies.map(director => director.director)
let names = movies.map(name => name.name)
let togetherMovies = names.concat(directions)
let togetherMovie = [...names, ...directions]


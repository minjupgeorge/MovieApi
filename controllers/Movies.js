import FindMovie from "../utils/FindMovie.js";

// Sample data
let movies = [
    { id: 1, name: "Inception", genre: "Sci-Fi", year: 2010 },
    { id: 2, name: "The Godfather", genre: "Crime", year: 1972 },
    { id: 3, name: "The Dark Knight", genre: "Action", year: 2008 },
    { id: 4, name: "Pulp Fiction", genre: "Crime", year: 1994 },
    { id: 5, name: "The Shawshank Redemption", genre: "Drama", year: 1994 }
  ];

const movieControllers ={
    getMovies: (req,res) =>{ res.json(movies);},
   
    getMoviesById: (req,res) =>{
        const id=req.params.id;
        const movie = FindMovie(movies,parseInt(id));
        if (movie) {
          res.json(movie);
        } else {
          res.status(404).send('Cat not found');
        }
    },
    addMovie: (req,res) => {
      const{name,genre,year} = req.body;
      if(!name || !genre || !year)
        res.status(404).send('Please give name,genre and year');
      else
      {
      const newMovie = { id: movies.length + 1, name, genre,year};
      movies.push(newMovie);
      res.status(201).json(newMovie);
     }
    },
    updateMovie: (req,res)=>{
        const {id}=req.params;
        const{name,genre,year} = req.body;
        const movieExist = FindMovie(movies,parseInt(id));
        if(movieExist)
        {
        if( name && genre && year)
        {
          movieExist.name = name;
          movieExist.genre = genre;
          movieExist.year = year;
          res.status(200).json(movieExist);
          }
          else {
            res.status(400).send('Please give name ,genre and year');
          }
        }
        else
        
        res.status(404).send('Movie not found');
      },

      deleteMovie: (req,res) => {
       
        const id = parseInt(req.params.id); // Convert id to number
        const initialLength = movies.length;
        console.log("movielength",initialLength);
        movies =  movies.filter((mov) => mov.id !== id);

        if (movies.length < initialLength) {
            return res.status(200).send('Movie deleted successfully');
        } else {
            return res.status(404).send('Movie not found');
        }       
      
    }

  }
export default movieControllers;
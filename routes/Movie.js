import express from 'express';

import movieControllers from '../controllers/Movies.js';

const movieRoutes = express.Router();

// routes

movieRoutes.get('/',movieControllers.getMovies);
movieRoutes.get('/:id',movieControllers.getMoviesById);
movieRoutes.post('/',movieControllers.addMovie);
movieRoutes.put('/:id',movieControllers.updateMovie);
movieRoutes.delete('/:id',movieControllers.deleteMovie);

export default movieRoutes;

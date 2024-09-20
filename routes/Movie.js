import express from 'express';

import movieControllers from '../controllers/Movies.js';

const movieRoutes = express.Router();

// routes

movieRoutes.get('/',movieControllers.getCats);
// router.get('/:id',movieControllers.getCatById);
// router.post('/',movieControllers.addCat);
// router.put('/:id',movieControllers.updateCat);
// router.delete('/:id',movieControllers.deleteCat);

export default movieRoutes;

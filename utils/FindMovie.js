const FindMovie = (movies,id) => {
    return movies.find((movie)=> movie.id === id);
};
export default FindMovie;

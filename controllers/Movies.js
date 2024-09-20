// Sample data
const movies = [
    { id: 1, name: "Inception", genre: "Sci-Fi", year: 2010 },
    { id: 2, name: "The Godfather", genre: "Crime", year: 1972 },
    { id: 3, name: "The Dark Knight", genre: "Action", year: 2008 },
    { id: 4, name: "Pulp Fiction", genre: "Crime", year: 1994 },
    { id: 5, name: "The Shawshank Redemption", genre: "Drama", year: 1994 }
  ];

const movieControllers ={
    getMovies: (req,res) =>{ res.json(movies);},
    // getCatById: (req,res) =>{const cat = cats.find(c => c.id === parseInt(req.params.id));
    //     if (cat) {
    //       res.json(cat);
    //     } else {
    //       res.status(404).send('Cat not found');
    //     }
    // },
    // addCat: (req,res) => {
    //   const{name,age} = req.body;
    //   if(!name || !age)
    //     res.status(404).send('Please give name and id');
    //   else
    //   {
    //   const newCat = { id: cats.length + 1, name, age};
    //   cats.push(newCat);
    //   res.status(201).json(newCat);
    //  }
    // },
    // updateCat: (req,res)=>{
    //     const {id}=req.params;
        
    //     const{name,age} = req.body;
    //     const catExist = cats.find((cat)=>cat.id === parseInt(id));
    //    // console.log('Found Cat:', catExist);
    //     if(catExist)
    //     {
    //     if( name && age)
    //     {
    //       catExist.name = name;
    //       catExist.age = age;
    //       res.status(200).json(catExist);
    //       }
    //       else {
    //         res.status(400).send('Please give name and id');
    //       }
    //     }
    //     else
        
    //     res.status(404).send('Cat not found');
    //   },

    //   deleteCat: (req,res) => {
       
    //     const id = parseInt(req.params.id); // Convert id to number
    //     const initialLength = cats.length;
    //     cats = cats.filter((cat) => cat.id !== id);

    //     if (cats.length < initialLength) {
    //         return res.status(200).send('Cat deleted successfully');
    //     } else {
    //         return res.status(404).send('Cat not found');
    //     }       
      
    // }

  }
export default movieControllers;
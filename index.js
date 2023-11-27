const express = require('express');
const app = express()
const port = 8000;

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

  app.get("/", (req, res) => {
    res.send("Welcome to my favourite movie list");
  });

  const welcomeName = (req, res) => {
    res.send(`Welcome ${req.params.name}`);
  };
  
  app.get("/users/:name", welcomeName);

  const cocktails = [
    {
      id: 1,
      name: "Margarita",
    },
    {
      id: 2,
      name: "Mojito",
    },
    {
      id: 3,
      name: "Cuba Libre",
    },
  ];
  
  const getCocktails = (req, res) => {
    res.status(200).json(cocktails);
  };
  
  app.get("/api/cocktails", getCocktails);

  const movies = [
    {
      id: 1,
      title: "Citizen Kane",
      director: "Orson Wells",
      year: "1941",
      color: false,
      duration: 120,
    },
    {
      id: 2,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: "1972",
      color: true,
      duration: 180,
    },
    {
      id: 3,
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: "1994",
      color: true,
      duration: 180,
    },
  ];
  const getMovies = (req, res) => {
    res.status(200).json(movies)
  }

app.get("/api/movies", getMovies)

const idMovies = ( req,res) =>{
    let id = req.params.id
    if(id > movies.length){
        res.send("not found")
    }else{
       let movi = movies.find((element)=> element.id == id)
       res.send(movi).status(200).end()
    }
    
}

app.get("/api/movies/:id",idMovies)
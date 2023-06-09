const express = require("express");
const server = express();
const port = 8080;
const cors = require("cors");
const knex = require("knex")(
  require("./knexfile")[process.env.NODE_ENV || "development"]
);

server.use(cors());

server.get("/", (req, res) => {
  res.send("Server is up");
});

server.get("/movies", (req, res) => {
  knex("movie_list")
    .select("*")
    .then((movies) => {
      var movie_titles = movies.map((movie) => movie.title);
      res.json(movie_titles);
    })
    .catch((err) =>
      res
        .status(404)
        .json({ message: "Movies could not be found. Try again later." })
    );
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

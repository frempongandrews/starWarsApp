const PORT = require("../config").PORT;

var moviesJSON = require('../movies.json');

module.exports = function(app) {

    var movies = moviesJSON.movies;

    app.get('/', (req, res) => {
        res.render('Home', {
            title: "Star Wars Movies",
            movies: movies

        });
    });
    app.get('/episodes', function(req, res) {
        res.send("All episodes page");
    });

    app.get('/star-wars-episode/:episode_number', function(req, res) {
        var episode_number = req.params.episode_number;
        //console.log(episode_number);
        if (episode_number > 0 && episode_number <= 6) {
            var singleMovie = movies[episode_number - 1];
            var singleMovieInfo = {
                title: singleMovie.title,
                movies: movies,
                image: "/images/" + singleMovie.hero_image,
                poster: "/images/" + singleMovie.poster,
                description: singleMovie.description,
                singleMovie: singleMovie
            }
            res.render("movie-single", singleMovieInfo);
        } else {
            res.send("Not found");
        }

    });

    //if placed above, it would take precedence
    app.get('*', function(req, res) {
        res.send("Page not found")
    });

    app.listen(PORT, () => {
        console.log("listening on port " + PORT);
    });
};

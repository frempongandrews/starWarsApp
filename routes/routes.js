const PORT = require("../config").PORT;

var moviesJSON = require('../movies.json');

module.exports = function (app) {

    var movies = moviesJSON.movies;

    app.get('/', (req, res) => {
        res.render('Home', {
            title: "Star Wars Movies",
            movies: movies

        });
    });
    app.get('/episodes', function (req, res) {
        res.send("All episodes page");
    });

    app.get('/episodes/:episode_number', function (req, res) {
        var episode_number = req.params.episode_number;
        console.log(episode_number);
        res.send("Episode number: " + episode_number + " page")
    });

//if placed above, it would take precedence
    app.get('*', function (req, res) {
        res.send("Page not found")
    });

    app.listen(PORT, () => {
        console.log("listening on port " + PORT);
    });
};
var movie = [
    {
        title: "Titanic",
        watched: true,
        stars: 4.5,
    },
    {
        title: "Beauty and the beast",
        watched: true,
        stars: 5,
    },
    {
        title: "Birdcage",
        watched: false,
        stars: 5,
    },
]

movie.forEach(function(movies){
    var result = "You have ";
    if(movies.watched){
        result += "watched";
    }else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.stars + " stars";
    console.log(result);
})
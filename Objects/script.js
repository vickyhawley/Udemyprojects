var movies = [
    {
        title: "Lion King",
        hasWatched: true,
        rating: 4.5
    },
    {
        title: "Frozen",
        hasWatched: true,
        rating: 3.5
    },
    {
        title: "Avengers",
        hasWatched: false,
        rating: 4
    },
    {
        title: "Mary Poppins",
        hasWatched: false,
        rating: 3
    }
]

for (i=0; i < movies.length; i++) {
    if(movies.hasWatched === true) {
        var result = "You have watched \""
    }
    else{
        var result = "You have not seen \""
    }
    console.log(result);
}
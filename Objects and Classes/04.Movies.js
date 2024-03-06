function solve(input){
    const movies=[];
    input.forEach((command) => {
        if(command.includes("addMovie")){
            const splitted=command.split("addMovie ").filter(n=>n);
            movies.push({
                name: splitted[0],
            });
        }
        else if(command.includes("directedBy")){
            const splitted=command.split(" directedBy ");
            const movieName=splitted[0];
            const movieDirector=splitted[1];
            const movie=movies.find(m=>m.name===movieName);
            if(movie){
                movie.director=movieDirector;
            }
        }
        else if(command.includes("onDate")){
            const splitted=command.split(" onDate ");
            const movieName=splitted[0];
            const movieDate=splitted[1];
            const movie=movies.find(m=>m.name===movieName);
            if(movie){
                movie.date=movieDate;
            }
        }
    })
    movies.forEach((movie)=>{
        if(movie.name && movie.date && movie.director){
            console.log(JSON.stringify(movie));
        }
    });
}

solve(
    [
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
        ]
    );
const API = "https://api.themoviedb.org/3";

export function get(path) {

    return fetch(API + path, {
            headers: {
                Authorization: 
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGI5NzdmYzMyYzMyMGMxNzZlNTViN2Q3NTc4NzQzZiIsInN1YiI6IjYxOWFjZDJjYmMyY2IzMDA5MGQxMDkwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hZFjUGojH1sZddng3qdhdgV6nhHro6Ym-Nq8cI1TCR0",
                "Content-Type": "application/json;charset=utf-8",
            },
        })
            .then((result) => result.json())
};
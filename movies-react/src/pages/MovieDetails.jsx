import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";


export function MovieDetails() {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);


    useEffect(() => {
        setIsLoading(true);

        get("/movie/" + movieId).then(data => {
            setMovie(data);
            setIsLoading(false);
        });
    }, [movieId]);

    if (isLoading) {
        return <Spinner />;
    };

    if (!movie) {
        return null;
    };


    const imageUrl = getMovieImg(movie.poster_path, 500)
    return <div className={ styles.detailsContainer } > 
        <img  
            src={ imageUrl } 
            alt={ movie.title } 
            className={ `${styles.col} ${styles.movieImage}` } />
        <div className={ `${styles.col} ${styles.movieDetails}` } >
            <p className={styles.firstItem} > <strong> Title: </strong> { movie.title } </p>
            <p> <strong> Genres: </strong> 
                { movie.genres.map(genre => genre.name).join(", ") } 
            </p>
            <p> <strong> Description: </strong> { movie.overview } </p>
        </div>
    </div>
 }
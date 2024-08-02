import { ReactElement } from "react";
import { IMovieData } from "../App";
import "../../css/MovieCard.css";

interface IMovieCardProps {
	movieData: IMovieData;
	onDeleteClicked: () => void;
}

export function MovieCard(prop: IMovieCardProps): ReactElement {
	return (
		<article className="movie-card" onClick={prop.onDeleteClicked}>
			<h1 className="movie-title">{prop.movieData.title}</h1>
			<h2 className="movie-rating">{prop.movieData.rating}</h2>
			<h2 className="movie-genre">{prop.movieData.genre}</h2>
			<p className="movie-description">{prop.movieData.description}</p>
		</article>
	);
}
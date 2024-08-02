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
			<div className="row-container">
				<p className="heading">Title:</p>
				<h1 className="movie-title">{prop.movieData.title}</h1>
			</div>
			<div className="row-container">
				<p className="heading">Rating:</p>
				<h2 className="movie-rating">{prop.movieData.rating}</h2>
			</div>
			<div className="row-container">
				<p className="heading">Genre:</p>
				<h2 className="movie-genre">{prop.movieData.genre}</h2>
			</div>
			<div className="row-container">
				<p className="heading">Description:</p>
				<p className="movie-description">{prop.movieData.description}</p>
			</div>
		</article>
	);
}
import { ReactElement } from "react";
import { MovieCard } from "./MovieCard";
import { IMovieData } from "../App";

interface IMovieListProps {
	movieData: IMovieData[];
	onDeleteClicked: (index: number) => void;
}

export function MovieList(prop: IMovieListProps): ReactElement {
	return (
		<div className="movie-list">
			{prop.movieData.map((movie: IMovieData, index: number) => (
				<MovieCard key={index} movieData={movie} onDeleteClicked={() => prop.onDeleteClicked(index)} />
			))}
		</div>
	);
}
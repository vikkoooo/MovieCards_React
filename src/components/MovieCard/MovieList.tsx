import { ReactElement } from "react";
import { MovieCard } from "./MovieCard";
import { MovieData } from "../App";

interface MovieListProps {
	movieData: MovieData[];
	onDeleteClicked: (index: number) => void;
}

export function MovieList(prop: MovieListProps): ReactElement {
	return (
		<div className="movie-list">
			{prop.movieData.map((movie: MovieData, index: number) => (
				<MovieCard key={index} movieData={movie} onDeleteClicked={() => prop.onDeleteClicked(index)} />
			))}
		</div>
	);
}
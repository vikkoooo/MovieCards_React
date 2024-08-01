import { ReactElement } from "react";
import { MovieCard } from "./MovieCard";
import { MovieData } from "../App";

interface MovieListProps {
	movieData: MovieData[];
}

export function MovieList(prop: MovieListProps): ReactElement {
	return (
		<div className="movie-list">
			{prop.movieData.map((movie: MovieData, index: number) => (
				<MovieCard key={index} movieData={movie} />
			))}
		</div>
	);
}
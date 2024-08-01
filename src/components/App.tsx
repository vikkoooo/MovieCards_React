import { useState } from "react";
import { AddMovie } from "./AddMovie/AddMovie";
import { MovieCard } from "./MovieCard/MovieCard";

export interface MovieData {
	title: string;
	rating: number;
	genre: string;
	description: string;
}

export function App() {
	const [movieData, setMovieData] = useState<MovieData[]>([]);

	const handleAddMovie = (data: MovieData) => {
		setMovieData(movieData.concat(data));
	};

	return (
		<div className="app">
			<AddMovie onAddClicked={handleAddMovie} />
			{movieData.map((movie: MovieData, index: number) =>
				(<MovieCard key={index} movieData={movie} />))}
		</div>
	);
}
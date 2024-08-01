import { useState } from "react";
import { AddMovie } from "./AddMovie/AddMovie";
import { MovieList } from "./MovieCard/MovieList";

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
			<MovieList movieData={movieData} />
		</div>
	);
}
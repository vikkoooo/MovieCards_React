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

	const handleAddMovie = (data: MovieData): void => {
		setMovieData(movieData.concat(data));
	};

	const handleClearMovie = (): void => setMovieData([]);

	return (
		<div className="app">
			<AddMovie onAddClicked={handleAddMovie} onClearClicked={handleClearMovie} />
			<MovieList movieData={movieData} />
		</div>
	);
}
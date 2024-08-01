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

	const handleDeleteMovie = (index: number): void => {
		const movieDataCopy = movieData.slice(); // copy original array
		movieDataCopy.splice(index, 1); // remove the index clicked
		setMovieData(movieDataCopy); // set the data
	};

	return (
		<div className="app">
			<AddMovie onAddClicked={handleAddMovie} onClearClicked={handleClearMovie} />
			<MovieList movieData={movieData} onDeleteClicked={handleDeleteMovie} />
		</div>
	);
}

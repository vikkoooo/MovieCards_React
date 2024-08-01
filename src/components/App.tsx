import { AddMovie } from "./AddMovie/AddMovie";
import { MovieCard } from "./MovieCard/MovieCard";

export function App() {
	return (
		<div className="app">
			<AddMovie />
			<MovieCard />
		</div>
	);
}
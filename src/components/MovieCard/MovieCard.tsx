import { ReactElement } from "react";

interface MovieCardProps {
	title: string;
	rating: number;
	genre: string;
	description: string;
}

export function MovieCard(prop: MovieCardProps): ReactElement {
	return (
		<article className="movie-card">
			<h1 className="movie-title">{prop.title}</h1>
			<h2 className="movie-rating">{prop.rating}</h2>
			<h2 className="movie-genre">{prop.genre}</h2>
			<p className="movie-description">{prop.description}</p>
		</article>
	);
}
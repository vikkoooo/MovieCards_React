import { FormEvent, ReactElement, useState } from "react";
import { Title } from "./Title";
import { Rating } from "./Rating";
import { Genre } from "./Genre";
import { Description } from "./Description";
import { MovieData } from "../App";
import "../../css/AddMovie.css";

interface AddMovieProps {
	onAddClicked: (data: MovieData) => void;
}

export function AddMovie(prop: AddMovieProps): ReactElement {
	const [title, setTitle] = useState<string>("");
	const [rating, setRating] = useState<number>(3);
	const [genre, setGenre] = useState<string>("Action");
	const [description, setDescription] = useState<string>("");

	function clearClicked(): void {
		setTitle("");
		setRating(3);
		setGenre("Action");
		setDescription("");
	};

	function formSubmitted(event: FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		addClicked();
	};

	function addClicked(): void {
		const data: MovieData = {
			title,
			rating,
			genre,
			description
		};
		prop.onAddClicked(data); // pass the data object into the function we have gotten from a higher level
	};

	return (
		<form className="add-movie" onSubmit={formSubmitted}>
			<Title inputValue={title} setInputValue={setTitle} />
			<Rating inputValue={rating} setInputValue={setRating} />
			<Genre inputValue={genre} setInputValue={setGenre} />
			<Description inputValue={description} setInputValue={setDescription} />
			<div className="button-container">
				<button type="reset" className="clear-button" onClick={clearClicked}>Clear</button>
				<button type="submit" className="add-button">Add</button>
			</div>
		</form>
	);
}
import { FormEventHandler, ReactElement, useState } from "react";
import { Title } from "./Title";
import { Rating } from "./Rating";
import { Genre } from "./Genre";
import { Description } from "./Description";

import "../../css/AddMovie.css";

export function AddMovie(): ReactElement {
	const [title, setTitle] = useState<string>("");
	const [rating, setRating] = useState<number>(3);
	const [genre, setGenre] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	function clearClicked() { };

	function addClicked() {
		console.log(`Title: ${title}`);
		console.log(`Rating: ${rating}`);
		console.log(`Genre: ${genre}`);
		console.log(`Description: ${description}`);
	};

	const formSubmitted: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
	}

	return (
		<form className="add-movie" onSubmit={formSubmitted}>
			<Title inputValue={title} setInputValue={setTitle} />
			<Rating inputValue={rating} setInputValue={setRating} />
			<Genre inputValue={genre} setInputValue={setGenre} />
			<Description inputValue={description} setInputValue={setDescription} />
			<div className="button-container">
				<button className="clear-button" onClick={clearClicked}>Clear</button>
				<button type="submit" className="add-button" onClick={addClicked}>Add</button>
			</div>
		</form>
	);
}
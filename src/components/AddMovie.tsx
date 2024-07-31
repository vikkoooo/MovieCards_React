import { ReactElement } from "react";
import { Title } from "./Title";
import { Rating } from "./Rating";
import { Genre } from "./Genre";
import { Description } from "./Description";
import "../css/AddMovie.css";


export function AddMovie(): ReactElement {
	return (
		<main className="container">
			<Title />
			<Rating />
			<Genre />
			<Description />
			<div className="button-container">
				<button>Clear</button>
				<button>Add</button>
			</div>
		</main>
	);
}
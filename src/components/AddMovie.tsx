import { ReactElement } from "react";
import { Title } from "./Title";
import { Rating } from "./Rating";
import { Genre } from "./Genre";
import { Description } from "./Description";

export function AddMovie(): ReactElement {
	return (
		<main className="container">
			<Title />
			<Rating />
			<Genre />
			<Description />
			<button>Clear</button>
			<button>Add</button>
		</main>
	);
}
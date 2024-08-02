import { ChangeEventHandler, ReactElement } from "react";

interface IGenreProps {
	inputValue: string;
	setInputValue: (value: string) => void;
}

export function Genre(prop: IGenreProps): ReactElement {
	const options: string[] = [
		"Action",
		"Drama",
		"Comedy",
		"Thriller"
	];

	const handleOnChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		prop.setInputValue(event.target.value);
	};

	return (
		<div className="genre">
			<p>Genre</p>
			<select className="genre-field" value={prop.inputValue} onChange={handleOnChange}>
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))};
			</select>
		</div>
	);
}
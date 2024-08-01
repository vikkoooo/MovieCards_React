import { ChangeEventHandler, ReactElement, useState } from "react";

export function Genre(): ReactElement {
	const options = [
		"Action",
		"Drama",
		"Comedy",
		"Thriller"
	];

	const [option, setOption] = useState<string>("");

	const handleOnChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		setOption(event.target.value);
		console.log(`event.target.value: ${event.target.value}`);
	};

	return (
		<div className="genre">
			<p>Genre</p>
			<select className="genre-field" value={option} onChange={handleOnChange}>
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))};
			</select>
		</div>
	);
}
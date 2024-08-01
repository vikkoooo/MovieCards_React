import { ChangeEventHandler, ReactElement, useState } from "react";

export function Title(): ReactElement {
	const [inputValue, setInputValue] = useState<string>("");

	const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setInputValue(event.target.value);
		console.log(`event.target.value: ${event.target.value}`);
	};

	return (
		<div className="title">
			<p>Title</p>
			<input type="text" className="title-field" onChange={handleOnChange} value={inputValue} />
		</div>
	);
}
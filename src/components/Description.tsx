import { ChangeEventHandler, ReactElement, useState } from "react";

export function Description(): ReactElement {
	const [inputValue, setInputValue] = useState<string>("");

	const handleOnChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
		setInputValue(event.target.value);
		console.log(`event.target.value: ${event.target.value}`);
	};

	return (
		<div className="description">
			<p>Description</p>
			<textarea className="description-field" onChange={handleOnChange} value={inputValue} />
		</div>
	);
}
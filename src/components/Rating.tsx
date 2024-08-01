import { ChangeEventHandler, ReactElement, useState } from "react";

export function Rating(): ReactElement {
	const [inputValue, setInputValue] = useState<number>(3);

	const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setInputValue(parseInt(event.target.value));
		console.log(`event.target.value: ${event.target.value}`);
	};

	return (
		<div className="rating">
			<p>Rating</p>
			<input type="range" className="rating-field" min="1" max="5" onChange={handleOnChange} value={inputValue} />
			<span>
				{inputValue}
			</span>
		</div>
	);
}
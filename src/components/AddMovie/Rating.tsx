import { ChangeEventHandler, ReactElement } from "react";

interface IRatingProps {
	inputValue: number;
	setInputValue: (value: number) => void;
}

export function Rating(prop: IRatingProps): ReactElement {
	const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		prop.setInputValue(parseInt(event.target.value));
	};

	return (
		<div className="rating">
			<p>Rating</p>
			<input type="range" className="rating-field" min="1" max="5" onChange={handleOnChange} value={prop.inputValue} />
			<span>
				{prop.inputValue}
			</span>
		</div>
	);
}
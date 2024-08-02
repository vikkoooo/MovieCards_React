import { ChangeEventHandler, ReactElement } from "react";

interface IDescriptionProps {
	inputValue: string;
	setInputValue: (value: string) => void;
}

export function Description(prop: IDescriptionProps): ReactElement {
	const handleOnChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
		prop.setInputValue(event.target.value);
	};

	return (
		<div className="description">
			<p>Description</p>
			<textarea className="description-field" onChange={handleOnChange} value={prop.inputValue} />
		</div>
	);
}
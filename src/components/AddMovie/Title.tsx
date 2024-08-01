import { ChangeEventHandler, ReactElement } from "react";

interface TitleProps {
	inputValue: string;
	setInputValue: (value: string) => void;
}

export function Title(prop: TitleProps): ReactElement {
	const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		prop.setInputValue(event.target.value);
	};

	return (
		<div className="title">
			<p>Title</p>
			<input type="text" className="title-field" onChange={handleOnChange} value={prop.inputValue} />
		</div>
	);
}
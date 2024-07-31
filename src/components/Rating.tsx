import { ReactElement } from "react";

export function Rating(): ReactElement {
	return (
		<div className="rating">
			<p>Rating</p>
			<input type="range" />
		</div>
	);
}
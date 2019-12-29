import React from 'react';

import { useGlobalState, useGlobalDispatch } from "../Context/state";
import { prepareUserAction } from "../Context/user.actions";

export const Family: React.FC = () => {
    const state = useGlobalState();
	const dispatch = useGlobalDispatch();

	function handleChangeState(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();

		dispatch(
			prepareUserAction({
				name: "Ali",
				family: "Torki",
			}),
		);
	}

	return (
		<div>
			My name is {state.name} and surename is {state.family}
			<button onClick={e => handleChangeState(e)}>Change State</button>
		</div>
	);
} 
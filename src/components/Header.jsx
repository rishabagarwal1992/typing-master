import { resetTest } from "../helpers/resetTest";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setTime } from "../store/actions";
import "../styles/Header.scss";


const options= {
	time: [60, 180]
};

export default function Header() {
	const { timerId, timeLimit} = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		const time = parseInt(localStorage.getItem("time") || "60", 10);
		dispatch(setTime(time));
	}, [dispatch]);

	// Set Time
	useEffect(() => {
		if (timeLimit !== 0) {
			document
				.querySelector(`button[value="${timeLimit}"]`)
				?.classList.add("selected");

			dispatch(setTime(timeLimit));
			localStorage.setItem("time", `${timeLimit}`);
		}
	}, [dispatch, timeLimit]);

	const handleOptions = ({ target }) => {
		if (target instanceof HTMLButtonElement && target.dataset.option) {
			target.parentElement && target.parentElement.childNodes.forEach((el) => {
				if (el instanceof HTMLButtonElement)
					el.classList.remove("selected");
			});
			switch (target.dataset.option) {
				case "time":
					dispatch(setTime(+target.value));
					resetTest();
					break;
				default:
					break;
			}
			target.blur();
		}
	};

	return (
		<header className={timerId ? "hidden" : undefined}>
			<a href="/" className="brand">
				Typing Master
			</a>
			<div className="buttons">
				{Object.entries(options).map(([option, choices]) => (
					<div key={option} className={option}>
						{option}:
						{choices.map((choice) => (
							<button
								className="mini"
								key={choice}
								data-option={option}
								value={choice}
								onClick={(e) => handleOptions(e)}>
								{choice}
							</button>
						))}
					</div>
				))}
			</div>
		</header>
	);
}

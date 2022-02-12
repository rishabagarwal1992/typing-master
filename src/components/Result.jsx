import { useSelector } from "react-redux";
import "../styles/Result.scss";

export default function Result() {
	const { wordList, typedHistory, timeLimit } = useSelector(
		(state) => state
	);
	//let correctChars = 0;
	const result = typedHistory.map(
		(typedWord, idx) => typedWord === wordList[idx]
	);
	//console.log(result);
	result.reduce((val, r, idx) => {
		if (r) val += wordList[idx].length;
		return val;
	}, 0);
	//console.log(correctChars);
	//console.log(spaces);
	const TotalCorrectWords  = result.filter((x) => x).length;
	const TotalIncorrectWords = result.filter((x) => !x).length;
	const TotalScore = (TotalCorrectWords * 10) - (TotalIncorrectWords * 5);
	const wpm = Math.floor(TotalCorrectWords * 60 / timeLimit);

	return (
		<div className="result">
			<table>
				<tbody>
					<tr>
						<td colSpan={2} align="center">
							<h1>{Math.round(wpm) + " wpm"}</h1>
						</td>
					</tr>
					<tr>
						<th>Total Score</th>
						<td>{TotalScore}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

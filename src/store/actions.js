export const SET_WORD = "SETWORD";
export const SET_CHAR = "SETCHAR";
export const TIMER_DECREMENT = "TIMERDECREMENT";
export const APPEND_TYPED_HISTORY = "APPENDTYPEDHISTORY";
export const TIMER_SET = "TIMERSET";
export const TIMER_RESET = "TIMERRESET";
export const TIMERID_SET = "TIMERIDSET";
export const PREV_WORD = "PREVWORD";
export const SET_WORDLIST = "SETWORDLIST";
export const SET_TIME = "SETTIME";

export const timerDecrement = () => ({ type: TIMER_DECREMENT });
export const timerSet = (payload) => ({ type: TIMER_SET, payload });
export const setTimerId = (payload) => ({
	type: TIMERID_SET,
	payload,
});
export const setWord = (payload) => ({ type: SET_WORD, payload });
export const setChar = (payload) => ({ type: SET_CHAR, payload });
export const setTypedWord = (payload) => ({ type: SET_CHAR, payload });
export const resetTimer = () => ({ type: TIMER_RESET });
export const appendTypedHistory = () => ({
	type: APPEND_TYPED_HISTORY,
});
export const backtrackWord = (payload) => ({
	type: PREV_WORD,
	payload,
});
export const setWordList = (payload) => ({
	type: SET_WORDLIST,
	payload,
});

export const setTime = (payload) => ({ type: SET_TIME, payload });

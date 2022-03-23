import { combineEpics } from "redux-observable";
import weatherEpic from "./weatherEpic";

const rootEpic = combineEpics<any>(
	...weatherEpic,
);

export default rootEpic;
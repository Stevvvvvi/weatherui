import { combineEpics, Epic } from "redux-observable";
import { RootActionType } from "../actions";
import { RootStateType } from "../reducers";
import weatherEpic from "./weatherEpic";

export type RootEpic = Epic<RootActionType, RootActionType, RootStateType>;

const rootEpic = combineEpics(
	...weatherEpic,
);

export default rootEpic;
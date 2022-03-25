import { Action, applyMiddleware, createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import thunk from "redux-thunk";
import rootEpic from "../epics";
import { RootStateType } from "../reducers";
import rootReducer from "../reducers";
import { RootActionType } from "../actions";

const epicMiddleware = createEpicMiddleware<
  RootActionType,
  RootActionType,
  RootStateType
>();

const middlewares = [epicMiddleware];

const storeFactory = () =>
	createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(...middlewares))
	);

const store = storeFactory();

epicMiddleware.run(rootEpic);


export default store;
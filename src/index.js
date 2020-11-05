import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
import logger from "redux-logger";
import axios from "axios";



function* watcherSaga() {

}


const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga);




ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("react-root")
);

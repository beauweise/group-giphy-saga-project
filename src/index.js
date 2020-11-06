import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
import logger from "redux-logger";
import axios from "axios";



const reducer = (state = [], action) => {
  console.log('in Reducer', state, action);

  if (action.type === 'ADD_GIPHY') {
    return action.payload.data;
  }
  return state;
}





function* watcherSaga() {
  yield takeEvery('SET_SEARCH', searchFunction)
}

function* searchFunction(action) {
  try {
    const giphyResponse = yield axios.post('/', action.payload)
    yield put({ type: 'ADD_GIPHY', payload: giphyResponse.data })
  } catch (error) {
    console.log('error', error)
  }
}


const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
    reducer,
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

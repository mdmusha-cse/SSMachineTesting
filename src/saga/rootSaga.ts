import {all} from 'redux-saga/effects';
import {
  watchAuthRequest
} from './AuthSaga';

function* rootSaga() {
  yield all([
    watchAuthRequest()
  ]);
}

export default rootSaga;
import { put, call, fork, takeLatest, select, all } from 'redux-saga/effects';

import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILURE,
} from '../action/TypeConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function* authAction(action: any) {
    console.log('Action -=-=-');
    console.log(action);
    try {
        if (action.loginData.email == 'demo@yopmail.com' && action.loginData.password == 'demo@123') {
            yield call(AsyncStorage.setItem, 'user_credentials', JSON.stringify(
                { email: action.loginData.email, password: action.loginData.password, name: 'Demo', id: 100 }
            ));

            yield put({
                type: AUTH_SUCCESS,
                data: {
                    data: { email: action.loginData.email, password: action.loginData.password, name: 'Demo', id: 100 },
                },
            });
        }
        else if (action.loginData.email == 'demo2@yopmail.com' && action.loginData.password == 'demo2@123') {
            yield call(AsyncStorage.setItem, 'user_credentials', JSON.stringify(
                { email: action.loginData.email, password: action.loginData.password, name: 'Demo2', id: 200 }
            ));

            yield put({
                type: AUTH_SUCCESS,
                data: {
                    data: { email: action.loginData.email, password: action.loginData.password, name: 'Demo2', id: 200 },
                },
            });
        }
        else
        {
            yield put({
                type: AUTH_FAILURE,
                error: 'error',
            });
        }
    } catch (error) {
        yield put({
            type: AUTH_FAILURE,
            error: error,
        });
    }
}

export function* watchAuthRequest() {
    yield takeLatest(AUTH_REQUEST, authAction);
}
import api from '../api';

import {takeLatest, put, call} from 'redux-saga/effects'

const LOAD_USERS = 'LOAD_USERS';
const LOAD_SUCCESS = 'LOAD_SUCCESS';
const LOAD_FAILURE = 'LOAD_FAILURE';
const LOAD_IMAGES = 'LOAD_IMAGES';
const LOAD_IMAGES_SUCCESS = 'LOAD_IMAGES_SUCCESS';
const LOAD_IMAGES_FAILURE = 'LOAD_IMAGES_FAILURE';

const initialState = {
  data: {
    userList: null,
    imageList: null
  },
  error: null,
  loading: false
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        error: null,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {...state.data, userList: action.data},
        error: null
      };
    case LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        data: null
      };
    case LOAD_IMAGES:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: {...state.data, imageList: action.data},
      };
    case LOAD_IMAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        data: null
      };
    default:
      return state;
  }
}

export function* fetchUsers(value) {
  const result = yield call(api.fetchNewUsers, value.name);
  if (result) {
    yield put({type: LOAD_SUCCESS, data: result.results});
  } else {
    yield put({type: LOAD_FAILURE, error: 'Something went wrong'});
  }
}

export function* fetchImages(value) {
  const result = yield call(api.fetchAllImages, value.name);
  if (result) {
    yield put({type: LOAD_IMAGES_SUCCESS, data: result});
  } else {
    yield put({type: LOAD_IMAGES_FAILURE, error: 'Something went wrong'});
  }
}

export function* watchRequest() {
  yield takeLatest(LOAD_USERS, fetchUsers);
  yield takeLatest(LOAD_IMAGES, fetchImages);
}

export function onUsersFetch(name) {
  return {
    type: LOAD_USERS,
    name
  };
}

export function onImagesFetch(name) {
  return {
    type: LOAD_IMAGES,
    name
  };
}

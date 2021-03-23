import * as ACTIONS from './home.actionTypes';
import { songsListService } from './home.service';


export function getData() {
    const apiUrl = 'https://itunes.apple.com/search?term=Michael+jackson';
    songsListService(apiUrl);
    return {
      type: ACTIONS.GET_SONGS_LIST,
    };
}

export function apiSuccess(apiResponse){
  return {
    type: ACTIONS.GET_SONGS_LIST_SUCCESS,
    payload: apiResponse
  };
}

export function apiFailure(apiResponse){
  return {
    type: ACTIONS.GET_SONGS_LIST_FAILURE,
    payload:apiResponse
  };
}

export function resetReducer(){
  return {
    type: ACTIONS.RESET_REDUCER,
  };
}
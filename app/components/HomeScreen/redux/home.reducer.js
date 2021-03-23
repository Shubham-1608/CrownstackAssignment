import * as ACTIONS from './home.actionTypes';

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  songsListCount: 0,
  songsList: [],
  error: {},
};

export default function HomeReducer(state = initialState, actions) {
  switch (actions.type) {
    case ACTIONS.GET_SONGS_LIST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        songsList: [],
        error: {},
      };
      case ACTIONS.GET_SONGS_LIST_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          songsListCount: actions.payload.resultCount,
          songsList: actions.payload.results,
          error: null,
        };
        case ACTIONS.GET_SONGS_LIST_FAILURE:
          return {
            ...state,
            isLoading: false,
            isSuccess: false,
            isError: true,
            songsList: [],
            error: actions.payload,
          };      
    case ACTIONS.RESET_REDUCER:
      return initialState;
    default:
      return state;
  }
}

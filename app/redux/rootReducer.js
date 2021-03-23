import { combineReducers } from 'redux';
import homeReducer from '../../app/components/HomeScreen/redux/home.reducer';
// import { songsListReducer } from '../../app/components/SongsList';
// import { songDetailReducer } from '../../app/components/SongDetail';
// import { loginReducer } from '../../app/Login';
// import { dashboardReducer } from '../../app/Dashboard';


const appReducer = combineReducers({
  homeReducer,
  // songsListReducer,
  // songDetailReducer,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}


export default rootReducer;

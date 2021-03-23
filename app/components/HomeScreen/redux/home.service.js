import { apiFailure, apiSuccess } from "./home.actions";
import store from '../../../redux/store';


export function songsListService(url) {
        fetch(
            url,
            {
                method: 'GET',
                headers: [],
            },
        ).then((response) => {
            return response.json();
        })
            .then((responseJson) => {
                const {dispatch} = store;
                console.warn('API Success', responseJson);
                dispatch(apiSuccess(responseJson));
            })
            .catch((error) => {
                console.log('API Failure', error);
                dispatch(apiFailure(error));
            })
}

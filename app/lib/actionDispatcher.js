import getErrorMessage from './getErrorMessage';
// import console = require('console');

function actionDispatcher(
  serviceMethod,
  actionTypeSuccess,
  actionTypeFailure,
  actionTypeInProgress,
  extra,
  callback,
) {
  let headers = null;
  // debugger;
  return (dispatch) => {
    dispatch({
      type: actionTypeInProgress,
      extra: extra || undefined,
    });
    serviceMethod()
      .then((response) => {
        console.log("main response----------------------", response);

        headers = response.headers;
        return response.json();
      })
      .then((responseJson) => {
        console.log("responsse Json --------", responseJson);

        if (responseJson.success) {
          if (actionTypeSuccess instanceof Array) {
            actionTypeSuccess.forEach((value) => {
              dispatch({
                type: value,
                headers,
                payload: responseJson,
                extra: extra || undefined,
                message: getErrorMessage(responseJson.message),
              });
            });
            if (callback) callback({ isSuccess: true });
          } else {
            dispatch({
              type: actionTypeSuccess,
              headers,
              payload: responseJson,
              extra: extra || undefined,
              message: getErrorMessage(responseJson.message),
            });
            if (callback) callback({ isSuccess: true });
          }
        } else if (actionTypeFailure instanceof Array) {
          actionTypeFailure.forEach((value) => {
            dispatch({
              type: value,
              error: responseJson.httpCode,
              message: getErrorMessage(responseJson.message),
            });
          });
          if (callback) callback({ isSuccess: false });
        } else {
          dispatch({
            type: actionTypeFailure,
            error: responseJson.httpCode,
            message: getErrorMessage(responseJson.message),
          });
          if (callback) callback({ isSuccess: false });
        }
      })
      .catch((error) => {
        console.log("error---------------------", error);

        const errorMessage = getErrorMessage(error.message);
        dispatch({
          type: actionTypeFailure,
          error: error.httpcode,
          message: errorMessage,
        });
      });
  };
}

export default actionDispatcher;

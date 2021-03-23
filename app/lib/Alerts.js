import { Alert } from 'react-native';
import Snackbar from 'react-native-snackbar';

export const showAlert = (title, message, actionButtons) => {
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_SHORT,
  });
};

export const showNativeAlert = (title, message, actionButtons) => {
  Alert.alert(title, message, actionButtons);
};

export const showSnackbar = (title, actionButton) => {
  Snackbar.show({
    title,
    duration: Snackbar.LENGTH_LONG,
    action: actionButton,
  });
};

export const showHoldAlert = (title, message, actionButtons) => {
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_LONG,
  });
};

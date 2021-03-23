import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../app/components/HomeScreen';
import SongsList from '../app/components/SongsList';
import SongDetail from '../app/components/SongDetail';
import { THEME_COLOUR } from './lib/constants';

const MainStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <TouchableOpacity
            style={styles.headerLeftBack}
            onPress={() => navigation.goBack()}>
            {/* <Image source={Images.backbtn} /> */}
          </TouchableOpacity>
        ),
      }),
    },
    SongsList: {
      screen: SongsList,
      navigationOptions: ({ navigation }) => ({
        headerLeft:null,
        title:'SONGS',
      }),
    },
    SongDetail: {
      screen: SongDetail,
      navigationOptions: ({ navigation }) => ({
        title:'Song Detail',
      }),
    },
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: THEME_COLOUR
      },
      headerTitleContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 16 : 0,
      },
    },
  },
);

const AppContainer = createAppContainer(MainStack);
const styles = StyleSheet.create({
  headerLeftBack: {
    padding: 16,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 16 : 0,
  },
});

export default AppContainer;

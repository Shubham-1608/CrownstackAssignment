import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    SafeAreaView,
    StatusBar,
} from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import { getData, resetReducer } from './redux/home.actions';
import { StackActions } from 'react-navigation';
import { THEME_COLOUR } from '../../lib/constants';
import styles from './styles';

class Home extends Component {

    componentDidMount() {
        this.props.getList();
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.isSuccess && this.props.isSuccess && this.props.songsList) {
            const routesList = [
                {
                    routeName: 'SongsList',
                    params: {},
                },
            ]
            this.resetNavigationStack(routesList, this.props.navigation);
        }
    }

    resetNavigationStack = (controllerList, navigation) => {
        let actionList = [];
        controllerList.forEach(controller => {
            actionList.push(
                StackActions.push({
                    routeName: controller['routeName'],
                    params: controller['params'],
                }),
            );
        });

        const resetAction = StackActions.reset({
            index: actionList.length - 1,
            actions: actionList,
            key: null,
        });
        navigation.dispatch(resetAction);
    }

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.flex1} >
                    {this.props.isLoaderVisible &&
                        <AnimatedLoader
                            style={styles.flex1}
                            visible={this.props.isLoaderVisible}
                            overlayColor={THEME_COLOUR}
                            animationStyle={styles.lottie}
                            speed={1}
                        />
                    }
                </SafeAreaView>
            </>
        );
    }
}

Home.propTypes = {
    isSuccess: PropTypes.bool,
    userData: PropTypes.object,
};

function mapStateToProps(state) {
    return {
        isSuccess: state.homeReducer.isSuccess,
        songsList: state.homeReducer.songsList,
        isLoaderVisible: state.homeReducer.isLoading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getList: bindActionCreators(getData, dispatch),
        resetReducer: bindActionCreators(resetReducer, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
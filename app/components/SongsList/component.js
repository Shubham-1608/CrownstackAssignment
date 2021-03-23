import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    SafeAreaView,
    View,
    StatusBar,
    FlatList,
} from 'react-native';
import styles from './styles';
import { SongItem } from '../../common';

class SongsList extends Component {
    constructor(props) {
        super(props);
    }


    navigateToSongDetail = (songData) => {
        this.props.navigation.navigate('SongDetail', { songData });
    }

    renderSongItem = (songData) => {
        return (
            <SongItem
                songData={songData}
                onItemClick={() => {
                    this.navigateToSongDetail(songData);
                }}
            />
        );
    }

    render() {
        const { songsList } = this.props;
        return (
            <View style={styles.flex1} >
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.flex1} >
                    <FlatList
                        style={styles.trackList}
                        keyExtractor={(item) => item.collectionId}
                        data={songsList}
                        renderItem={(data) => this.renderSongItem(data.item)}
                    />
                </SafeAreaView>
            </View>
        );
    }
}

SongsList.propTypes = {
    songsList: PropTypes.array,
};

function mapStateToProps(state) {
    return {
        songsList: state.homeReducer.songsList,
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
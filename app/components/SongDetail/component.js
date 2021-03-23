import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    Image,
    ScrollView,
} from 'react-native';
import { timeConversion } from '../../lib/commonFunctions';
import HTML from "react-native-render-html";
import styles from './styles';

class SongDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songData: props.navigation.state.params.songData,
        };
    }

    render() {
        const { songData: { artworkUrl100, artistName, collectionName, trackTimeMillis, trackName, primaryGenreName, description } } = this.state;
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.flex1} >
                    <ScrollView style={styles.scrollView}>
                        <View style={{ flex: 1, padding: 16 }}>
                            <Image style={styles.trackImage} source={{ uri: artworkUrl100 }} resizeMode='contain' />
                            <Text style={styles.trackName}>
                                {trackName && 'Title : ' + trackName}
                            </Text>
                            <Text style={styles.trackName}>
                                {collectionName && 'Collection : ' + collectionName}
                            </Text>
                            <Text style={styles.artistName}>
                                {artistName && 'Artist : ' + artistName}
                            </Text>
                            <Text style={styles.trackName}>
                                {trackTimeMillis && 'Duration : ' + timeConversion(trackTimeMillis)}
                            </Text>
                            <Text style={styles.trackName}>
                                {primaryGenreName && 'Genre : ' + primaryGenreName}
                            </Text>
                            {description &&
                                <>
                                    <Text style={styles.trackName}>
                                        Description :
                                    </Text>
                                    <HTML
                                        containerStyle={styles.htmlContainer}
                                        baseFontStyle={styles.htmlContainerFont}
                                        source={{ html: description }}
                                    />
                                </>
                            }
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
}

SongDetail.propTypes = {
    songsList: PropTypes.object,
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

export default connect(mapStateToProps, mapDispatchToProps)(SongDetail);
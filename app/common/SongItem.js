import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native';
import { timeConversion } from '../lib/commonFunctions';
import { THEME_COLOUR } from '../lib/constants';

export default class SongItem extends Component {
    render() {
        const {
            songData: { artworkUrl100, artistName, collectionName, trackTimeMillis },
            onItemClick,
        } = this.props;
        const timeString = timeConversion(trackTimeMillis);
        return (
            <TouchableOpacity onPress={onItemClick} style={styles.itemWrapperButton}>
                <Image style={styles.trackImage} source={{ uri: artworkUrl100 }} resizeMode='contain' />
                <View style={styles.detailsView}>
                    <Text style={styles.collectionName}>{collectionName}</Text>
                    <View style={styles.artistDurationWrapper}>
                        <Text style={styles.artistName} >{artistName}</Text>
                        <Text style={styles.trackDuration} >{timeString}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    itemWrapperButton: {
        backgroundColor: 'white',
        paddingVertical: 16,
        flexDirection: 'row',
        flex: 1,
        borderBottomColor: THEME_COLOUR,
        borderBottomWidth: .5
    },
    trackImage: {
        height: '100%',
        minHeight: 100,
        minWidth: 100,
        marginRight: 16
    },
    detailsView: {
        flex: 1,
        marginBottom: 8
    },
    collectionName: {
        color: THEME_COLOUR,
        marginTop: 16,
        flex: 1,
        fontWeight: '500'
    },
    artistDurationWrapper: {
        marginVertical: 16,
        marginRight: 8,
        flex: 1,
        flexDirection: 'row',
        alignContent: 'space-between'
    },
    artistName: {
        color: THEME_COLOUR,
        fontWeight: '700'
    },
    trackDuration: {
        marginLeft: 16,
        color: THEME_COLOUR,
        fontWeight: '400'
    },

});

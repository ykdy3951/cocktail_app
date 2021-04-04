import * as React from 'react';
import { View, Text } from 'react-native';

export default class ProfileBookmark extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>
                    Bookmark
                </Text>
            </View>
        )
    }
}

export { ProfileBookmark };
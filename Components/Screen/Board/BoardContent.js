import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

export default class BoardContent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tite: '',
            body: '',
            thumb: false
        }
    }
    render( ){

        return (
            <View>
                <Text>

                </Text>
            </View>
        );
    }
}
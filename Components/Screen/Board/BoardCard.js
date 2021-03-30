import * as React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
  
// height: (heart > 50) ? 300 : 150 * (1 + heart / 50) , width: 150, 

export default class BoardCard extends React.PureComponent {
    
    constructor(props) {
        super(props);
    }

    render() {
        const { front, back } = this.props;
        return (
            <View style={[styles.container, this.props.style]}>
                <Image source={{uri: back}} style={styles.image} />                
                <Image source={{uri: front}} style={styles.image} />                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined
    },
});
import * as React from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const DEVICE = {
    height: height > width ? height : width,
    width: height < width ? height : width,
}

export default class FloatingButton extends React.Component {
    constructor(props) {
        super(props);

        this.animation = new Animated.Value(0);
    }
    
    toggleMenu = () => {
        const toValue = this.open ? 0 : 1;

        Animated.spring(this.animation, {
            toValue : toValue,
            friction: 5,
            useNativeDriver: false,
        }).start();

        this.open = !this.open;
    };

    render() {
        const replyStyle = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -140]
                    })
                }
            ]
        };
        
        const addToCartStyle = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -80]
                    })
                }
            ]
        };

        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"]
                    })
                }
            ]
        };

        const opacity = this.animation.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0, 1]
        })

        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableWithoutFeedback onPress={() => this.props.callback(1)}>
                    <Animated.View style={[styles.button, styles.secondary, replyStyle, opacity]}>
                        <Entypo name="reply" size={20} color="#F02A4B" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.props.callback(2)}>
                    <Animated.View style={[styles.button, styles.secondary, addToCartStyle, opacity]}>
                        <Entypo name="shopping-cart" size={20} color="#F02A4B" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu, rotation]}>
                        <AntDesign name="plus" size={24} color="#FFF" />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
    },
    button: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#F02A4B',
        shadowOpacity: 0.3,
        shadowOffset: {height : 10},
        elevation: 8,
    },
    menu: {
        backgroundColor: '#F02A4B'
    },
    secondary: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: "#FFF",
    }
})
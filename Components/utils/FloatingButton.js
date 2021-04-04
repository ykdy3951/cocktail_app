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
                        outputRange: [0, -DEVICE["height"] * 0.185]
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
                        outputRange: [0, -DEVICE["height"] * 0.106]
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
        const { iconNames, color } = this.props;
        return (
            <View style={[styles.container, this.props.style]}>

                <TouchableWithoutFeedback onPress={() => this.props.callback(1)}>
                    <Animated.View style={[styles.button, styles.secondary, replyStyle, opacity, 
                        {   shadowColor: color, 
                            shadowRadius: 10, 
                            shadowOpacity: 0.3,
                            shadowOffset: {height : 10},
                            elevation: 8,
                        }
                    ]}>
                        <Entypo name={iconNames[0]} size={DEVICE["height"] * 0.0256} color={color} />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.props.callback(2)}>
                    <Animated.View style={[styles.button, styles.secondary, addToCartStyle, opacity, 
                        {   shadowColor: color, 
                            shadowRadius: 10, 
                            shadowOpacity: 0.3,
                            shadowOffset: {height : 10},
                            elevation: 8,
                        }
                    ]}>
                        <Entypo name={iconNames[1]} size={DEVICE["height"] * 0.0256} color={this.props.color} />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu, rotation, 
                        {   shadowColor: color, 
                            backgroundColor: color, 
                            shadowRadius: 10, 
                            shadowOpacity: 0.3,
                            shadowOffset: {height : 10},
                            elevation: 8,
                        }
                    ]}>                        
                        <AntDesign name="plus" size={DEVICE["height"] * 0.032} color="#FFF" />
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
        width: DEVICE["height"] * 0.08,
        height: DEVICE["height"] * 0.08,
        borderRadius: DEVICE["height"] * 0.04,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menu: {
        // backgroundColor: '#F02A4B'
    },
    secondary: {
        width: DEVICE["height"] * 0.064,
        height: DEVICE["height"] * 0.064,
        borderRadius: DEVICE["height"] * 0.032,
        backgroundColor: "#FFF",
    }
})
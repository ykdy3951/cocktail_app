import * as React from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Left, Body, Right } from 'native-base';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import ThemedListItem from 'react-native-elements/dist/list/ListItem';

const { height, width } = Dimensions.get("window");

const DEVICE = {
    height: (height < width) ? width : height,
    width: (width > height) ? height : width
};

export default class AnimatedText extends React.Component {
    constructor(props) {
        super(props);

        this.animation = new Animated.Value(0);
        this.state={show: false};
    }

    toggleText = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation, {
            toValue: toValue,
            friction: 5,
            useNativeDriver: false,
        }).start();

        this.open = !this.open;
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const { title, content } = this.props;
        
        const textStyle = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1]
                    })
                }
            ]
        };

        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "90deg"]
                    })
                }
            ]
        };

        return (
            <View style={[styles.container, this.props.style]}>
                <View style={styles.titleContainer}>
                    <Left style={{alignContent: "flex-end", justifyContent: "flex-end", alignItems: "flex-end"}}>
                        <TouchableWithoutFeedback onPress={this.toggleText}>
                            <Animated.View style={[styles.button, rotation]}>
                                <MaterialCommunityIcons name="arrow-right-drop-circle-outline" size={40} color="#FFF" />
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    </Left>                    
                    <Text style={[styles.titleText]}>
                        { title }
                    </Text>
                    <Right>

                    </Right>
                </View>
                {this.state.show ? 
                    <Animated.View style={[styles.content, textStyle]} >
                        <Text style={styles.contentText}>
                            { content }
                        </Text>
                    </Animated.View>
                :
                null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: '2%',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#F02A4B',
        shadowOpacity: 0.3,
        shadowOffset: {height : 10},
        elevation: 8,
    },
    content: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: '3%'
    },
    titleText: {
        fontSize: DEVICE["height"] * 0.04,
        color: "#FFF",
    },
    contentText: {
        fontSize: DEVICE["height"] * 0.032,
        color: "#FFF",
    }
})
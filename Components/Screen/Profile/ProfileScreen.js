import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, StatusBar, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Title, Thumbnail, Left, Right, Body, Item } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

const { height, width } = Dimensions.get("window");

const DEVICE = {
    height: (height < width) ? width : height,
    width: (width > height) ? height : width
};

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isUser: true,
            isAdmin: true,
            isChanWoong: true,
            ChanWoong: "Carry Machine",
            helpMe: "ChanWoong",

        }
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='#000000' />
                <View style={styles.titleContainer}>
                    <Title style={styles.title} >
                        Profile
                    </Title>
                </View>
                <LinearGradient 
                        colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.5)','rgba(0, 0, 0, 0)']}
                        style={{height: 10, backgroundColor: 'rgba(255, 255, 255, 0)'}}
                />
                <TouchableWithoutFeedback onPress={() => navigate("Profile ID")}>
                <View style={styles.idContainer}>
                    <Thumbnail>
                    </Thumbnail>
                    <Text style={styles.text}>
                        ID
                    </Text>
                </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigate("Profile Cart")}>
                <View style={styles.cartContainer}>
                    <Text style={styles.text}>
                        My Cart
                    </Text>
                    <View style={styles.contentContainer}>
                        <Text>
                            contents
                        </Text>
                    </View>
                </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigate("Profile Bookmark")}>
                <View style={styles.bookmarkContainer}>
                    <Text style={styles.text}>
                        My bookmark
                    </Text>
                    <View style={styles.contentContainer}>
                        <Text>
                            contents
                        </Text>
                    </View>
                </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigate("Profile My Feed")}>
                <View style={styles.myFeedContainer}>
                    <Text style={styles.text}>
                        My Feed
                    </Text>
                    <View style={styles.contentContainer}>
                        <Text>
                            contents
                        </Text>
                    </View>
                </View>    
                </TouchableWithoutFeedback>                
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    titleContainer: {
        height: '15%',
        paddingVertical : '3%', 
        alignItems: 'flex-start', 
        // paddingLeft: '3%',
    },
    title: {
        // fontFamily: 'Flottflott',
        fontSize: height * 0.05, 
        color: 'white',
        textShadowColor: "pink",
        textShadowOffset: {
            width: -1,
            height: 1
        },
        shadowOpacity: 0.3,
        textShadowRadius: 10,
        
    },
    text: {
        fontSize: 30,
        padding: "5%",
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    idContainer: {
        flex: 1,
        backgroundColor: "orange",
    },
    cartContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "pink",
    },
    bookmarkContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "yellow",
    },
    myFeedContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "green",
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
  });
  
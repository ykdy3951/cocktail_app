import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, StatusBar, ScrollView } from 'react-native';
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
                <ScrollView>
                    <View style={styles.idContainer}>
                        <Item>
                            <Thumbnail>
                            </Thumbnail>
                            <Text style={styles.text}>
                                ID
                            </Text>
                        </Item>
                    
                    </View>
                    <LinearGradient 
                            colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.5)','rgba(0, 0, 0, 0)']}
                            style={{height: 10, width: '70%', alignSelf: 'center', backgroundColor: 'rgba(255, 255, 255, 0)'}}
                    />
                    <Text style={styles.text}>
                            CART
                    </Text>
                    <View style={styles.cartContainer}>
                        <View style={styles.contentContainer}>
                            <Text>
                                contents
                            </Text>
                        </View>
                    </View>
                    <LinearGradient 
                            colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.5)','rgba(0, 0, 0, 0)']}
                            style={{height: 10, width: '70%', alignSelf: 'center', backgroundColor: 'rgba(255, 255, 255, 0)'}}
                    />
                    <Text style={styles.text}>
                        BOOKMARK
                    </Text>
                    <View style={styles.bookmarkContainer}>
                        <View style={styles.contentContainer}>
                            <Text>
                                contents
                            </Text>
                        </View>
                    </View>
                    <LinearGradient 
                            colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.5)','rgba(0, 0, 0, 0)']}
                            style={{height: 10, width: '70%', alignSelf: 'center', backgroundColor: 'rgba(255, 255, 255, 0)'}}
                    />
                    <Text style={styles.text}>
                        MY FEED
                    </Text>
                    <View style={styles.myFeedContainer}>
                        <View style={styles.contentContainer}>
                            <Text>
                                contents
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                    
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    titleContainer: {
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
        width: '100%',
        backgroundColor: "orange",
    },
    cartContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "pink",
    },
    bookmarkContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "yellow",
    },
    myFeedContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "green",
    },
    contentContainer: {
        width: '70%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
  });
  
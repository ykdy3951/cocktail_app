import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, StatusBar, ScrollView, TouchableWithoutFeedback, Image } from 'react-native';
import { Title, Thumbnail, Left, Right, Body, Item } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';

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
                <View style={{flex: 1, backgroundColor: "white"}}>
                    <View style={{backgroundColor: "pink", alignContent: "center", alignItems: "center", justifyContent: "center", height: DEVICE["height"] * 0.33, width: "100%"}}>
                        <LinearGradient
                            colors={['#F9C2A7', '#FF4366']}
                            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                            style={{height: "100%", width: "100%", alignContent: "center", alignItems: "center", justifyContent: "center"}}
                        >                        
                            <Text style={{fontSize: DEVICE["height"] * 0.05, color: "white"}}>
                                Chanism
                            </Text>
                        </LinearGradient>
                        <View style={{
                            position: "absolute", bottom: -DEVICE["height"] * 0.1, overflow: "visible", backgroundColor: "transparent", width: DEVICE["height"] * 0.2, height: DEVICE["height"] * 0.2, borderRadius: DEVICE["height"] * 0.1, borderColor: "white", borderWidth: 10,
                            shadowColor: "red", 
                            shadowRadius: 5, 
                            shadowOpacity: 0.3,
                            shadowOffset: {height : 0},
                            elevation: 5,
                            }}>
                            <View style={{flex : 1}}>
                                <Image
                                    source={{uri: "https://png.clipart.me/istock/previews/9349/93493545-people-icon.jpg"}}
                                    style={{
                                        ...StyleSheet.absoluteFillObject,
                                        width: undefined,
                                        height: undefined,
                                        borderRadius: DEVICE["height"] * 0.1,
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{height: DEVICE["height"] * 0.1, margin: "1%"}}></View>
                    <View style={{flex: 1.3}}>
                        <View style={{flex: 1, borderBottomWidth: 2, marginHorizontal: "10%", flexDirection: "row"}}>
                            <View style={{flex: 1, alignContent: "center", alignItems: "center", justifyContent: "center"}}>
                                <Text style={{color: "#F02A4B", fontSize: DEVICE["height"] * 0.05, fontWeight: "bold"}}>
                                    1000
                                </Text>
                                <Text>
                                    Likes
                                </Text>
                            </View>
                            <View style={{flex: 1, alignContent: "center", alignItems: "center", justifyContent: "center"}}>
                                <Text style={{color: "#F02A4B", fontSize: DEVICE["height"] * 0.05, fontWeight: "bold"}}>
                                    1000
                                </Text>
                                <Text>
                                    Posts
                                </Text>
                            </View>
                            <View style={{flex: 1, alignContent: "center", alignItems: "center", justifyContent: "center"}}>
                                <Text style={{color: "#F02A4B", fontSize: DEVICE["height"] * 0.05, fontWeight: "bold"}}>
                                    1000
                                </Text>
                                <Text>
                                    Bookmarks
                                </Text>
                            </View>
                        </View>
                    </View> 
                    <View
                        style={{flex: 5}}
                    >
                        <View style={{flex: 1, marginVertical: "3%", backgroundColor:"#f5f5f5", alignContent: "center", alignItems: "center", justifyContent: "center", paddingVertical: "2%"}}>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            >
                                <TouchableWithoutFeedback onPress={() => navigate("Profile Cart")}>
                                    <View style={{height: "96%", width: DEVICE["width"] * 0.6, margin: 10, borderRadius: "20%", backgroundColor: "#a8dba8", paddingVertical: "3%", flexDirection: "row"}}>
                                        <View style={{flex: 1, alignItems: "center", alignContent: "center", justifyContent: "center", }}>
                                            <View style={{flex: 1, alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                                <View style={{height: DEVICE["height"] * 0.1, width: DEVICE["height"] * 0.1, borderRadius: DEVICE["height"] * 0.05, backgroundColor: "#f9f9f9", alignItems: "center", alignContent: "center", justifyContent: "center",}}>
                                                    <Entypo name={"shopping-cart"} size={"65%"} color={"#0080ff"}/>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{flex: 2, paddingRight: "7%"}}>
                                            <View style={{flex: 1, backgroundColor: "#f9f9f9", padding: "4%"}}>
                                                <View style={{flex: 1, alignItems: "center", alignContent: "center", justifyContent: "center", borderBottomWidth: 2}}>
                                                    <Text style={{fontSize: DEVICE["height"] * 0.03, fontWeight: "bold"}}>Shopping Cart</Text>
                                                </View>
                                                <View style={{flex: 1.5, marginTop: "2%"}}>
                                                    <Text>저장한 재료들을 확인할 수 있습니다.</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={() => navigate("Profile Bookmark")}>
                                    <View style={{height: "96%", width: DEVICE["width"] * 0.6, margin: 10, borderRadius: "20%", backgroundColor: "#79bd9a", paddingVertical: "3%", flexDirection: "row"}}>
                                        <View style={{flex: 1, alignItems: "center", alignContent: "center", justifyContent: "center", }}>
                                            <View style={{flex: 1, alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                                <View style={{height: DEVICE["height"] * 0.1, width: DEVICE["height"] * 0.1, borderRadius: DEVICE["height"] * 0.05, backgroundColor: "#f9f9f9", alignItems: "center", alignContent: "center", justifyContent: "center",}}>
                                                    <Entypo name={"bookmarks"} size={"65%"} color={"#0080ff"}/>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{flex: 2, paddingRight: "7%"}}>
                                            <View style={{flex: 1, backgroundColor: "#f9f9f9", padding: "4%"}}>
                                                <View style={{flex: 1, alignItems: "center", alignContent: "center", justifyContent: "center", borderBottomWidth: 2}}>
                                                    <Text style={{fontSize: DEVICE["height"] * 0.03, fontWeight: "bold"}}>Bookmarks</Text>
                                                </View>
                                                <View style={{flex: 1.5, marginTop: "2%"}}>
                                                    <Text>저장한 콘텐츠 확인할 수 있습니다.</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={() => navigate("Profile My Feed")}>
                                    <View style={{height: "96%", width: DEVICE["width"] * 0.6, margin: 10, borderRadius: "20%" ,backgroundColor: "#3b8686", paddingVertical: "3%", flexDirection: "row"}}>
                                        <View style={{flex: 1, alignItems: "center", alignContent: "center", justifyContent: "center", }}>
                                            <View style={{flex: 1, alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                                <View style={{height: DEVICE["height"] * 0.1, width: DEVICE["height"] * 0.1, borderRadius: DEVICE["height"] * 0.05, backgroundColor: "#f9f9f9", alignItems: "center", alignContent: "center", justifyContent: "center",}}>
                                                    <Entypo name={"clipboard"} size={"65%"} color={"#0080ff"}/>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{flex: 2, paddingRight: "7%"}}>
                                            <View style={{flex: 1, backgroundColor: "#f9f9f9", padding: "4%"}}>
                                                <View style={{flex: 1, alignItems: "center", alignContent: "center", justifyContent: "center", borderBottomWidth: 2}}>
                                                    <Text style={{fontSize: DEVICE["height"] * 0.03, fontWeight: "bold"}}>My Feeds</Text>
                                                </View>
                                                <View style={{flex: 1.5, marginTop: "2%"}}>
                                                    <Text>작성한 게시물을 확인할 수 있습니다.</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </ScrollView>
                        </View>             
                    </View>
                </View>
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
  
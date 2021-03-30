import * as React from 'react';
import update from 'react-addons-update';
import { Text, View, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity, ImageBackground, TouchableHighlight, StatusBar } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { ListItem, Item, Input, Icon, Content, Title, Body, Right, Button, Left } from 'native-base';
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import FloatingButton from './FloatingButton';
import AnimatedText from './AnimatedText';
import Animated from 'react-native-reanimated';

const { height, width } = Dimensions.get("window");

const DEVICE = {
    height: (height < width) ? width : height,
    width: (width > height) ? height : width
};

export default class DetailScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listButtonClicked: false,
            bookmark: false,
            likeThis: false,
            checked: Array.from({length: this.props.route.params.item["DATA"]["INGREDIENTS"].length}).fill(false),
        }
    }

    getResponse(result) {
        const { preRouterName } = this.props.route.params;
        if(result === 1) {
            this.props.navigation.navigate(preRouterName);
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        const { item } = this.props.route.params;
        const image = item["DATA"]["IMAGE"];
        let flag = true;
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle='light-content' backgroundColor='#000000' />
                <ImageBackground 
                    source={{uri: image[0]}} 
                    style={{
                        width: "100%", 
                        height: "100%", 
                        resizeMode: "cover", 
                        overflow: "hidden", 
                    }} 
                    blurRadius={50}
                >
                    <View style={{width: "100%", height: "100%", backgroundColor: "rgba(13, 13, 13, 0.5)", alignContent: 'center', alignItems: 'center', paddingTop: '2%'}}>
                        <ScrollView style={styles.container}>
                            <View style={styles.imageContainer}>
                                <LinearGradient
                                    colors={['orange', 'transparent', 'transparent', 'orange', 'orange', 'orange', 'orange']}
                                    // colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                                    // start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                                    start={{ x: 0.5, y: 0.5 }} end={{ x: 1, y: 1 }}
                                    style={{padding: 1}}
                                >
                                <View style={{height: '100%', }}>
                                    <Image
                                        key={image[0]}
                                        source={{uri: image[0]}}
                                        style={{resizeMode: 'cover', overflow: 'hidden', height: "100%",}}
                                    />
                                    <View 
                                        style={{
                                            position:'absolute',
                                            right: 5,
                                            top: -4
                                        }}
                                    >
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.setState({
                                                    bookmark:!this.state.bookmark,
                                                });
                                            }}
                                        >
                                            <Ionicons name="ios-bookmark" size={35} color={this.state.bookmark ? '#F6AE14' : 'white'} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                </LinearGradient>
                            </View>
                            <View style={styles.headerContainer}>
                                <View style={{paddingBottom: '1.5%',}}>
                                    <Left>
                                        
                                    </Left>

                                    <Body style={{alignItems: 'center', alignContent: 'center'}}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.setState({
                                                    likeThis:!this.state.likeThis,
                                                });
                                            }}
                                        >
                                            <AntDesign size={40} name={"heart"} color={this.state.likeThis ? '#F15F76' : 'white'} />    
                                        </TouchableOpacity>
                                    </Body>
                                    <Right>
                                        
                                    </Right>
                                </View>
                                
                                <Text style={[styles.text,]}>
                                    { item["NAME"] }
                                </Text>
                            </View>
                            <View style={styles.bodyContainer}>
                                <View style={[styles.bodyTitleContainer, {flexDirection: "row"}]}>
                                    <View style={{flex: 2.5}}>
                                        <Text style={styles.text}>Ingredients</Text>
                                    </View>
                                    <View style={{flex: 8, display: "block", flexDirection: "row", flexWrap: "wrap"}}>
                                    {
                                        item["DATA"]["INGREDIENTS"].map((data, i) => 
                                                <View key={i} style={{display: "inline", overflow: "hidden"}}>
                                                    <CheckBox 
                                                        title={data}
                                                        key={i}
                                                        checked={this.state.checked[i]}
                                                        onPress={() => this.setState({
                                                            checked: update(
                                                                this.state.checked,
                                                                {
                                                                    [i] : {$set: !this.state.checked[i]}
                                                                }
                                                            )
                                                        })}
                                                        style={{}}
                                                    />
                                                </ View>
                                        )
                                    }
                                    </View>
                                </View>
                                <AnimatedText title={"Method"} content={item["DATA"]["METHOD"]} style={{margin: "3%", backgroundColor: 'rgba(50, 50, 50, 0.2)', borderRadius: 10}}/>
                                <AnimatedText title={"Garnish"} content={item["DATA"]["GARNISH"]} style={{margin: "3%", backgroundColor: 'rgba(50, 50, 50, 0.2)', borderRadius: 10}} />
                            </View>
                        </ScrollView>
                    </View>
                </ImageBackground>
                <FloatingButton style={{bottom: "10%", right: "10%", backgroundColor: 'transparent'}} callback={this.getResponse.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        height: DEVICE["height"] * 0.35,
        width: (height < width) ? '80%' : '100%', 
        paddingHorizontal: "10%",
        marginTop: '5%',
        marginBottom: '3%',
        alignContent: 'center',
    },
    container: {
        width: '100%',
        backgroundColor: "transparent"
    },
    headerContainer: {
        width : '100%',
        paddingBottom: "3%",
    },
    bodyContainer: {
        width: '100%',
        padding: "3%",
    },
    bodyTitleContainer: {
        margin: "3%",
        backgroundColor: 'rgba(50, 50, 50, 0.2)',
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    ingredientContainer: {
        padding: "5%",
        backgroundColor: 'yellow',
    },
    stepContainer: {
        padding: "5%",
        backgroundColor: 'pink',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
    },
    sizeMainButton: {
        height: DEVICE["height"] * 0.06, 
        width : DEVICE["height"] * 0.06, 
        borderRadius : DEVICE["height"] * 0.03,
        backgroundColor: 'rgba(180, 180, 180, 0.8)',
        alignItems: 'center', 
        alignContent: 'center', 
        justifyContent: 'center'
    },
    sizeButton: {
        height: DEVICE["height"] * 0.05, 
        width : DEVICE["height"] * 0.05,
        borderRadius : DEVICE["height"] * 0.025,
        marginBottom: "20%",
        alignItems: 'center', 
        alignContent: 'center', 
        justifyContent: 'center'
    },
    buttonList: {
        alignContent: 'center',
        alignItems: 'center',
        // height: "7%",
        // width: DEVICE["height"] * 0.06,
    }
})
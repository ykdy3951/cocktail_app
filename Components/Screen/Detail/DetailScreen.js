import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity, ImageBackground, TouchableHighlight, StatusBar } from 'react-native';
import { ListItem, Item, Input, Icon, Content, Title, Body, Right, Button, Left } from 'native-base';
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { height, width } = Dimensions.get("window");

const DEVICE = {
    height: (height < width) ? width : height,
    width: (width > height) ? height : width
};

export default class DetailScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bookmark: false,
            likeThis: false,
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
                    <ScrollView style={styles.container}>
                        <View style={{width: "100%", height: "100%", backgroundColor: "rgba(13, 13, 13, 0.5)", alignContent: 'center', alignItems: 'center'}}>
                            <View style={styles.imageContainer}>
                                <LinearGradient
                                    colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
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
                                <View style={styles.bodyTitleContainer}>
                                    <Text style={styles.text}>Ingredients</Text>
                                </View>
                                <View style={styles.ingredientContainer}>
                                    <Text style={styles.text}>
                                        { item["DATA"]["INGREDIENTS"] }
                                    </Text>
                                </View>
                                <View style={styles.bodyTitleContainer}>
                                    <Text style={styles.text}>Recipe</Text>
                                </View>
                                <View style={styles.stepContainer}>
                                    <Text style={styles.text}>step1</Text>
                                </View>
                                <View style={styles.stepContainer}>
                                    <Text style={styles.text}>step2</Text>
                                </View>
                                <View style={styles.stepContainer}>
                                    <Text style={styles.text}>step3</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={[styles.size, {position:'absolute', bottom: 30, right: 30, backgroundColor: 'transparent', }]}>
                        <TouchableHighlight
                            activeOpacity={0.8}
                            underlayColor="transparent"
                            onPress={() => navigate("Recipe list")}
                        >
                            <View style={[styles.size, {backgroundColor: 'rgba(180, 180, 180, 0.8)', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}]}>
                                <Entypo name="list" size={DEVICE["height"] * 0.042} color="white" />
                            </View>
                        </TouchableHighlight>
                    </View>

                </ImageBackground>
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
        backgroundColor: 'blue',
    },
    bodyTitleContainer: {
        padding: "3%",
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
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
    size: {
        height: DEVICE["height"] * 0.06, 
        width : DEVICE["height"] * 0.06, 
        borderRadius : DEVICE["height"] * 0.03,
    }
})
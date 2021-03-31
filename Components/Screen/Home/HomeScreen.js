import * as React from 'react';
import { Text, Image, View, StyleSheet, Dimensions, StatusBar, ScrollView, RefreshControl } from 'react-native';
import { Header, Body, Title } from 'native-base';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as ScreenOrientation from 'expo-screen-orientation';
import { SliderBox } from "react-native-image-slider-box";
// custom module
import { BackgroundCarousel } from '../../utils/BackgroundCarousel';
import { HomeContent } from './HomeContent';
import { withNavigation } from 'react-navigation';
import { set } from 'react-native-reanimated';

// 서버에서 매일 랜덤으로 5개를 가져와야함
const images = [
    "https://img.taste.com.au/7-t_jkYd/taste/2017/12/swp0080_recipe-integration-1980x1320px-b_v2-133202-1.jpg",
    "https://vinepair.com/wp-content/uploads/2016/11/cocktailsubs-internal-header.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDnIo8ADk4DL6-qAl1rg_hFv97ZyI7vc3fQ&usqp=CAU",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/index-1549384787.jpg",
    "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/580A43B7-7DF1-4A88-927B-B41EBED7E4B3/Derivates/B80CA9FD-B5DE-4D3C-A34E-7C1D38B57B52.jpg",
    // require("../../../data/image/cocktail_test_data_1.jpg"),
    // require("../../../data/image/cocktail_test_data_2.jpg"),
    // require("../../../data/image/cocktail_test_data_3.jpg"),
    // require("../../../data/image/cocktail_test_data_4.jpg"),
    // require("../../../data/image/cocktail_test_data_5.jpg"),
];

const name = "Cocktail";
const heartCnt = 123;

const { height, width }  = Dimensions.get("window");

const DEVICE = {
    height: (height < width) ? width : height,
    width: (width > height) ? height : width
};

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isReady : false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({'Flottflott': require('../../../assets/fonts/Flottflott.ttf'), });
        this.setState({ isReady: true });
        
        // Dimensions.addEventListener('change', Updates.reload());
    }

    render() {
        if( this.state.isReady ) {
            return (
                <View style={{flex: 1, backgroundColor: '#232323', }}>
                    <StatusBar barStyle='light-content' backgroundColor='#000000' />
                    <LinearGradient
                        colors={['#161616', '#232323', '#373737']}
                    >
                    <View style={{paddingTop: '5%', alignContent: 'center', alignItems: 'center'}}>
                        <Title style={styles.title}>
                            Home
                        </Title>
                    </View>
                    </LinearGradient>
                    <LinearGradient 
                        colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.5)','rgba(255, 255, 255, 0)']}
                        style={{height: 10, backgroundColor: 'rgba(255, 255, 255, 0)'}}
                    />
                        
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{}}
                    >
                        <View style={styles.firstContainer}>
                            <SliderBox
                                images={images}
                                dotColor="rgba(255, 255, 255, 0.5)"
                                inactiveDotColor="white"
                                autoplay
                                circleLoop
                                resizeMethod={'resize'}
                                resizeMode={'cover'}
                                paginationBoxStyle={{
                                    position: "absolute",
                                    bottom: 15,
                                    padding: 0,
                                    alignItems: "center",
                                    alignSelf: "center",
                                    justifyContent: "center",

                                }}
                                dotStyle={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: 4,
                                    backgroundColor: "rgba(128, 128, 128, 0.92)"
                                }}
                                ImageComponentStyle={{borderRadius: 15, width: '97%', height: DEVICE["height"] * 0.35, marginTop: 5}}
                            />
                        </View>
                        <View style={styles.secondContainer}>
                            <HomeContent />
                        </View>
                    </ScrollView>
                </View>
            )
        }
        else {
            return (
                <View>
                    <Text>
                        isLoading...
                    </Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Flottflott',
        fontSize: DEVICE["height"] * 0.1, 
        color: 'white',
        textShadowColor: "pink",
        textShadowOffset: {
            width: -1,
            height: 1
        },
        shadowOpacity: 0.3,
        textShadowRadius: 10,
    },
    firstContainer: {
        height: DEVICE["height"] * 0.35,
        width: "100%",
        padding: "3%",
        paddingBottom: '0%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        // marginBottom: "10%",
    },
    secondContainer: {
      alignItems: 'center',
    },
    imageContainer: {
        flex: 2,
        height: DEVICE["height"] * 0.35,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#F5FCFF',
        shadowColor: '#000',
        shadowOffset: { 
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    }, 
    image: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
    },
    text: {
        flex : 1,
        backgroundColor: '#0000FF'
    }
  });
  
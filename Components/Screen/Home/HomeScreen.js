import * as React from 'react';
import { Text, Image, View, StyleSheet, Dimensions, StatusBar, ScrollView } from 'react-native';
import { BackgroundCarousel } from '../../utils/BackgroundCarousel';
import { HomeContent } from './HomeContent';

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

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#232323'}}>
                <StatusBar barStyle='light-content' backgroundColor='#000000' />
                <ScrollView>
                    <View style={styles.firstContainer}>
                        <View style={styles.imageContainer}>
                            <BackgroundCarousel images={images} />
                        </View>
                    </View>
                    <View style={styles.secondContainer}>
                        <HomeContent />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    firstContainer: {
        height: height * 0.35,
        width: width,
        padding: "3%",
        marginBottom: "10%",
    },
    secondContainer: {
      alignItems: 'center',
    },
    imageContainer: {
        flex: 2,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
  
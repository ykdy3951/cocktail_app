import * as React from 'react';
import { Text, Image, View, StyleSheet, StatusBar } from 'react-native';
import { BackgroundCarousel } from '../../utils/BackgroundCarousel';

const images = [
    "https://img.taste.com.au/7-t_jkYd/taste/2017/12/swp0080_recipe-integration-1980x1320px-b_v2-133202-1.jpg",
    "https://vinepair.com/wp-content/uploads/2016/11/cocktailsubs-internal-header.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDnIo8ADk4DL6-qAl1rg_hFv97ZyI7vc3fQ&usqp=CAU",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/index-1549384787.jpg",
    "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/580A43B7-7DF1-4A88-927B-B41EBED7E4B3/Derivates/B80CA9FD-B5DE-4D3C-A34E-7C1D38B57B52.jpg",
    // "../../../data/image/cocktail_test_data_1.jpg",
    // "../../../data/image/cocktail_test_data_2.jpg",
    // "../../../data/image/cocktail_test_data_3.jpg",
    // "../../../data/image/cocktail_test_data_4.jpg",
    // "../../../data/image/cocktail_test_data_5.jpg",
];

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.imageContainer}>
                    <BackgroundCarousel images={images} />
                </View>
                <View style={styles.container}>
                    <StatusBar barStyle='light-content' backgroundColor='#000000' />
                    
                    <Text style={styles.text}>Home!</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 3,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
        flex: 2,
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
        flex : 3,
        backgroundColor: '#0000FF'
    }
  });
  
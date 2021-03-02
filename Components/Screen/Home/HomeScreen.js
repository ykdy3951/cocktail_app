import * as React from 'react';
import { Text, Image, View, StyleSheet, StatusBar } from 'react-native';
import { BackgroundCarousel } from '../../utils/BackgroundCarousel';

const images = [
    "../../../data/image/cocktail_test_data_1.jpg",
    "../../../data/image/cocktail_test_data_2.jpg",
    "../../../data/image/cocktail_test_data_3.jpg",
    "../../../data/image/cocktail_test_data_4.jpg",
    "../../../data/image/cocktail_test_data_5.jpg",
];

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.imageContainer}>
                        <Image
                        style={styles.image}
                        source={require()}/>
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
        shadowColor: '#FF0000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        backgroundColor: '#000'
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
  
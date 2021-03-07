import * as React from 'react';
import { Text, Image, View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { CardView } from '../../utils/CardView';

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

export default class HomeContent extends React.Component {
    render() {
        return (
            <View style={{flex: 1, height: "100%", width: "100%"}}>
                <View style={{flex: 1, marginBottom: 100}}>
                    <Text style={styles.homeTextMenuStyle}>
                        New Cocktails!
                    </Text>
                    <View style={styles.scrollStyle}>
                        {/* <View style={styles.CardCover}>
                            <CardView image={images[0]} name={name} heartCnt={heartCnt}/>
                        </View>
                        <View style={styles.CardCover}>
                            <CardView image={images[1]} name={name} heartCnt={heartCnt}/>
                        </View> */}
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={styles.CardCover}>
                                <CardView image={images[0]} name={name} heartCnt={heartCnt}/>
                            </View>
                            <View style={styles.CardCover}>
                                <CardView image={images[0]} name={name} heartCnt={heartCnt}/>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.homeTextMenuStyle}>
                        Top 10 Cocktails
                    </Text>
                    <View style={styles.scrollStyle}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={styles.CardCover}>
                                <CardView image={images[0]} name={name} heartCnt={heartCnt}/>
                            </View>
                            <View style={styles.CardCover}>
                                <CardView image={images[0]} name={name} heartCnt={heartCnt}/>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homeTextMenuStyle: {
        shadowColor: 'tomato',
        shadowOffset: { 
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        color: "white",
        marginBottom: "1%",
        fontSize: 20,
        margin: "2%",
        marginBottom: "3%",
    },
    scrollStyle: {
        backgroundColor: "#f9f9f9",
        height: "100%",
        width: "100%",
        flexDirection: "row",
    },
    CardCover: {
        flex: 1,
        width: 200,
        height: 300,
        margin: 15,
    }
});

export { HomeContent };
import * as React from 'react';
import { Text, Image, View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { CardView } from '../../utils/CardView';

export default class HomeContent extends React.Component {
    render() {
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text style={styles.homeTextMenuStyle}>
                    New Cocktails!
                </Text>
                <View style={styles.scrollStyle}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <CardView />                            
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
                        <CardView />          
                    </ScrollView>
                </View>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    homeTextMenuStyle: {
        flex: 2,
        shadowColor: 'tomato',
        shadowOffset: { 
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    },
    scrollStyle: {
        flex: 5,
        backgroundColor: "gray",
    }
})
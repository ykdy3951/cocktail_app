import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Dimensions, Image, FlatList } from 'react-native';
import { LogBox } from 'react-native';
import { Title } from 'native-base';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FlipCard from 'react-native-flip-card';
import MasonryList from '@appandflow/masonry-list';

import FloatingButton from '../../utils/FloatingButton';

LogBox.ignoreAllLogs();

const posts = [
    {"TITLE": 'Test1', "THUMB": 5, "BODY": 'AAA'},
    {"TITLE": 'Test2', "THUMB": 4, "BODY": 'BBB'},
    {"TITLE": 'Test3', "THUMB": 8, "BODY": 'CCC'}
]

const sampleData = [
    {
        "P_KEY": 0,
        "NAME": "GIN_FIZZ",
        "DATA" : {
            "IMAGE": ["https://img.taste.com.au/7-t_jkYd/taste/2017/12/swp0080_recipe-integration-1980x1320px-b_v2-133202-1.jpg"],
            "ORIGIN" : "IBA",
            "INGREDIENTS" : ["1111111111111", "22", "33", "44", "55", "11", "22", "33", "44"],
            "METHOD" : "",
            "GARNISH" : "gg"
        },
        "POST" : {
            "AUTHOR": "Woong",
            "VIEW": 345,
            "HEART": 121,
            "TAG": [
                "GIN"
            ]
        }
    },
    {
        "P_KEY": 1,
        "NAME": "GIN_FIZZ",
        "DATA" : {
            "IMAGE": ["https://vinepair.com/wp-content/uploads/2016/11/cocktailsubs-internal-header.jpg"],
            "ORIGIN" : "IBA",
            "INGREDIENTS" : ["1111111111111", "22", "33", "44", "55", "11", "22", "33", "44"],
            "METHOD" : "",
            "GARNISH" : "gg"
        },
        "POST" : {
            "AUTHOR": "Woong",
            "VIEW": 345,
            "HEART": 133,
            "TAG": [
                "GIN"
            ]
        }
    },
    {
        "P_KEY": 2,
        "NAME": "GIN_FIZZ",
        "DATA" : {
            "IMAGE": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDnIo8ADk4DL6-qAl1rg_hFv97ZyI7vc3fQ&usqp=CAU"],
            "ORIGIN" : "IBA",
            "INGREDIENTS" : ["1111111111111", "22", "33", "44", "55", "11", "22", "33", "44"],
            "METHOD" : "",
            "GARNISH" : "gg"
        },
        "POST" : {
            "AUTHOR": "Woong",
            "VIEW": 345,
            "HEART": 10,
            "TAG": [
                "GIN"
            ]
        }
    },
    {
        "P_KEY": 3,
        "NAME": "GIN_FIZZ",
        "DATA" : {
            "IMAGE": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDnIo8ADk4DL6-qAl1rg_hFv97ZyI7vc3fQ&usqp=CAU"],
            "ORIGIN" : "IBA",
            "INGREDIENTS" : ["1111111111111", "22", "33", "44", "55", "11", "22", "33", "44"],
            "METHOD" : "",
            "GARNISH" : "gg"
        },
        "POST" : {
            "AUTHOR": "Woong",
            "VIEW": 345,
            "HEART": 10,
            "TAG": [
                "GIN"
            ]
        }
    },
    {
        "P_KEY": 4,
        "NAME": "GIN_FIZZ",
        "DATA" : {
            "IMAGE": ["https://img.taste.com.au/7-t_jkYd/taste/2017/12/swp0080_recipe-integration-1980x1320px-b_v2-133202-1.jpg"],
            "ORIGIN" : "IBA",
            "INGREDIENTS" : ["1111111111111", "22", "33", "44", "55", "11", "22", "33", "44"],
            "METHOD" : "",
            "GARNISH" : "gg"
        },
        "POST" : {
            "AUTHOR": "Woong",
            "VIEW": 345,
            "HEART": 10,
            "TAG": [
                "GIN"
            ]
        }
    },
    {
        "P_KEY": 5,
        "NAME": "GIN_FIZZ",
        "DATA" : {
            "IMAGE": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDnIo8ADk4DL6-qAl1rg_hFv97ZyI7vc3fQ&usqp=CAU"],
            "ORIGIN" : "IBA",
            "INGREDIENTS" : ["1111111111111", "22", "33", "44", "55", "11", "22", "33", "44"],
            "METHOD" : "",
            "GARNISH" : "gg"
        },
        "POST" : {
            "AUTHOR": "Woong",
            "VIEW": 345,
            "HEART": 10,
            "TAG": [
                "GIN"
            ]
        }
    },
    {
        "P_KEY": 6,
        "NAME": "GIN_FIZZ",
        "DATA" : {
            "IMAGE": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDnIo8ADk4DL6-qAl1rg_hFv97ZyI7vc3fQ&usqp=CAU"],
            "ORIGIN" : "IBA",
            "INGREDIENTS" : ["1111111111111", "22", "33", "44", "55", "11", "22", "33", "44"],
            "METHOD" : "",
            "GARNISH" : "gg"
        },
        "POST" : {
            "AUTHOR": "Woong",
            "VIEW": 345,
            "HEART": 10,
            "TAG": [
                "GIN"
            ]
        }
    },
]

const { height, width }  = Dimensions.get("window");

class TouchableCard extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {item} = this.props;
        const numOfColumns = width / 500 + 2;
        const cardWidth = (width - 10 * (numOfColumns + 1)) / numOfColumns;
        const cardHeight = (item["POST"]["HEART"] > 50 ? cardWidth * 1.5 : cardWidth * (1 + item["POST"]["HEART"] / 100));
        
        return (
            <FlipCard
                style={[styles.card, {height: cardHeight, width: cardWidth}]}
                friction={5}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={false}
                flip={false}
                clickable={true}
            >
                <View style={[styles.image, styles.face]}>
                    <Image 
                        key={item["DATA"]["IMAGE"][0]}
                        source={{uri : item["DATA"]["IMAGE"][0]}}
                        style={styles.image}
                    />
                </View>
                <View style={[styles.back]}>
                    <View>
                        
                    </View>

                    <Text>
                        Back
                    </Text>
                </View>
            </FlipCard>
        );
    }
}

export default class BoardScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            isRefreshing: false,
            card: null,
            title: '',
            thumb: 0,
            body: '',
        };
    }

    getResponse(result) {
        if(result === 2) {
            this.props.navigation.navigate("Board Write");
        }
    }

    _refreshRequest = () => {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.setState({isRefreshing : false});
        }, 1000);
    };

    BoardPreview = ({ title, body, thumb }) => {
        // const {navigate} = this.props.navigation;
        // const preRouterName = this.props.route.name;
        return (
            <View>
                <TouchableOpacity 
                    onPress={() => navigate("Board Content", {title: title, body: body, thumb: thumb})}
                >
                    
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        const numOfColumns = width / 500 + 2;
        const cardWidth = (width - 10 * (numOfColumns + 1)) / numOfColumns;
        
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='#000' />
                <View style={styles.titleContainer}>
                    <Title style={styles.title}>
                        Board
                    </Title>
                </View>
                <View>
                    

                </View>
                <View style={{padding: "2%", alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    
                </View>
                <FloatingButton style={{bottom: "10%", right: "10%"}} iconNames={["reply", "pencil"]} color={"tomato"} callback={this.getResponse.bind(this)} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
    },
    titleContainer: {
        marginTop: '2%',
        paddingVertical : '3%', 
        alignItems: 'flex-start', 
        paddingLeft: '3%',
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
    card: {
        margin: 15,
        backgroundColor: "blue",
        borderRadius: 10,
    },
    card2: {
        padding: 15,
        backgroundColor: "rgba(240, 240, 240, 0.8)",
        borderRadius: 10,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderRadius: 10,
    },
  });
  
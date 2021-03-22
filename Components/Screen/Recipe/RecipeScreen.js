import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList, Dimensions } from 'react-native';
import { ListItem, Item, Input, Icon, Content, Title } from 'native-base';
import { Tags } from 'react-native-tags';
import { TagSelect } from 'react-native-tag-select';
import { LinearGradient } from 'expo-linear-gradient';

// custom module
import { Preview } from '../../utils/Preview_v2';
import { Search } from '../../utils/Search';

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

const { height, width }  = Dimensions.get("window");

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({
            "P_KEY": `blank-${numberOfElementsLastRow}`, 
            "NAME": null,
            "DATA": {
                "IMAGE": ["https://s3.eu-central-1.amazonaws.com/uploads.mangoweb.org/shared-prod/visegradfund.org/uploads/2018/08/portrait-blank-male.png"],
                "ORIGIN" : null,
                "INGREDIENTS" : [],
                "METHOD" : null,
                "GARNISH" : null,
            },
            "empty": true,
            "POST" : {
                "AUTHOR" : null,
                "VIEW" : null,
                "HEART": null,
                "TAG": [
                    null
                ]
            }
        });
        numberOfElementsLastRow = numberOfElementsLastRow + 1;
    } 

    return data;
}

let menuArray=require('../../../data/sets/menuList.json');
let tagArray=require('../../../data/sets/tagList.json');

export default class RecipeScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            menu: menuArray,
            filteredMenu: menuArray,
            tags: tagArray,
            filteredTags: tagArray,
            allTags: tagArray.map((tag, index) =>
                tag["label"]
            )
        };
    }

    getResponse(result) {
        let element;
        for (let index = 0; index < tagArray.length; index++) {
            element = tagArray[index];
            if(element["label"] === result) {
                break;
            }
        }
        
        if(!(String(element["id"]) in this.tag.state.value)) {
            let arr = Array();
            arr.push(result);
            this.tag.state.value[String(element["id"])] = element;

            Object.keys(this.tag.state.value).forEach(element => {
                arr.push(this.tag.state.value[element]["label"]);
            });
            // console.log(arr);
            this.selectTags(arr);
        }
        else {
            delete this.tag.state.value[String(element["id"])];
            let arr = Object.keys(this.tag.state.value);
            if(arr.length) {
                let changeState = Array();
                arr.forEach(element => {
                    changeState.push(this.tag.state.value[element]["label"]);
                });
                this.selectTags(changeState);
            }
            else {
                this.selectTags(arr);
            }
        }
    }

    recipePreview = ({ item, index, width }) => {
        if(item.empty === true) {
            return (
                <View style={[styles.item, styles.itemInvisible]}>
    
                </View>
            )
        }
        return (
            <View style={styles.item}>
                <Preview
                    image={item["DATA"]["IMAGE"][0]} 
                    name={item["NAME"]}
                    post={item["POST"]}
                    callback={this.getResponse.bind(this)}
                />
            </View>
        )
    }

    selectTags(tags) {
        
        this.setState({
            filteredMenu:this.state.menu.filter(function(i) {
                let bool = true;
                tags.forEach(tag => {
                    if(!i["POST"]["TAG"].includes(tag)) {
                        bool = false;
                    } 
                }); 
                return bool;
            }),
        });
    }

    searchMenu(textToSearch) {
        this.setState({
            filteredMenu:this.state.menu.filter( i=>
                i["NAME"].toLowerCase().includes(textToSearch),
            ),
        });
    }

    render() {
        const numColumns = (width >= 800 ? 2 : 1);
        
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Title style={styles.title} >
                        Recipe
                    </Title>
                </View>
                <LinearGradient 
                        colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.5)','rgba(0, 0, 0, 0)']}
                        style={{height: 10, backgroundColor: 'rgba(255, 255, 255, 0)'}}
                    />
                <View style={styles.searchBar}>
                    <Item rounded>
                        <Icon name='search' />
                        <Input 
                            placeholder="Search Menu"
                            ref={(text) => {
                                this.text = text;
                            }}
                            onChangeText={text=>{this.searchMenu(text)}}
                        />
                    </Item>
                </View>
                {/* <Content> */}
                {/* tags */}
                <View style={{height: 50, marginHorizontal: 10}}>
                    <ScrollView
                        horizontal={true}
                        style={{height: 50}}
                        >
                        <TagSelect
                            data={this.state.tags}
                            ref={(tag) => {
                                this.tag = tag;
                            }}
                            onItemPress={() => {
                                let list = new Array();
                                this.tag.itemsSelected.map((item, index) =>
                                    list.push(item["label"])
                                );
                                    
                                this.selectTags(list);
                                
                            }}
                            containerStyle={{margin: 10, height: 50,}}
                        />
                    </ScrollView>
                </View>
                {/* menus boards */}
                <View style={{flex: 1, padding: 10, flexDirection: 'row', marginVertical: '1%'}}>
                    <FlatList 
                        numColumns={ numColumns }
                        width={ width }
                        index={(item, index) => index}
                        data={formatData(this.state.filteredMenu, numColumns)}
                        renderItem={this.recipePreview}
                        keyExtractor={ (item) => String(item["P_KEY"])}
                    />
                </View>
                    {/* {
                    this.state.filteredMenu.map((data, index) =>
                        <ListItem key={index}>
                            <View style={{ width: width / 2}}>
                                <Preview
                                    key={index}
                                    image={data["DATA"]["IMAGE"][0]} 
                                    name={data["NAME"]}
                                    post={data["POST"]}
                                />
                            </View>
                        </ListItem>
                    )} */}
                {/* </Content> */}
                <Text>Recipe!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleContainer: {
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
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
      justifyContent: 'center',
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    item : {
        flex: 1, 
        width: width, 
        marginHorizontal: 10,
        marginBottom: '2%'
    },
    searchBar : {
        marginHorizontal: 10,
        marginVertical: '1.5%'
    }
  });
import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList, Dimensions } from 'react-native';
import { ListItem, Item, Input, Icon, Content } from 'native-base';
import { Tags } from 'react-native-tags';
import { TagSelect } from 'react-native-tag-select';
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

const recipePreview = ({ item, width }) => {
    return (
        <View style={{ flex: 1, width: width, marginHorizontal: 10 }}>
            <Preview
                image={item["DATA"]["IMAGE"][0]} 
                name={item["NAME"]}
                post={item["POST"]}
            />
            <Text>{width}</Text>
        </View>
    )
}

const TagList = (tags) => (
    <Tags
        initialTags = {tags}
            
    />
);

let menuArray=require('../../../data/sets/menuList.json');
let tagArray=require('../../../data/sets/tagList.json');

export default class RecipeScreen extends React.Component {
    state = {
        menu: menuArray,
        filteredMenu: menuArray,
        tags: tagArray,
        filteredTags: tagArray,
    };

    selectTags(tags) {
        
        this.setState({
            filteredMenu:this.state.menu.filter(function(i) {
                let bool = false;
                tags.forEach(tag => {
                    if(i["POST"]["TAG"].includes(tag)) {
                        bool = true;
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
        let allTags = Array();
        tagArray.map((tag, index) => 
            allTags.push(tag["label"])
        );
        return (
            <View style={styles.container}>
                <Item rounded>
                    <Icon name='search' />
                    <Input 
                        placeholder="Search Menu"
                        onChangeText={text=>{this.searchMenu(text)}}
                    />
                </Item>
                {/* <Content> */}
                {/* tags */}
                <View style={{height: 50}}>
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
                                if(list.length)
                                    this.selectTags(list);
                                
                                else{
                                    this.selectTags(allTags);
                                }
                            }}
                            containerStyle={{margin: 10, height: 50,}}
                        />
                    </ScrollView>
                </View>
                {/* menus boards */}
                <View style={{flex: 1, padding: 10, alignItems: 'center'}}>
                    <FlatList 
                        numColumns={ numColumns }
                        width={width}
                        data={this.state.filteredMenu}
                        renderItem={recipePreview}
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
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
      justifyContent: 'center',
    },
  });
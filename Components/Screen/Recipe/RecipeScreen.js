import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { ListItem, Item, Input, Icon, Content } from 'native-base';
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

let menuArray=require('../../../data/sets/menuList.json');

export default class RecipeScreen extends React.Component {
    state = {
        menu: menuArray,
        filteredMenu: menuArray,
    };

    searchMenu(textToSearch) {
        this.setState({
            filteredMenu:this.state.menu.filter( i=>
                i["NAME"].toLowerCase().includes(textToSearch),
            ),
        });
    }

    render() {
        console.log(width); 
        return (
            <View style={styles.container}>
                <Item rounded>
                    <Icon name='search' />
                    <Input 
                        placeholder="Search Menu"
                        onChangeText={text=>{this.searchMenu(text)}}
                    />
                </Item>
                <Content>
                    {
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
                    )}
                </Content>
                <Text>Recipe!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
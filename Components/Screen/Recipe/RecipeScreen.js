import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { ListItem, Item, Input, Icon } from 'native-base';
import { Preview } from '../../utils/Preview';
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

let menuArray=require('../../../data/sets/menuList.json');

export default class RecipeScreen extends React.Component {
    state = {
        menu: menuArray,
        filteredMenu: menuArray,
    };

    

    render() {
        let keys = Object.keys(this.state.menu);
        return (
            <View style={styles.container}>
                <Item rounded>
                    <Icon name='search' />
                    <Input placeholder="Search Menu" />
                </Item>
                {/* <Preview image={images[1]} data={1}/> */}
                {/* <ListItem> */}
                
                {
                    keys.map((key, index) => 
                        <Text key={index} style={{fontSize: 50}}>
                            { this.state.menu[key]["GARNISH"] }
                        </Text>
                )}
                 
                    <Preview image={images[0]} data={0}/>
                    <Preview image={images[1]} data={1}/>
                    <Preview image={images[2]} data={2}/>
                    <Preview image={images[3]} data={3}/>
                {/* </ListItem> */}
                <Preview image={images[0]} data={0}/>
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
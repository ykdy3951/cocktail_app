import * as React from 'react';
import {SearchBar} from 'react-native-elements';
import { StyleSheet, View, Dimensions, Image, Text, TextInput} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        search: '',
    };

    // updateSearch = (search) => {
    //     this.setState({search});
    // };

    searchMenu = (search) => {
        this.setState({
            filteredMenu:this.state.menu.filter(i =>
                i.name.toLowerCase().include(search.toLowerCase()))
        });
    }

    render() {
        const {search} = this.state;

        return (
            <View style={styles.container}>
                <SearchBar
                placeholder="Type Here..."
                onChangeText={this.searchMenu}
                value={search}
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        height: "100%",
        width: "100%"
    },

})

export {Search}
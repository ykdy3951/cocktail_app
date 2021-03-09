import * as React from 'react';
import {SearchBar} from 'react-native-elements';
import { StyleSheet, View, Dimensions, Image, Text, TextInput} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

class Search extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({search});
    };

    render() {
        const {search} = this.state;

        return (
            <View style={styles.container}>
                <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
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
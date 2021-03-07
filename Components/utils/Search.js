import * as React from 'react';
import {Text, View, StyleSheet, TextInput, Dimensions, ScrollView, StatusBar, Alert} from 'react-native';
import {SearchBar} from 'react-native-elements';

export default class Search extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({search});
    };

    render() {
        const {search} = this.state;

        return(
            <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}/>
        );
    }
}
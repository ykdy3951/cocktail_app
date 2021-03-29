import * as React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

class BoardCard extends React.Component {

    constructor(props) {
        super(props);

        // state
        this.state = {
        }
    }

    render() {
        const { heart, } = this.props;
        return (
            <View style={{flex: 1, height: (heart > 50) ? 300 : 150 * (1 + heart / 50) , width: 150, borderRadius: "2%"}}>
                <TouchableOpacity
                
                >

                </TouchableOpacity>
            </View>
        );
    }


}

export { BoardCard };
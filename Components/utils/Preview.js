import * as React from 'react';
import { View, Text, StyleSheet, Image, Platform, Button } from 'react-native';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked: true};
    }

    // button function
    _checkedHeartBtn = () => this.setState({clicked: !this.state.clicked});

    render() {
        const { image, data } = this.props;
        return (
            <View style={{height: "100%", width: "100%", flex: 1, backgroundColor: "#ffffff"}}>
                <View style={{flexDirection: "row", margin: "5%", borderBottomWidth: 1, borderBottomColor: "rgba(210,210,210,0.9)"}}>
                    {/* image View */}
                    <View style={styles.imageContainer}>
                        <Image 
                        key={image}
                        source={{uri: image}} 
                        style={styles.image}
                        />
                    </View>
                    {/* Text View */}
                    <View style={{flex: 2, backgroundColor: "#00ff00", marginBottom: "5%"}}>
                        <Text style={{margin: "5%", marginBottom: "2%", fontWeight: "bold"}}>
                            Name
                        </Text>
                        <Text style={{marginLeft: "5%", marginBottom: "10%", color: "rgba(180, 180, 180, 0.8)"}}>
                            Material
                        </Text>
                        {/* Share and Like function part 나중에 추가적으로 가지고 있는 재료 갯수... */}
                        <View style={{flexDirection: "row", marginLeft: "5%"}}>
                            {
                                this.state.clicked
                                    ? <Text onPress={this._checkedHeartBtn} style={styles.text}>♡ {data}</Text>
                                    : <Text onPress={this._checkedHeartBtn} style={styles.text}>♥ {data}</Text>
                            }                            
                            <Text style={styles.text}>
                                share
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: "tomato",
        marginRight: "5%"
    },
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4.65,
        shadowOpacity: 0.3,
        marginBottom: "5%"
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: "cover",
        borderRadius: 10,
    }
});

export { Preview };

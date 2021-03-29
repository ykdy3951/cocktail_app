import React, { PureComponent } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class Preview extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { image, post, name } = this.props;
        
        return (
            <Card>
                <CardItem>
                    <Left style={{flex: 1}}>
                        <Thumbnail large square source={{uri: image}} />
                    </Left>
                    <Body style={{flex: 3}}>
                        <Text style={{marginBottom: 5, fontSize: 17, fontWeight: "bold"}}>
                            { name }
                        </Text>
                        <View style={{flexDirection: "row"}}>
                            { post["TAG"].map((tag, index) =>
                                <TouchableOpacity 
                                    key={index, tag}
                                    onPress={() => this.props.callback(tag)
                                    }
                                >
                                    <View key={index} style={{backgroundColor: 'tomato', borderRadius: 3, padding: 1, marginRight: 2}}>
                                        {/* <Button warning small> */}
                                        <Text key={index} style={{fontSize: 12, opacity: 0.5}}>
                                        { tag }
                                        </Text>
                                        {/* </Button> */}
                                    </View>
                                </TouchableOpacity>
                            )}
                        </View>
                        <View>
                            <Button transparent>
                                <View style={{flexDirection: "row", alignItems: "center"}}>
                                <Icon active name='heart' />
                                <Text style={{fontSize: 15, }}>{ post["HEART"] }</Text>
                                </View>
                            </Button>
                        </View>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}


export { Preview };
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class Preview extends Component {
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
                        <Text style={{marginBottom: 10}}>
                            { name }
                        </Text>
                        <Text note>
                            { post["TAG"].map((tag, index) =>
                                <View key={index} style={{marginRight: 5}}>
                                    <Button warning small>
                                        <Text key={index}>
                                        { tag }
                                        </Text>
                                    </Button>
                                </View>
                            )}
                        </Text>
                        <View>
                            <Button transparent>
                                <Icon active name='heart' />
                                <Text>{ post["HEART"] }</Text>
                            </Button>
                        </View>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}


export { Preview };
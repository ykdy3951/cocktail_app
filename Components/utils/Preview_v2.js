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
                    <Left>
                        <Thumbnail large square source={{uri: image}} />
                    </Left>
                    <Body>
                        <Text>
                            { name }
                        </Text>
                        <Text note>
                            { post["Tag"].map((tag, index) =>
                                <View>
                                    <Text key={index}>
                                        { tag }
                                    </Text>
                                </View>
                            )}
                        </Text>
                        <Button transparent>
                            <Icon active name='heart' />
                            <Text>{ post["HEART"] }</Text>
                        </Button>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}


export { Preview };
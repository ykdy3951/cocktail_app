import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class CardView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { image, name, heartCnt } = this.props;

        return (
            <Card>
                <CardItem cardBody>
                    <Image
                        key={image}
                        source={{uri: image}} 
                        style={{resizeMode: 'cover', height: 220, width: null, flex: 1}}
                    />
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>
                        { name }
                        </Text>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon active name='heart'/>
                            <Text>{ heartCnt }</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        )
    }

}

export { CardView };
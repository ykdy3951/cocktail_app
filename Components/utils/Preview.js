import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Preview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { image, data } = this.props;
        return (
            <View>
                <View style={{flexDirection: "row"}}>
                    {/* image View */}
                    <View>
                        <Image source={{uri: image}} />
                    </View>
                    {/* Text View */}
                    <View>
                        <Text>
                            Name
                        </Text>
                        <Text>
                            Material
                        </Text>
                        {/* Share and Like function part 나중에 추가적으로 가지고 있는 재료 갯수... */}
                        <View>
                            <Text>
                                ♡ {data['heart']}
                            </Text>
                            <Text>
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

});

export { Preview };
import * as React from 'react';
import { StyleSheet, View, Dimensions, Image, Text } from 'react-native';

const { height, width }  = Dimensions.get("window");

const DEVICE = {
    height: (height < width) ? width : height,
    width: (width > height) ? height : width
};

class CardView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { image, name, heartCnt } = this.props;
        
        return (
            <View style={styles.cardDiv}>
                {/* 사진 */}
                <View style={styles.cardDivTop}>
                    <Image
                        key={image}
                        source={{uri: image}}
                        style={{resizeMode: 'cover', flex: 1}}
                    />
                </View>
                {/* 정보 */}
                <View style={styles.cardDivBot}>
                    <View style={styles.textContainer}>
                        <Text style={[styles.text, {textAlign: 'left'}]}>{name}</Text>
                        <Text style={[styles.text, {textAlign: 'right'}]}>{heartCnt}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardDiv: {
        // margin: "10%",  
        flex: 3,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { 
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        borderWidth: 1,
        borderColor: "tomato", // c8c8c8
        justifyContent: "space-between",
    },
    cardDivTop: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomWidth: 1,
        borderColor: "tomato",
        flex: 7,
        height: "100%",
        width: "100%",
        // backgroundColor: "#00ff00",
    },
    cardDivBot: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flex: 3,
        height: "100%",
        width: "100%",
        backgroundColor: "#444444",
    },
    text: {
        color: "white",
        textShadowColor: "#000",
        textShadowOffset: {
            width: -1,
            height: 1
        },
        shadowOpacity: 0.3,
        textShadowRadius: 5,
    },
    textContainer: {
        flex: 1,
        height: "100%",
        width: "90%",
        // padding: "5%",
        margin: "5%",
    }
});

export { CardView };
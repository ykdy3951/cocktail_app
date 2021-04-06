import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, TextInput, Dimensions, ScrollView } from 'react-native';
import { TagSelect } from 'react-native-tag-select';

const { height, width }  = Dimensions.get("window");

const DEVICE = {
    height: (height < width) ? width : height,
    width: (width > height) ? height : width
};

const tagArray=require('../../../data/sets/tagList.json');

export default class BoardWrite extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            tags: tagArray,
            filteredTags: tagArray,
            searchTag: [],
            searchText: "",
            allTags: tagArray.map((tag, index) =>
                tag["label"]
            )
        }
    }

    getResponse(result) {
        let element;
        for (let index = 0; index < tagArray.length; index++) {
            element = tagArray[index];
            if(element["label"] === result) {
                break;
            }
        }
        
        let arr = Array();
        if(!(String(element["id"]) in this.tag.state.value)) {
            arr.push(result);
            this.tag.state.value[String(element["id"])] = element;

            Object.keys(this.tag.state.value).forEach(element => {
                arr.push(this.tag.state.value[element]["label"]);
            });
            // console.log(arr);
        }
        else {
            delete this.tag.state.value[String(element["id"])];
            let keyArr = Object.keys(this.tag.state.value);
            if(keyArr.length) {
                keyArr.forEach(element => {
                    arr.push(this.tag.state.value[element]["label"]);
                });
            }
        }

        this.selectTags(arr);
    }

    updateValue(text, field) {
        if (field === 'title') {
            this.setState({
                title: text,
            })
        }
        else if (field === 'body') {
            this.setState({
                body: text,
            })
        }

    }

    submit() {
        let collection={}
        collection.title = this.state.title,
        collection.body = this.state.body

        // Fetch to URL
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Post
                    </Text>
                </View>
                <TextInput
                    placeholder="Title"
                    sytle={styles.inputTitle}
                    onChangeText={(text) => this.updateValue(text, 'title')}
                />
                <View style={{height: 50, marginHorizontal: "2%"}}>
                    <ScrollView
                        horizontal={true}
                        style={{height: 50}}
                        >
                        <TagSelect
                            data={this.state.tags}
                            ref={(tag) => {
                                this.tag = tag;
                            }}
                            onItemPress={() => {
                                let list = new Array();
                                this.tag.itemsSelected.map((item, index) =>
                                    list.push(item["label"])
                                );
                                    
                                this.selectTags(list);
                                
                            }}
                            containerStyle={{margin: 10, height: 50,}}
                        />
                    </ScrollView>
                </View>
                <TextInput
                    placeholder="Body"
                    sytle={styles.inputBody}
                    onChangeText={(text) => this.updateValue(text, 'title')}
                />
                <TouchableOpacity 
                    style={styles.postButton}
                    onPress={()=>this.submit()}
                >
                    <Text>Post</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    titleContainer: {
        marginTop: '2%',
        paddingVertical : '3%', 
        alignItems: 'flex-start', 
        paddingLeft: '3%',
    },
    title: {
        // fontFamily: 'Flottflott',
        fontSize: height * 0.05, 
        color: 'white',
        textShadowColor: "pink",
        textShadowOffset: {
            width: -1,
            height: 1
        },
        shadowOpacity: 0.3,
        textShadowRadius: 10,
        
    },
    inputTitle: {
        height: DEVICE['height'] * 0.03,
    },
    imputBody: {
        height: DEVICE['height'] * 0.4,
    },
    postButton: {
        backgroundColor: 'skyblue',
        height: DEVICE['height'] * 0.03,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

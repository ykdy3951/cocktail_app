import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class BoardScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Board!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
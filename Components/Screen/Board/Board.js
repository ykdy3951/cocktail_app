import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BoardScreen from './BoardScreen';
import BoardContentScreen from './BoardContent';
import BoardWriteScreen from './BoardWrite';

const Stack = createStackNavigator();

export default class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack.Navigator 
                initialRouteName="BoardMainScreen"
                screenOptions={{
                    headerShown: false,
                }}
                >
                <Stack.Screen name="Board" component={BoardScreen}/>
                <Stack.Screen name="Board Content" component={BoardContentScreen}/>
                <Stack.Screen name="Board Write" component={BoardWriteScreen}/>
            </Stack.Navigator>
        );
    }
}

export { Board };
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeScreen from './RecipeScreen';
import DetailScreen from '../Detail/DetailScreen';

const Stack = createStackNavigator();

export default class Recipe extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack.Navigator 
                initialRouteName="RecipeMainScreen"
                screenOptions={{
                    headerShown: false,
                }}
                >
                <Stack.Screen name="Recipe list" component={RecipeScreen}/>
                <Stack.Screen name="Detail View" component={DetailScreen}/>
            </Stack.Navigator>
        );
    }
}

export { Recipe };
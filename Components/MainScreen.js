import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Screen/Home/HomeScreen';
import BoardScreen from './Screen/Board/BoardScreen';
import ProfileScreen from './Screen/Profile/ProfileScreen';
import RecipeScreen from './Screen/Recipe/RecipeScreen';

const Tab = createBottomTabNavigator();

// Tab 별 icon 정해서 전달하는 방법 생각하기 버튼 눌렀을 때 효과 방법 알아오기
function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name = "Home" component = {HomeScreen} />
            <Tab.Screen name = "Recipe" component = {RecipeScreen}/> 
            <Tab.Screen name = "Board" component = {BoardScreen}/>
            <Tab.Screen name = "Profile" component = {ProfileScreen}/>
        </Tab.Navigator>
    );
}

export default function MainScreen() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}
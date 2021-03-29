import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { DefaultTheme, getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as ScreenOrientation from 'expo-screen-orientation';

import HomeScreen from './Screen/Home/HomeScreen';
import BoardScreen from './Screen/Board/BoardScreen';
import ProfileScreen from './Screen/Profile/ProfileScreen';
import Recipe from './Screen/Recipe/Recipe';
import RecipeScreen from './Screen/Recipe/RecipeScreen';
import { Ionicons } from '@expo/vector-icons';
import { TabRouter } from 'react-navigation';

const { height, width } = Dimensions.get("window");
const Tab = createBottomTabNavigator();

const myTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#474747',
        background: '#474747'
    },
};

function hideTabMenu(route) {
    const routeName = getFocusedRouteNameFromRoute(route);

    if(routeName === "Detail View") {
        return false;
    }
    else {
        return true;
    }
}

// Tab 별 icon 정해서 전달하는 방법 생각하기 버튼 눌렀을 때 효과 방법 알아오기
function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused ? "home" : "home-outline"; 
                } else if (route.name === 'Recipe') {
                    iconName = focused ? "md-book" : "md-book-outline"; 
                } else if (route.name === 'Board') {
                    iconName = focused ? "list-circle-sharp" : "list-circle-outline";
                } else if (route.name === 'Profile') {
                    iconName = focused ? "md-people" : "md-people-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              }, 
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: '#E3E3E3',
                style: {
                    backgroundColor: '#474747',
                    height: height * 0.06,
                }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component = {HomeScreen} 
            />
            <Tab.Screen 
                name="Recipe" 
                component = {Recipe}
                options={({route}) => (
                    {tabBarVisible : hideTabMenu(route)}
                )}
            /> 
            <Tab.Screen name="Board" component = {BoardScreen}/>
            <Tab.Screen name="Profile" component = {ProfileScreen}/>
        </Tab.Navigator>
    );
}

export default function MainScreen() {

    // React.useEffect(() => {
    //     lockOrientation()
    // }, [])

    // const lockOrientation = async () => {
    //     await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
    // }

    return (
        <NavigationContainer theme={myTheme}>
            <MyTabs/>
        </NavigationContainer>
    );
}
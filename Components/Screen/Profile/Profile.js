import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import ProfileID from '../Profile/ProfileID';
import ProfileCart from '../Profile/ProfileCart';
import ProfileBookmark from '../Profile/ProfileBookmark';
import ProfileMyFeed from '../Profile/ProfileMyFeed';

const Stack = createStackNavigator();

export default class Profile extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Stack.Navigator 
                initialRouteName="Profile"
                >
                <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Profile ID" component={ProfileID}/>
                <Stack.Screen name="Profile Cart" component={ProfileCart}/>
                <Stack.Screen name="Profile Bookmark" component={ProfileBookmark}/>
                <Stack.Screen name="Profile My Feed" component={ProfileMyFeed}/>
            </Stack.Navigator>
        );
    }
}
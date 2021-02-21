import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import TambahKontak from '../pages/TambahKontak';
import DetailKontak from '../pages/DetailKontak';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="TambahKontak" component={TambahKontak} />
            <Stack.Screen name="DetailKontak" component={DetailKontak} />
        </Stack.Navigator>
    )
}

export default Router

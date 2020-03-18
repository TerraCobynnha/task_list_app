import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Tasks from '../screens/Tasks';
import Collections from '../screens/Collections';
import Modification from '../screens/Modification';

// Icons 
import { Feather, AntDesign } from '@expo/vector-icons'

// Styles
import { taskStyles, colors } from '../shared/appStyles';

const Tabs = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tabs.Navigator
            initialRouteName="Tasks"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Tasks') {
                    iconName = 'home';
                    } else if (route.name === 'Collections') {
                    iconName = 'align-left';
                    } else if (route.name === 'Modification') {
                        iconName = 'pluscircle';
                        return <AntDesign style={{position: 'absolute', top: -23 }} name={iconName} size={50} color={color} />;
                    }
                    return <Feather name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: colors.tertiary,
                inactiveTintColor: colors.secondary,
                showLabel: false,
                style: taskStyles.tab
            }}
        >
            <Tabs.Screen 
                name="Collections" 
                component={Collections}
                options={{title: "Collections"}}
            />
            <Tabs.Screen name="Modification" component={Modification}/>
            <Tabs.Screen name="Tasks" component={Tasks}/>
        </Tabs.Navigator>
    );
}

export default BottomNav;
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import navigators
import StackNav from './stackNav'
import TopTabNav from './topTabNav'

import Ionicons from 'react-native-vector-icons/Ionicons'

const BottomTabNav = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "tomato",
                style: {
                    borderRadius: 15,
                    marginBottom: 20,
                    position: 'absolute',
                    marginHorizontal: 32
                }
            }}
            screenOptions={({ route }) => {
                return {
                    tabBarIcon: ({ size, color, focused }) => {
                        let iconName

                        if (route.name === "Timeline") {
                            iconName = focused ? "time" : "time-outline"
                        } else if (route.name === "Comments") {
                            iconName = focused ? "chatbubbles" : "chatbubbles-outline"
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                }
            }}
        >
            <Tab.Screen name="Timeline" component={StackNav} />
            <Tab.Screen name="Comments" component={TopTabNav} />
        </Tab.Navigator>
    )
}

export default BottomTabNav
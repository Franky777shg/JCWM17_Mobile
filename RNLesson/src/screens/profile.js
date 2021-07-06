import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

const Profile = ({ navigation, route }) => {
    const data = route.params

    return (
        <View>
            <Text style={{ fontSize: 25 }}>Profile Screens</Text>
            <Text style={{ fontSize: 25 }}>Username: {data.username}</Text>
            <Button
                title="Navigate to Home"
                onPress={() => navigation.navigate("Home", { previous: "Dapet Nih"})}
            />
        </View>
    )
}

export default Profile
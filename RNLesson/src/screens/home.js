import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList
} from 'react-native'

const Home = ({ navigation }) => {
    const users = [
        {
            username: 'Bill',
            id: 1
        },
        {
            username: 'Howard',
            id: 2
        },
        {
            username: 'Zoey',
            id: 3
        }
    ]
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 25 }}>Home Screens</Text>
            <Button
                title="Navigate to Profile"
                onPress={() => navigation.push("Profile", { username: 'Steve' })}
            />
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View style={styles.contuser}>
                        <Text>{item.username}</Text>
                        <Button
                            title="See Profile"
                            onPress={() => navigation.push("Profile", item)}
                        />
                    </View>
                )}
                style={{ marginTop: 20 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contuser: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    }
})

export default Home
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList
} from 'react-native'
import { BtnCustom } from '../components/btnCostum'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Home = ({ navigation, route }) => {
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
    const data = route.params

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 25 }}>Home Screens</Text>
            <Text>Data dari Profile: {data?.previous}</Text>
            <Button
                title="Navigate to Profile"
                onPress={() => navigation.push("Profile", { username: 'Steve' })}
            />
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View style={styles.contuser}>
                        <Text>{item.username}</Text>
                        {/* <Button
                            title="See Profile"
                            onPress={() => navigation.push("Profile", item)}
                        /> */}
                        <BtnCustom navToProfile={() => navigation.push("Profile", item)} />
                    </View>
                )}
                style={{ marginTop: 20 }}
            />
            <Ionicons name="home" size={40} color="orange"/>
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
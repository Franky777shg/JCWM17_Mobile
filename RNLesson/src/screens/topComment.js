import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    RefreshControl,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native'
import Axios from 'axios'

const TopComment = () => {
    // const listProduct = []
    const [listProduct, setListProduct] = useState([])
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [data, setData] = useState("")
    const URL_API = 'http://localhost:2000'

    const fetchData = () => {
        Axios.get(`${URL_API}/products`)
            .then(res => {
                // console.log(res.data)
                setListProduct(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const onRefreshing = () => {
        setIsRefreshing(true)
        Axios.get(`${URL_API}/products`)
            .then(res => {
                // console.log(res.data)
                setListProduct(res.data)
                setIsRefreshing(false)
            })
            .catch(err => {
                console.log(err)
                setIsRefreshing(false)
            })
    }

    const onDelete = (id) => {
        Axios.delete(`${URL_API}/products/${id}`)
            .then(() => {
                fetchData()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onSend = () => {
        Axios.post(`${URL_API}/products`, { name: data })
        .then(() => {
            fetchData()
            setData("")
            Keyboard.dismiss()
        })
    }

    return (
        <View style={{ backgroundColor: 'lightblue', flex: 1, paddingHorizontal: 16 }}>
            <Text style={{ fontSize: 25, marginBottom: 25 }}>Top Comment Screen</Text>
            <View style={styles.textinput}>
                <TextInput
                    placeholder="Input Data"
                    value={data}
                    onChangeText={text => setData(text)}
                    style={{ width: 200 }}
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={onSend}
                >
                    <Text>Send</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={listProduct}
                renderItem={({ item }) => (
                    <View style={styles.list}>
                        <Text>{item.name}</Text>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => onDelete(item.id)}
                        >
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
                refreshControl={
                    <RefreshControl refreshing={isRefreshing} onRefresh={onRefreshing} />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#ffffff',
        marginVertical: 5,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        borderRadius: 5
    },
    btn: {
        backgroundColor: 'salmon',
        height: 35,
        width: 60,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textinput: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 8,
        borderRadius: 8,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})

export default TopComment
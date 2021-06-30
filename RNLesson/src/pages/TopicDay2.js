import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';

// import themes
import { margin } from '../styles/spacing'
import { backgroundColor } from '../styles/coloring'

const ContohComponent = () => {
    // useEffect menjadi seperti componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('will unmount')
        }
    }, [])

    return (
        <View style={{ ...styles.container, ...margin.m4, ...backgroundColor.thirdColor }}>
            <Text style={{ fontSize: 50 }}>Contoh Component</Text>
        </View>
    )
}

const TopicDay1 = () => {
    const [user, setUser] = useState('')
    const [result, setResult] = useState('RESULT')
    const [show, setShow] = useState(true)

    const onSubmit = () => {
        // console.log('trigered')

        // merubah variabel result menjadi hasil input yang sudah di ketik oleh user
        setResult(user)
    }

    // useEffect biasa
    // useEffect(() => {
    //     console.log('useEffect')
    // })

    // useEffect menjadi seperti componentDidMount
    // useEffect(() => {
    //     console.log('did mount')
    // }, [])

    // useEffect menjadi seperti componentDidUpdate
    // useEffect(() => {
    //     console.log('did update')
    // }, [user])

    return (
        <View>
            <View style={{ ...styles.container, ...margin.m4, ...backgroundColor.thirdColor }}>
                <Text style={{ fontSize: 50 }}>Hello World</Text>
                <Text style={{ fontSize: 20 }}>Hai</Text>
            </View>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                onChangeText={(text) => setUser(text)}
            />
            <Button title="Submit" onPress={onSubmit} />
            <Button title="Hide Component" onPress={() => setShow(false)} />

            <Text style={{ fontSize: 25 }}>{result}</Text>
            {show ? <ContohComponent /> : null}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 5,
        borderStyle: 'solid',
        // marginVertical: 10
    }
})

export default TopicDay1;
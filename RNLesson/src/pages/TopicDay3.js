import React from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    FlatList
} from 'react-native'
import natureImg from '../assets/images/nature.jpg'

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const TopicDay3 = () => {
    const DATA = [
        "mobil", "motor", "sepeda", "mobil", "motor", "sepeda", "mobil", "motor", "sepeda", "mobil", "motor", "sepeda"
    ]
    return (
        <View style={{}}>
            <Text style={{ fontSize: 25 }}>Flat List</Text>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <Item title={item} />
                )}
                keyExtractor={(item, index) => index}
            />
            {/* <Text style={{ fontSize: 25 }}>Offline Image</Text>
            <Image
                style={{ height: 300, width: 300, backgroundColor: 'salmon' }}
                source={natureImg}
                resizeMode="contain"
            />
            <Text style={{ fontSize: 25 }}>Web Image</Text>
            <Image
                style={{ height: 300, width: 300, backgroundColor: 'salmon' }}
                source={{
                    uri: 'https://pbs.twimg.com/media/EzlJdc-WYAA8u9L.jpg'
                }}
                resizeMode="contain"
            /> */}
            {/* <Text style={{ fontSize: 25 }}>Scroll View</Text>
            <Image
                style={{ height: 300, width: 300, backgroundColor: 'salmon' }}
                source={{
                    uri: 'https://pbs.twimg.com/media/EzlJdc-WYAA8u9L.jpg'
                }}
                resizeMode="contain"
            />
            <Image
                style={{ height: 300, width: 300, backgroundColor: 'salmon' }}
                source={{
                    uri: 'https://pbs.twimg.com/media/EzlJdc-WYAA8u9L.jpg'
                }}
                resizeMode="contain"
            />
            <Image
                style={{ height: 300, width: 300, backgroundColor: 'salmon' }}
                source={{
                    uri: 'https://pbs.twimg.com/media/EzlJdc-WYAA8u9L.jpg'
                }}
                resizeMode="contain"
            />
            <Image
                style={{ height: 300, width: 300, backgroundColor: 'salmon' }}
                source={{
                    uri: 'https://pbs.twimg.com/media/EzlJdc-WYAA8u9L.jpg'
                }}
                resizeMode="contain"
            /> */}

        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default TopicDay3
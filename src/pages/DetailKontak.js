import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import firebase from '../config/firebase';

const DetailKontak = ({route}) => {

    const [kontak, setKontak] = useState({});

    useEffect(() => {
        firebase.database()
            .ref('Kontak/'+ route.params.id)
            .once('value', (querySnapShot) => {

                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let kontakItem = {...data};

                setKontak(kontakItem);
            })
    }, []);

    return (
        <View style={styles.pages}>
            <Text>Name : </Text>
            <Text style={styles.text}>{kontak.name}</Text>

            <Text>Phone : </Text>
            <Text style={styles.text}>{kontak.phone}</Text>

            <Text>Address : </Text>
            <Text style={styles.text}>{kontak.address}</Text>
        </View>
    )
}

export default DetailKontak

const styles = StyleSheet.create({
    pages: {
        padding: 20,
        margin: 30,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    }
})

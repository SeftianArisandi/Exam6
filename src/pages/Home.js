import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import firebase from '../config/firebase';
import CardKontak from '../components/CardKontak';

const Home = ({navigation}) => {

    const [kontaks, setKontaks] = useState({});
    const [kontaksKey, setKontaksKey] = useState([]);

    useEffect(() => {
        getData();
    }, []);
    
    function getData() {
        firebase.database()
        .ref('Kontak')
        .once('value', (querySnapShot) => {
            
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let kontakItem = {...data};
            
            setKontaks(kontakItem);
            setKontaksKey(Object.keys(kontakItem));
        })
    };

    function removeData(id) {
        Alert.alert(
            "Info",
            "Anda yakin ingin menghapus data kontak ?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { 
                    text: "OK", onPress: () => {
                        firebase.database()
                            .ref('Kontak/'+id)
                            .remove()
                            .then(function() {
                                console.log("Remove succeeded.")
                                getData();
                            })
                            .catch(function(error) {
                                console.log("Remove failed: " + error.message)
                            });
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.title}>Daftar Kontak</Text>
                <View style={styles.divider}/>
            </View>

            <View style={styles.listKontak}>
                {kontaksKey && kontaksKey.map((key) => (
                    <CardKontak 
                        key={key} 
                        kontakItem={kontaks[key]}
                        id={key} 
                        move={() => navigation.navigate('DetailKontak', {id: key})}
                        removeData={() => {removeData(key)}}
                    />
                ))}
            </View>

            <View style={styles.wrapperButton}>
                <TouchableOpacity style={styles.btnTambah} onPress={() => navigation.navigate('TambahKontak')}>
                    <FontAwesomeIcon icon={faPlus} size={20} color={'white'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    header: {
        paddingHorizontal: 30,
        paddingTop: 30
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    divider: {
        borderWidth: 1,
        marginTop: 10
    },
    listKontak: {
        paddingHorizontal: 30,
        marginTop: 20
    },
    wrapperButton: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 30
    },
    btnTambah: {
        padding: 20,
        backgroundColor: 'lightblue',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    }

})

export default Home

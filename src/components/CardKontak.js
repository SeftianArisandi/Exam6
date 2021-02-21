import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

const CardKontak = ({kontakItem, move, removeData}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={move}>
            <View>
                <Text style={styles.name}>{kontakItem.name}</Text>
                <Text style={styles.phone}>Phone : {kontakItem.phone}</Text>
            </View>
            <View style={styles.icon}>
                <FontAwesomeIcon icon={faEdit} color={'green'} size={25} />
                <FontAwesomeIcon icon={faTimes} color={'red'} size={25} onPress={removeData} />
            </View>
        </TouchableOpacity>
    )
}

export default CardKontak

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'lightblue',
        borderRadius: 5,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    },
    name: {
        fontWeight: "bold",
        fontSize: 16
    },
    phone: {
        fontSize: 12,
        color: 'grey'
    },
    icon: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})

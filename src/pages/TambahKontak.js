import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Alert } from 'react-native';
import InputData from '../components/InputData';
import firebase from '../config/firebase';

const TambahKontak = ({navigation}) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const CreateData = () => {
        if(name && phone && address){
            const kontakReferensi = firebase.database().ref('Kontak');
            const kontak = {
                name: name,
                phone: phone,
                address: address
            }

            kontakReferensi
                .push(kontak)
                .then((data) => {
                    Alert.alert('Success', 'Kontak tersimpan');
                    navigation.navigate('Home');
                })
                .catch((error) => {
                    console.log('Error : ', error);
                })  
        }else{
            Alert.alert('Error', 'Semua data wajib di-isi');
        }
    }

    return (
        <View style={styles.pages}>
            <Text style={styles.label}>Name :</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Input Name'
                value={name}
                onChangeText={(value) => setName(value)}
            />
            <Text style={styles.label}>Phone :</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Input Phone Number'
                keyboardType='number-pad'
                value={phone}
                onChangeText={(value) => setPhone(value)}
            />
            <Text style={styles.label}>Address :</Text>
            <TextInput
                style={styles.textInputArea}
                placeholder='Input Address'
                multiline={true}
                numberOfLines={4}
                value={address}
                onChangeText={(value) => setAddress(value)}
            />
            <TouchableOpacity style={styles.tombol} onPress={CreateData}>
                <Text style={styles.textTombol}>Submit</Text>
            </TouchableOpacity>
            
            {/* <InputData 
                label="Name :" 
                placeholder="Input Name" 
                value={name} 
                onChange={setName} 
            />
            <InputData 
                label="Phone Number :" 
                placeholder="Input Phone" keyboardType="number-pad" 
                value={phone} 
                onChange={setPhone}
            />
            <InputData 
                label="Address :" 
                placeholder="Input Address" 
                isTextArea="true" 
                value={address} 
                onChange={setAddress}
            /> */}
        </View>
    )
}

export default TambahKontak

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        padding: 30
    },
    tombol: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    textTombol: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    },
    label: {
        fontSize: 16,
        marginBottom: 5
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        padding:10,
        marginBottom: 10
    },
    textInputArea: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        padding:10,
        marginBottom: 10,
        textAlignVertical: 'top'
    }
})

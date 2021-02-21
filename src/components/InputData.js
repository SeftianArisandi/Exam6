import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'

const InputData = ({label, placeholder, keyboardType, isTextArea, onChange, value}) => {

    if (isTextArea) {
        return (
            <>
                <Text style={styles.label}>{label}</Text>
                <TextInput 
                    multiline={true}
                    numberOfLines={4}
                    style={styles.textInputArea} 
                    placeholder={placeholder} 
                    keyboardType={keyboardType}
                    value={value}
                    onChangeText={onChange}
                />
            </>
        )
    }

    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                style={styles.textInput} 
                placeholder={placeholder} 
                keyboardType={keyboardType}
                value={value}
                onchange={(e) => {setState(e.target.value)}}
            />
        </>
    )
}

export default InputData

const styles = StyleSheet.create({
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

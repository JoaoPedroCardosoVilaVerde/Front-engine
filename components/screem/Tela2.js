import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AutenticationContext';

export default function Tela2(props) {
    const { data } = useContext(AuthContext);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.confirmationText}>Sua Viagem de {data.name} foi confirmada.</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Transloka")}>
                <Text style={styles.buttonText}>Caxa!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#feb47b',
        padding: 20,
    },
    confirmationText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    },
    button: {
        backgroundColor: '#ff7e5f',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

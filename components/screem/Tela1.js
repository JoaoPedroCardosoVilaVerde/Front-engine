import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../context/AutenticationContext';
import { useNavigation } from '@react-navigation/native';

export default function Tela1(props) {
    const { data, setData } = useContext(AuthContext);
    const navigation = useNavigation();

    const handlePress = (name) => {
        setData({ name });
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.routeTitle}>Itabira para Belo Horizonte</Text>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Itabira para Belo Horizonte")}>
                    <Text style={styles.buttonText}>Valor de R$ 60</Text>
                </TouchableOpacity>
                
                <Text style={styles.routeTitle}>Itabira para Três Rios</Text>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Itabira para Três Rios")}>
                    <Text style={styles.buttonText}>Valor de R$ 202</Text>
                </TouchableOpacity>
                
                <Text style={styles.routeTitle}>Itabira para Rio de Janeiro</Text>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Itabira para Rio de Janeiro")}>
                    <Text style={styles.buttonText}>Valor de R$ 233</Text>
                </TouchableOpacity>
                
                <Text style={styles.routeTitle}>Itabira para Natal</Text>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Itabira para Natal")}>
                    <Text style={styles.buttonText}>Valor de R$ 843</Text>
                </TouchableOpacity>
                
                <Text style={styles.routeTitle}>Itabira para São Paulo</Text>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Itabira para São Paulo")}>
                    <Text style={styles.buttonText}>Valor de R$ 193</Text>
                </TouchableOpacity>
                
                <Text style={styles.routeTitle}>Itabira para São João Del Rei</Text>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Itabira para São João Del Rei")}>
                    <Text style={styles.buttonText}>Valor de R$ 150</Text>
                </TouchableOpacity>
                
                <View style={styles.spacer}></View>
                
                <Text style={styles.summary}>Sua Viagem de {data.name}</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Confirmado!")}>
                    <Text style={styles.buttonText}>Confirmar?</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#feb47b',
    },
    scrollContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    routeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    },
    summary: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    },
    spacer: {
        height: 40,
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

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleLogout = async() => {
        await signOut(auth)
    }

    return (
        <SafeAreaView className="flex-1 items-center justify-center" style={styles.pageBackground}>
            <View style={styles.entirePage}>
                <Text style={styles.text}>Home Screen</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    entirePage: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
    },
    pageBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7B71F9',
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#F8C413',
        padding: 10,
        borderRadius: 10,
        height: 50,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
})

export default HomeScreen;
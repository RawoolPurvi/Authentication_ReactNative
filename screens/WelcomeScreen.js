import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className="flex-1 items-center justify-center" style={styles.pageBackground}>
            <View style={styles.entirePage}>
                <Text style={styles.text}>Let's Get Started !</Text>
                <View style={styles.imgView}>
                    <Image source={require('../assets/homePage.png')} style={{width: 300, height: 300}} />
                </View>
                <View style={styles.bottomGroup}>
                    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Signup')}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <View style={styles.logIn}>
                        <Text style={styles.logInPrompt}>Already have an account? </Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                            <Text style={styles.logInText}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}   

const styles = StyleSheet.create({
    entirePage:{
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
    text:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imgView:{
        justifyContent: 'center',
    },
    button:{
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
    buttonText:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    bottomGroup:{
        alignItems: 'center',
        gap: 10,
    },
    logIn:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    logInPrompt:{
        color: 'white',
    },
    logInText:{
        color: '#F8C413',
        fontWeight: 'bold',
    }
})

export default WelcomeScreen;
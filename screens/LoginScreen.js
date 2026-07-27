import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.pageBackground}>
            <View style={styles.topSection}>
                <Image source={require('../assets/loginPageImg.png')} style={styles.image} />
            </View>
            <View style={styles.card}>
                <Text style={styles.emailText}>Email</Text>
                <TextInput placeholder="Enter email" placeholderTextColor="#a0a0a0" style={styles.input} />
                <Text style={styles.emailText}>Password</Text>
                <TextInput placeholder="Enter password" placeholderTextColor="#a0a0a0" style={styles.input} secureTextEntry />
                <TouchableOpacity style={styles.forgotPasswordButton}>
                    <Text>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.SignIn}>
                    <Text style={styles.SignInPrompt}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.replace('Signup')}>
                        <Text style={styles.SignInText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    pageBackground: {
        flex: 1,
        backgroundColor: '#7B71F9',
    },
    topSection: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    card: {
        flex: 0.6,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 32,
        paddingTop: 36,
    },
    emailText: {
        marginLeft: 10,
        color: 'black',
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'Poppins',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#e5e6e8',
        borderRadius: 12,
        padding: 15,
        marginBottom: 16,
        backgroundColor: '#e5e6e8',
        fontFamily: 'Poppins',
        color: '#1f2328',
    },
    forgotPasswordButton: {
        alignSelf: 'flex-end',
        marginBottom: 16,
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
    SignIn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    SignInPrompt: {
        color: 'black',
    },
    SignInText: {
        color: '#F8C413',
        fontWeight: 'bold',
    }
});

export default LoginScreen;
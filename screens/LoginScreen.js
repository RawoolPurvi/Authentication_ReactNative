import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const LoginScreen = () => {
    const navigation = useNavigation();

     const [email, setEmail] = React.useState('');
        const [password, setPassword] = React.useState('');
        const [emailError, setEmailError] = React.useState('');
        const [passwordError, setPasswordError] = React.useState('');
    
        const handleSubmit = async() => {
            setEmailError('');
            setPasswordError('');
            if(!email){
                setEmailError('Please fill in your email.');
                return;
            }
            if(!password){
                setPasswordError('Please fill in your password.');
                return;
            }
            try{
                await signInWithEmailAndPassword(auth, email, password);
            }catch(err){
                switch(err.code){
                    case 'auth/invalid-email':
                    case 'auth/user-not-found':
                        setEmailError('No account found with this email.');
                        break;
                    case 'auth/wrong-password':
                    case 'auth/invalid-credential':
                        setPasswordError('Incorrect password. Please try again.');
                        break;
                    default:
                        setPasswordError(err.message);
                }
            }
        };
    return (
        <SafeAreaView style={styles.pageBackground}>
            <View style={styles.topSection}>
                <Image source={require('../assets/loginPageImg.png')} style={styles.image} />
            </View>
            <View style={styles.card}>
                <Text style={styles.emailText}>Email</Text>
                <TextInput placeholder="Enter email" placeholderTextColor="#a0a0a0" style={[styles.input, emailError ? styles.inputError : null]} value={email} onChangeText={value => setEmail(value)} />
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                <Text style={styles.emailText}>Password</Text>
                <TextInput placeholder="Enter password" placeholderTextColor="#a0a0a0" style={[styles.input, passwordError ? styles.inputError : null]} value={password} onChangeText={value => setPassword(value)} secureTextEntry />
                {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                <TouchableOpacity style={styles.forgotPasswordButton}>
                    <Text>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
        marginBottom: 4,
        backgroundColor: '#e5e6e8',
        fontFamily: 'Poppins',
        color: '#1f2328',
    },
    inputError: {
        borderColor: '#e53935',
    },
    errorText: {
        color: '#e53935',
        fontSize: 12,
        marginBottom: 10,
        marginLeft: 4,
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
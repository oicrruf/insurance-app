import React from 'react';
import { View, StyleSheet } from 'react-native';
import {  
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { Button } from '@rneui/themed';

const Login = ({ navigation }) => {
    return (
        <View style = {styles.container}>
            <Button
                title = {'Iniciar sesión'}
                containerStyle = {styles.buttonContainer}
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title = {'Registrarse'}
                containerStyle = {styles.buttonContainer}
                onPress={() => navigation.navigate('Register')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('100%'),
        width: wp('100%')
    },
    buttonContainer: {
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10
    }
});

export default Login 
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {  
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { Text } from '@rneui/themed';

const Register = () =>{
    return (
        <View style = {styles.container}>
            <Text>Register</Text>
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
    }
})

export default Register;
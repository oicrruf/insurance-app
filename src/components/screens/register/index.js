import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {  
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { Text, Button, Input } from '@rneui/themed';
import {Formik} from 'formik';
import * as Yup from 'yup';
import messages from '../../../utils/messages.json'

const SignupSchema = Yup.object().shape({
	email: Yup.string()
        .email(messages['es'].emailValidation.validLength)
        .required(messages['es'].isRequired),
	password: Yup.string()
        .min(8, messages['es'].passwordValidation.validLength)
		.required(messages['es'].isRequired),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], messages['es'].passwordValidation.isMatch)
		.required(messages['es'].isRequired)
});

const Register = () =>{
    return (
        <Formik
            initialValues = {{email: '', password: '', passwordConfirm: ''}}
            validationSchema = {SignupSchema}
            onSubmit = { values => {
                console.log(values);
            }}>
            {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                <View style = {styles.container}>
                    <Text>Register</Text>
                    <Input
                        placeholder="Email"
                        onChangeText={handleChange('email')}
						onBlur={handleBlur('email')}
						value={values.email}
						errorMessage={errors.email && touched.email ? errors.email : ''}
                    />
                    <Input
                        secureTextEntry={true}
                        placeholder="Contraseña"
                        onChangeText={handleChange('password')}
						onBlur={handleBlur('password')}
						value={values.password}
						errorMessage={
							errors.password && touched.password ? errors.password : ''
						}
                    />
                    <Input
                        secureTextEntry={true}
                        placeholder="Confirmacion de contraseña "
                        onChangeText={handleChange('passwordConfirm')}
						onBlur={handleBlur('passwordConfirm')}
						value={values.passwordConfirm}
						errorMessage={
							errors.passwordConfirm && touched.passwordConfirm ? errors.passwordConfirm : ''
						}
                    />
                    <Button
                        title="Registrarse"
                        onPress={handleSubmit}
                    />
                </View>
            )}
		</Formik>
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
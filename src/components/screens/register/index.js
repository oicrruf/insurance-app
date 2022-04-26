import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {  
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { Text, Button, Input } from '@rneui/themed';
import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
	email: Yup.string()
        .email('Email invalido')
        .required('Este campo es requerido'),
	password: Yup.string()
		.min(8, 'La contraseña es demasiado corta')
		.required('Este campo es requerido'),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], 'La contraseña no coincide')
		.required('Este campo es requerido')
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
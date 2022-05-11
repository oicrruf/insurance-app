import {Formik} from 'formik';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as Yup from 'yup';
import messages from '../../../utils/messages.json';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email(messages.es.emailValidation.validLength)
    .required(messages.es.isRequired),
  password: Yup.string()
    .min(8, messages.es.passwordValidation.validLength)
    .required(messages.es.isRequired),
});

const Login = ({navigation}) => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={SignInSchema}
      onSubmit={values => {
        console.log(values);
        navigation.navigate('Home');
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
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
          <Button
            title={'Iniciar sesión'}
            containerStyle={styles.buttonContainer}
            onPress={handleSubmit}
          />
          <Button
            title={'Registrarse'}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('100%'),
    width: wp('100%'),
  },
  buttonContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
});

export default Login;

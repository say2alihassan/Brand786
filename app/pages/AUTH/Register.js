import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../ui/CustomInput';

import {RegisterRequest} from '../../services/authService';
import {ROUTES} from '../../utils/Routes';
import CustomButton from '../../ui/CustomButton';

const Register = ({navigation}) => {
  const [values, setVALUE] = useState({
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [Loading, setLoading] = useState(false);

  function REGISTER_API() {
    console.log(values, 'dksdj');

    if (
      values.email !== '' ||
      values.password !== '' ||
      values.password_confirmation !== ''
    ) {
      setLoading(true);
    }

    try {
      RegisterRequest(values)
        .then(res => {
          console.log(res.data);
          if (res.data.success == true) {
            navigation.navigate(ROUTES.LOGIN);
            setLoading(false);
          }
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    } catch (error) {
      console.log('Error====>', error.message);
      setLoading(false);
    }
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <CustomInput
        placeHolder="Your Email address"
        type="email-address"
        value={values.email}
        onChangeText={val =>
          setVALUE({
            ...values,
            email: val,
          })
        }
      />

      <CustomInput
        placeHolder="Password "
        secure
        value={values.password}
        onChangeText={val =>
          setVALUE({
            ...values,
            password: val,
          })
        }
      />
      <View></View>
      <CustomInput
        placeHolder="confirm Pasword"
        secure
        value={values.password_confirmation}
        onChangeText={val =>
          setVALUE({
            ...values,
            password_confirmation: val,
          })
        }
      />

      <CustomButton
        title="Register"
        onPress={() => REGISTER_API()}
        loading={Loading}
        disable={
          values.email == '' ||
          (values.password == '' && values.password_confirmation == '')
            ? true
            : false
        }
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});

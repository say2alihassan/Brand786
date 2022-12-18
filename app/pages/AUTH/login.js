import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../ui/CustomInput';
import {colors} from '../../themes/Colors';
import {useDispatch} from 'react-redux';
import {loginRequest} from '../../services/authService';
import {ROUTES} from '../../utils/Routes';
import {setAuthToken} from '../../store/reducers/userReducer';
import CustomButton from '../../ui/CustomButton';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [values, setVALUE] = useState({
    email: '',
    password: '',
  });
  const [Loading, setLoading] = useState(false);

  function Login_API() {
    console.log('dsd');

    console.log(values, 'dksdj');

    setLoading(true);
    try {
      loginRequest(values)
        .then(res => {
          console.log(res.data.user.token);
          if (res.data) {
            dispatch(setAuthToken(res.data.user.token));
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

      <CustomButton
        title="Login"
        onPress={() => Login_API()}
        loading={Loading}
        disable={values.email == '' || values.password == '' ? true : false}
      />
      <Text
        style={STYLES.Register}
        onPress={() => navigation.navigate(ROUTES.REGISTER)}>
        Register
      </Text>
    </View>
  );
};

export default Login;

const STYLES = StyleSheet.create({
  Register: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '400',
    marginTop: 20,
  },
});

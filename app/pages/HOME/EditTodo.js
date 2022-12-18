import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../ui/CustomInput';

import {useAppSelector} from '../../store';

import {addTodo} from '../../services/generalservice';

import {ROUTES} from '../../utils/Routes';
import {updateTodo} from '../../services/generalservice';
import CustomButton from '../../ui/CustomButton';
const EditTodo = ({navigation, route}) => {
  let VALUE = route?.params;

  const {authToken} = useAppSelector(state => state.root.user);
  const [values, setVALUE] = useState({
    title: VALUE?.item?.title || '',
    description: VALUE?.item?.description || '',
  });

  async function ADD_TODO() {
    let VAL = {
      title: values.title,
      description: values.description,
      authtoken: authToken,
      id: VALUE?.item ? VALUE.item.id : '',
    };

    let params = {
      description: values.description,
    };

    let userUpdateCreate = VALUE?.item
      ? updateTodo(VAL.id, params)
      : addTodo(VAL);
    userUpdateCreate
      .then(res => {
        console.log(res.data, 'skjdks');
        navigation.navigate(ROUTES.MAIN_TODO, {refresh: 'true'});
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <CustomInput
        placeHolder="title"
        value={values.title}
        onChangeText={val =>
          setVALUE({
            ...values,
            title: val,
          })
        }
      />

      <CustomInput
        placeHolder="description "
        value={values.description}
        onChangeText={val =>
          setVALUE({
            ...values,
            description: val,
          })
        }
      />
      <View></View>

      <CustomButton
        title={VALUE?.item ? 'Update Todo' : 'Add Todo'}
        onPress={() => ADD_TODO()}
      />
    </View>
  );
};

export default EditTodo;

const styles = StyleSheet.create({});

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {ROUTES} from '../../utils/Routes';
import {getTodo} from '../../services/generalservice';
import {useAppSelector} from '../../store';
import {setAuthToken} from '../../store/reducers/userReducer';
import {colors} from '../../themes/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {logOutRequest} from '../../services/authService';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../../services/generalservice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomInput from '../../ui/CustomInput';
import CustomButton from '../../ui/CustomButton';

const MainTodo = ({navigation, route}) => {
  let dispatch = useDispatch();
  const {authToken} = useAppSelector(state => state.root.user);
  const [DATA, setDATA] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState('');
  function delete_ITEM(item) {
    deleteTodo(item.id)
      .then(res => {
        GETTODO();
      })
      .catch(err => {
        console.log(err);
      });
  }
  function GETTODO() {
    getTodo()
      .then(res => {
        setDATA(res.data.items.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  useEffect(() => {
    GETTODO();
  }, [route?.params]);

  const RENDERITEM = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.EDIT_TODO, {item})}>
          <View style={STYLES.renderItem}>
            <View style={{width: 200}}>
              <Text style={STYLES.BLACK}>{item?.title} </Text>
              <Text style={STYLES.BLACK}>{item?.description} </Text>
            </View>
            <TouchableNativeFeedback onPress={() => delete_ITEM(item)}>
              <Icon
                name="delete"
                color={colors.primary}
                size={50}
                style={{height: 100, width: 100}}
              />
            </TouchableNativeFeedback>
          </View>
        </TouchableOpacity>
      );
    },
    [DATA],
  );
  const ITEMSEPERATOR = useCallback(() => {
    return <View style={{height: 20}} />;
  }, [DATA]);
  const LOGOUT = () => {
    setLoading(true);
    let TOKEN = {
      token: authToken,
    };
    console.log(TOKEN, 'sdk');
    logOutRequest(TOKEN)
      .then(res => {
        console.log(res, 'RESPONSE LOGIN');
        dispatch(setAuthToken(''));
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const SEARCHFILTER = value => {
    if (value) {
      const newData = DATA.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = value.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });
      setDATA(newData);
      setSearchData(value);
    } else {
      GETTODO();
      setSearchData(value);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <CustomInput
          placeHolder={'Search here.....'}
          value={searchData}
          onChangeText={text => SEARCHFILTER(text)}
        />
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <CustomButton
          title={'Add Todo'}
          onPress={() => navigation.navigate(ROUTES.EDIT_TODO)}
          style={[STYLES.Button]}
        />
        <CustomButton
          title={'Logout'}
          onPress={() => LOGOUT()}
          style={STYLES.Button}
          loading={Loading}
        />
      </View>

      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          keyExtractor={(item, index) => `${index}`}
          renderItem={RENDERITEM}
          ItemSeparatorComponent={ITEMSEPERATOR}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainTodo;

const STYLES = StyleSheet.create({
  renderItem: {
    height: 100,
    width: 300,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.BLUE,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Button: {
    width: 100,
  },
  BLACK: {
    color: colors.BLACK,
  },
});

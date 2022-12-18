import {Dimensions} from 'react-native';
import {BarIndicator, SkypeIndicator} from 'react-native-indicators';

export const units = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
export const Indicator = ({name, color, size}) => {
  if (name === 'bar') {
    return <BarIndicator color={color} size={size ? size : 40} />;
  } else {
    return <SkypeIndicator color={color} size={size ? size : 40} />;
  }
};

import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

const normalize = (size: number) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

const elipsisText = (text: string, lengthText: number): string =>
  text?.length > lengthText ? text.substring(0, lengthText - 3) + '...' : text;


const kelvinToCelcius = (kelvin:number) => {
  return (kelvin - 273.15).toFixed(0)+'°C'
}

const meterToKilo = (meter:number) => {
  const kilometers = meter / 1000;
  return kilometers.toFixed(1) + 'km'
}


export {normalize, elipsisText,kelvinToCelcius,meterToKilo};

import React from 'react';
import {StyleSheet, Image} from 'react-native';

interface IExampleImageProps {
  widthProp: number;
  heightProp: number;
}

const ExampleImage = ({widthProp, heightProp}: IExampleImageProps) => {
  return (
    <Image
      style={[styles.image, {width: widthProp, height: heightProp}]}
      source={require('../img/image_not_found.png')}
    />
  );
};

export default ExampleImage;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',

    borderWidth: 1,
    borderColor: 'black',
  },
});

import React from 'react';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';

import {Introduction, TaskTip, ToHomeScreen} from '.';

const PresentationSwiper = () => {
  const navigation = useNavigation();
  return (
    <Swiper loop={false}>
      <Introduction header={''} image={} />
      <TaskTip header={''} image={} footer={''} />
      <ToHomeScreen
        header={''}
        image={}
        onPress={() => navigation.navigate('home')}
      />
    </Swiper>
  );
};

export default PresentationSwiper;

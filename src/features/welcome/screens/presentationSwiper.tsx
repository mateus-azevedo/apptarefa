import React from 'react';
import Swiper from 'react-native-swiper';

import {Introduction, TaskTip, ToHomeScreen} from '.';

const PresentationSwiper = () => {
  return (
    <Swiper loop={false}>
      <Introduction />
      <TaskTip />
      <ToHomeScreen />
    </Swiper>
  );
};

export default PresentationSwiper;

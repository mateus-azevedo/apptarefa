import React, {useState} from 'react';
import Swiper from 'react-native-swiper';

import {Introduction, TaskTip, ToHomeScreen} from '.';

const PresentationSwiper = () => {
  const [hasPagination, setHasPagination] = useState(true);

  const changePagination = (value: boolean) => {
    hasPagination === value ? setHasPagination(false) : setHasPagination(true);
  };

  return (
    <Swiper loop={false} showsPagination={hasPagination}>
      <Introduction />
      <TaskTip pagination={changePagination} />
      <ToHomeScreen pagination={changePagination} />
    </Swiper>
  );
};

export default PresentationSwiper;

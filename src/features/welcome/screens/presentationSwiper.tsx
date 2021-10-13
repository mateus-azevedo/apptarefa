import React from 'react';
import Swiper from 'react-native-swiper';
// import {useNavigation} from '@react-navigation/native';

// import {Introduction, TaskTip, ToHomeScreen} from '.';
import Panel from '../components/panel';

const PresentationSwiper = () => {
  // const navigation = useNavigation();

  return (
    <Swiper loop={false}>
      <Panel title={'Teste Title1'} footer={'Teste Footer1'} />
      <Panel title={'Teste Title2'} footer={'Teste Footer2'} />
      {/* <Introduction header={''} image={} />
      <TaskTip header={''} image={} footer={''} />
      <ToHomeScreen
        header={''}
        image={}
        onPress={() => navigation.navigate('home')}
      /> */}
    </Swiper>
  );
};

export default PresentationSwiper;

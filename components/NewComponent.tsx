import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {View, Text} from 'react-native';

type user = {
  username: string;
  email: string;
};
const NewComponent = () => {
  const myDatas = useSelector<RootState, user>(state => state.users);
  return (
    <View>
      <Text>{myDatas.username}</Text>
      <Text>{myDatas.email}</Text>
    </View>
  );
};

export default NewComponent;

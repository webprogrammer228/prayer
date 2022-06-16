import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Col, ColumnsInitialState, RootStackParamList} from '../types/type';
import {RootState} from '../store';
import {getColumns} from '../store/actionCreators';
import {styles} from '../styles/styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type DataType = {
  state: ColumnsInitialState;
};

const Item = ({
  item,
  onPress,
  backgroundColor,
  textColor,
}: {
  item: Col;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
}) => (
  <TouchableOpacity onPress={onPress} style={{...styles.todo, backgroundColor}}>
    <Text style={{...styles.formSubHeader, color: textColor}}>
      {item.title}
    </Text>
  </TouchableOpacity>
);
type Props = NativeStackScreenProps<RootStackParamList, 'MyDesk'>;

const MyDesk = ({navigation}: Props) => {
  const boards = useSelector<RootState, DataType>(store => store.columns);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => dispatch(getColumns()))();
  }, []);

  const [selectedId, setSelectedId] = useState<null | number>(null);

  const renderItem = ({item}: {item: Col}) => {
    const backgroundColor = item.id === selectedId ? '#E5E5E5' : '#FFFFFF';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={boards.state}
        renderItem={renderItem}
        keyExtractor={item => {
          if (item.id) {
            return item.id.toString();
          } else {
            throw new Error('пришло значение нулл');
          }
        }}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default MyDesk;

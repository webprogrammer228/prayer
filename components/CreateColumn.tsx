import React, {useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {styles} from '../styles/styles';
import {Controller, useForm} from 'react-hook-form';
import {Column, RootStackParamList} from '../types/type';
import {useDispatch} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createColumn, getColumns} from '../store/actionCreators';

type Props = NativeStackScreenProps<RootStackParamList, 'MyDesk'>;

const CreateColumn = ({navigation}: Props) => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<Column>({
    defaultValues: {
      title: '',
      description: '',
      prayerId: 0,
    },
  });

  const dispatch = useDispatch();
  const onSubmit = async (data: Column) => {
    dispatch(createColumn(data));
    navigation.navigate('MyDesk');
  };
  return (
    <View style={styles.form}>
      <Text style={styles.formSubHeader}>Create a column here</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            defaultValue={value}
            placeholder="Title"
          />
        )}
        name="title"
      />
      {errors.title && errors.title.type === 'required' && (
        <Text style={styles.warning}>This field is required.</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            defaultValue={value}
            placeholder="Description"
          />
        )}
        name="description"
      />
      {errors.description && (
        <Text style={styles.warning}>This field is required.</Text>
      )}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default CreateColumn;

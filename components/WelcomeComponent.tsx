import * as React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Text, ScrollView, View, TextInput, Button} from 'react-native';
import {styles} from '../styles/styles';
import {FormData, RootStackParamList} from '../types/type';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useDispatch, useSelector} from 'react-redux';
import {signedUp, signUp} from '../store/actionCreators';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeComponent = ({navigation}: Props) => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      password: '',
      email: '',
    },
  });
  const dispatch = useDispatch();
  const dataFromStore = useSelector((store: any) => store.registerUser);

  const onSubmit = async (data: FormData) => {
    dispatch(signedUp({...data}));
    console.log('Data from storage', dataFromStore);
  };

  return (
    <ScrollView style={styles.form}>
      <Text style={styles.formHeader}>Welcome to prayer!</Text>
      <Text style={styles.formSubHeader}>
        If you haven't registered yet, please complete the registration form
        below.
      </Text>
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
            placeholder="Username"
          />
        )}
        name="name"
      />
      {errors.name && (
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
            placeholder="Password"
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text style={styles.warning}>This field is required.</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            defaultValue={value}
            placeholder="Email"
          />
        )}
        name="email"
      />
      {errors.email && errors.email.type === 'required' && (
        <Text style={styles.warning}>This field is required.</Text>
      )}
      {errors.email && (
        <Text style={styles.warning}>{errors.email.message}</Text>
      )}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />

      <View style={{marginTop: 10}}>
        <Button
          title="I have an account"
          onPress={() => navigation.navigate('Auth')}
        />
      </View>
    </ScrollView>
  );
};

export default WelcomeComponent;

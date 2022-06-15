import * as React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Text, View, TextInput, Button} from 'react-native';
import {styles} from '../styles/styles';
import {AuthType, RootStackParamList} from '../types/type';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {signIn} from '../store/actionCreators';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'Auth'>;

const AuthComponent = ({navigation}: Props) => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<AuthType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const dispatch = useDispatch();
  const dataFromStore = useSelector((store: any) => store.registerUser);

  useEffect(() => {
    route();
  }, [dataFromStore.isAuth]);

  const route = () => {
    if (dataFromStore.isAuth === true) {
      navigation.navigate('MyDesk');
    } else return false;
  };

  const onSubmit = async (data: AuthType) => {
    dispatch(signIn({...data}));
  };

  return (
    <View style={styles.form}>
      <Text style={styles.formSubHeader}>Logged in here, please</Text>
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

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default AuthComponent;

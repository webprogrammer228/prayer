import * as React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Text, View, TextInput, Button} from 'react-native';
import {styles} from '../styles/styles';
import {FormData, RootStackParamList} from '../types/type';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Auth'>;

const AuthComponent = ({navigation}: Props) => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
    },
  });
  const onSubmit = (data: FormData) => console.log(data);
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
    </View>
  );
};

export default AuthComponent;

import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: string) => {
  try {
    return await AsyncStorage.setItem('token', value);
  } catch (e) {
    return e;
  }
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return e;
  }
};

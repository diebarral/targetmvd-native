import React from 'react';
import { bool, object, string } from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import constants from 'styles/common';
import styles from './styles';

const Input = ({ input: { onChange, ...restInput }, password = false, label, meta: { touched, error } }) => (
  <View>
    {label && <Text style={[constants.boldText, styles.label]}>{label}</Text>}
    <View>
      <TextInput
        style={[constants.semiBoldText, styles.input]}
        onChangeText={onChange}
        secureTextEntry={password}
        {...restInput}
      />
      {touched && error && <Text>{error}</Text>}
    </View>
  </View>
);

Input.propTypes = {
  input: object.isRequired,
  label: string,
  meta: object,
  password: bool
};

export default Input;

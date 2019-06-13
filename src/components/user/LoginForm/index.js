import React from 'react';
import { bool, func, string } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import {
  ActivityIndicator, Button, Text, View, TouchableOpacity
} from 'react-native';

import Input from 'components/common/Input';
import * as constraints from 'utils/constraints';
import translate from 'utils/i18n';
import styles from './styles';
import constants from 'styles/common';

const LoginForm = ({ handleSubmit, error, submitting }) => (
  <View style={styles.container} onSubmit={handleSubmit}>
    {error && <Text>{error}</Text>}
    <Field
      name="email"
      label={translate('SIGN_IN.username').toUpperCase()}
      component={Input}
    />
    <Field
      name="password"
      label={translate('SIGN_IN.password').toUpperCase()}
      component={Input}
      password
    />
    <View style={styles.submitButtonContainer}>
    { submitting ?
      <ActivityIndicator /> :
        <TouchableOpacity style={constants.mainButton} onPress={handleSubmit}>
          <Text style={constants.mainButtonText}>{translate('SIGN_IN.button').toUpperCase()}</Text>
        </TouchableOpacity>
      }
    </View>
  </View>
);

LoginForm.propTypes = {
  handleSubmit: func.isRequired,
  submitting: bool.isRequired,
  error: string
};

export default reduxForm({
  form: 'login',
  validate: constraints.validations(constraints.login)
})(LoginForm);

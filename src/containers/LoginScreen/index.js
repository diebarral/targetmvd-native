import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';

// Assets
import backgroundImage from 'assets/images/background.png';

// Components
import LoginForm from 'components/user/LoginForm';

// Actions
import { login } from 'actions/userActions';

//Others
import translate from 'utils/i18n';
import { SIGN_UP_SCREEN } from 'constants/screens';

// Styles
import styles from './styles';
import constants from 'styles/common';

const LoginScreen = ({ login, navigation }) => (
  <View style={styles.container}>
    <Image source={backgroundImage}
      style={styles.backgroundImage}>
    </Image>
    <Text style={[constants.boldText, styles.title]}>
      {translate('SIGN_IN.target').toUpperCase()}
    </Text>
    <LoginForm onSubmit={user => login(user.toJS())} />
    <Text style={[constants.semiBoldText, styles.forgotPassword]}>{translate('SIGN_IN.forgotPassword')}</Text>
    <Text style={[constants.boldText, styles.facebook]}>{translate('SIGN_IN.facebook').toUpperCase()}</Text>
    <View style={styles.dividerLine} />
    <Text style={[constants.semiBoldText, styles.signUp]}>{translate('SIGN_UP.title').toUpperCase()}</Text>
  </View>
);

LoginScreen.propTypes = {
  navigation: object.isRequired,
  login: func.isRequired,
};

LoginScreen.options = {
  topBar: {
    title: {
      text: translate('SIGN_IN.title')
    }
  },
};

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatch)(LoginScreen);

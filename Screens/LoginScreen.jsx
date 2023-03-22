import { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility';

const initialState = {
  email: '',
  password: '',
};

const LoginScreen = () => {
  const { passwordVisibility, rightText, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [focus, setFocus] = useState({
    input1: false,
    input2: false,
  });

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground
        style={styles.image}
        source={require('../images/bg.jpg')}
      >
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : ''}>
          <View
            style={{
              ...styles.form,
              paddingBottom: isShowKeyboard ? 0 : 111,
              marginBottom: isShowKeyboard ? -20 : 0,
            }}
          >
            <Text style={styles.formTitle}>Login</Text>
            <TextInput
              style={focus.input1 ? styles.inputFocus : styles.input}
              placeholder="Email"
              placeholderTextColor={'#BDBDBD'}
              onFocus={() => {
                setFocus(prevState => ({ ...prevState, input1: true }));
                setIsShowKeyboard(true);
              }}
              onBlur={() =>
                setFocus(prevState => ({ ...prevState, input1: false }))
              }
              value={state.email}
              onChangeText={value =>
                setState(prevState => ({ ...prevState, email: value }))
              }
            />
            <View style={styles.inputWrapper}>
              <TextInput
                style={focus.input2 ? styles.inputFocus : styles.input}
                placeholder="Password"
                secureTextEntry={passwordVisibility}
                placeholderTextColor={'#BDBDBD'}
                marginBottom={43}
                onFocus={() => {
                  setFocus(prevState => ({ ...prevState, input2: true }));
                  setIsShowKeyboard(true);
                }}
                onBlur={() =>
                  setFocus(prevState => ({ ...prevState, input2: false }))
                }
                value={state.password}
                onChangeText={value =>
                  setState(prevState => ({ ...prevState, password: value }))
                }
              />
              <Pressable
                style={styles.toggle}
                onPress={handlePasswordVisibility}
              >
                <Text>{rightText}</Text>
              </Pressable>
            </View>
            <TouchableOpacity
              style={styles.buttonLogin}
              activeOpacity={0.8}
              onPress={keyboardHide}
            >
              <Text style={styles.buttonTitle}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.text}>Not registered? Sign Up</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  form: {
    position: 'relative',
    paddingHorizontal: 16,
    paddingBottom: 78,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#ffffff',
  },

  formTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    marginVertical: 32,
    color: '#212121',
  },
  input: {
    fontFamily: 'Roboto-Regular',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    height: 50,
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: '#f6f6f6',
  },
  inputFocus: {
    fontFamily: 'Roboto-Regular',
    borderWidth: 1,
    borderColor: '#ff6c00',
    height: 50,
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: '#ffffff',
    color: '#212121',
  },
  inputWrapper: {
    position: 'relative',
  },
  toggle: {
    position: 'absolute',
    top: 16,
    right: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1b4371',
  },
  buttonLogin: {
    height: 51,
    borderRadius: 100,
    textAlign: 'center',
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#ff6c00',
  },
  buttonTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#ffffff',
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1b4371',
  },
});

export default LoginScreen;

import { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
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
              paddingBottom: isShowKeyboard ? 0 : 78,
              marginBottom: isShowKeyboard ? -20 : 0,
            }}
          >
            <View style={styles.imageBox}>
              <View style={styles.imageAdd}>
                <Image
                  source={require('../images/union.png')}
                  width={13}
                  height={13}
                />
              </View>
            </View>

            <Text style={styles.formTitle}>Registration</Text>
            <TextInput
              style={styles.input}
              placeholder="Login"
              placeholderTextColor={'#BDBDBD'}
              onFocus={() => setIsShowKeyboard(true)}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={'#BDBDBD'}
              onFocus={() => setIsShowKeyboard(true)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={'#BDBDBD'}
              marginBottom={43}
              onFocus={() => setIsShowKeyboard(true)}
            />
            <TouchableOpacity
              style={styles.buttonRegistration}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonTitle} onPress={keyboardHide}>
                Sign Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogin} activeOpacity={0.8}>
              <Text style={styles.text}>Have already an account? Sign In</Text>
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
    // alignItems: 'center',
  },
  form: {
    position: 'relative',
    paddingHorizontal: 16,
    // paddingBottom: 78,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#ffffff',
  },
  imageBox: {
    position: 'absolute',
    left: '50%',
    top: -60,
    transform: [{ translateX: -50 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#f6f6f6',
  },
  imageAdd: {
    position: 'absolute',
    right: -12,
    bottom: 14,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ff6c00',
    backgroundColor: '#ffffff',
  },
  formTitle: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    marginTop: 92,
    marginBottom: 32,
    color: '#212121',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e8e8e8',
    height: 50,
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: '#f6f6f6',
    color: '#212121',
  },
  buttonRegistration: {
    height: 51,
    borderRadius: 100,
    textAlign: 'center',
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#ff6c00',
  },
  buttonTitle: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#ffffff',
  },
  buttonLogin: {},
  text: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1b4371',
  },
});

export default RegistrationScreen;

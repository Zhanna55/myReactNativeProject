import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.form}>
      <Text style={styles.formTitle}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'#BDBDBD'}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor={'#BDBDBD'}
        marginBottom={43}
      />
      <TouchableOpacity style={styles.buttonLogin} activeOpacity={0.8}>
        <Text style={styles.buttonTitle}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={styles.text}>Not registered? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    position: 'relative',
    paddingHorizontal: 16,
    paddingBottom: 78,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#ffffff',
  },

  formTitle: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    marginVertical: 32,
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
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#ffffff',
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1b4371',
  },
});

export default LoginScreen;

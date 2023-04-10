import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>

        <TouchableOpacity style={styles.DigitalBtn} onPress={handleLogin}>
          <Text style={styles.DigitalText}>Digital Approval</Text>
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.hargatoyotamakassar.id/wp-content/uploads/2021/08/Logo-Toyota-Trust.png',
          }}
        />
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Alamat email"
            placeholderTextColor="#003f5c"
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <Text style={styles.reset}>Reset password</Text>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',

  },
  box: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: "90%",
    // height: "60%",
    borderWidth: 5,
    borderColor: '#dedede',
    margin: 0,
    paddingBottom: 20,
  },
  reset: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#3897f0',
    alignSelf: 'flex-end',
    marginTop: 5,
    marginRight: 35,
    marginBottom: 10,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#dedede',
    borderRadius: 5,
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    padding: 0,
  },
  inputText: {
    marginLeft: 15,
    height: 50,
    color: 'black',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#287be5',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  DigitalBtn: {
    width: '60%',
    backgroundColor: '#002558',
    borderRadius: 25,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -25,
    marginBottom: 10,
  },
  DigitalText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  image: {
    margin: 20,
    width: 140,
    height: 60,
  },
});

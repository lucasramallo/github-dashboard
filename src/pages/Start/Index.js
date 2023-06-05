import React, { useState } from 'react';
import { 
  ImageBackground, 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  TouchableOpacity, 
  View,
} from 'react-native';
import Background from '../../../assets/background-login.png'
import Input from './components/Input';
import Dialog from './components/DialogComponent';

export default function Login({ navigation }) {

  const [dialogVisible, setDialogVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Background} style={styles.background}>
        <View style={styles.content}>
          <View style={styles.title}>
            <Text style={styles.loginText}>Your GitHub user: </Text>
          </View>
          <View style={styles.form}>
            <Input placeholder="@example123" value={null} onChangeText={() => {}}/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabNavigator')}>
              <Text style={styles.buttonText}>Searsh</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDialogVisible(true)}>
              <Text style={styles.bottonText}>Is this safe?</Text>
            </TouchableOpacity>
            <Dialog visible={dialogVisible} onDismiss={() => setDialogVisible(false)} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#1F1D2B'
  },
  background: {
    flex: 1,
    resizeMode: 'cover'
  },
  content: {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '20%',
  },
  form: {
    alignItems: 'center',
    marginTop: 22
  },
  header: {
    
  },
  title: {
    marginTop: '20%'
  },
  logo: {
    marginBottom: 31
  },
  loginText: {
    fontFamily: 'Inter_700Bold',
    color: '#FBFBFB',
    fontSize: 24
  },
  button: {
    width: '100%',
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Inter_900Black',
  },
  bottonText: {
    fontFamily: 'Inter_500Medium',
    color: '#FBFBFB',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 35
  }
});

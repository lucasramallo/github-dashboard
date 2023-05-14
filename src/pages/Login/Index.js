import { ImageBackground, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, View, TextInput} from 'react-native';
import Background from '../../../assets/background-login.png'
import logo from '../../../assets/icon.png'
import Input from './components/Input';

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Background} style={styles.background}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Image
              style={styles.logo}
              source={logo}
            />
          </View>
          <View style={styles.title}>
            <Text style={styles.loginText}>Your GitHub user: </Text>
          </View>
          <View style={styles.form}>
            <Input placeholder="@example123" value={null} onChangeText={() => {}}/>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Searsh</Text></TouchableOpacity>
            <Text style={styles.bottonText}>Is this safe?</Text>
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

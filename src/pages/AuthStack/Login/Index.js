import { ImageBackground, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, View, TextInput} from 'react-native';
import Background from '../../../../assets/background-login.png'
import logo from '../../../../assets/icon.png'
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
            <Text style={styles.loginText}>Sign Up</Text>

            <View style={styles.form}>
              <Input placeholder="GitHub UserName" value={null} onChangeText={() => {}}/>
              <Input placeholder="Email" value={null} onChangeText={() => {}}/>
              <Input placeholder="Password" value={null} onChangeText={() => {}}/>
            </View>
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
  logo: {
    marginBottom: 31
  },
  loginText: {
    fontFamily: 'Inter_700Bold',
    color: '#FBFBFB',
    fontSize: 24
  }
});

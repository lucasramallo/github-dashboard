import { ImageBackground, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import Mascote from '../../../../assets/macote.png'
import Background from '../../../../assets/background-start.png'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Separator from '../../../../assets/separador.png'

export default function Start({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Background} style={styles.background}>
        <View style={styles.content}>
          <Image
            style={styles.mascote}
            source={Mascote}
          />
          <Text style={styles.logoText}>GitView</Text>
          <Text style={styles.text}>Welcome to our GitHub Viewer app! With it, you can view all your GitHub repositories in one place. Just enter your username and all your repositories will be instantly loaded using a public GitHub API.</Text>
          <Image
            source={Separator}
          />
          <TouchableOpacity 
            onPress={() => navigation.navigate('Login')} 
            style={styles.button}
          >
            <Ionicons name="arrow-forward-outline"  color="#525298" size={30}/>
          </TouchableOpacity>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mascote: {
    marginTop: '15%',
  },
  logoText: {
    marginTop: 18,
    color: '#fff',
    fontSize: 36,
    fontFamily: 'Inter_700Bold'
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 13,
    width: 330,
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
    letterSpacing: 1.5,
    marginBottom: 12
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: 70,
    height: 70,
    borderRadius: 20,
    marginTop: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

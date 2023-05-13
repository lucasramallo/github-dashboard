import { ImageBackground, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, View, Button} from 'react-native';

export default function Login({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login</Text>
        <Button title='Back' onPress={() => navigation.navigate('Start')} />
      </View>
    );
}
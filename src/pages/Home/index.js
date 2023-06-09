import { Text, View } from 'react-native';
import Button from '@ant-design/react-native/lib/button';

export default function Home({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button type="primary" onPress={() => navigation.goBack()} >primary</Button>
        <Button type="warning">warning</Button>
      </View>
    );
}
import { Text, View } from 'react-native';
import Button from '@ant-design/react-native/lib/button';

export default function Home() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button type="primary">primary</Button>
        <Button type="warning">warning</Button>
      </View>
    );
}
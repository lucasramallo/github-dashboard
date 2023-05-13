import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';


export default function Router() {

    const auth = false// Indica se o usuario esta altenticado

    return(
      <NavigationContainer>
        { auth ? <AppStack /> : <AuthStack /> }
      </NavigationContainer>
    )
}
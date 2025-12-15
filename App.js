import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Transacoes from './src/views/Transacoes';
import AddEdit from './src/views/AddEdit';
import Home from "./src/views/Home";
import Topo from "./src/views/Topo";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Dashboard' component={Home}/>
        <Stack.Screen name='Transações' component={Transacoes}/>
        <Stack.Screen name='AddEdit' component={AddEdit}/>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

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
      <Topo/>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

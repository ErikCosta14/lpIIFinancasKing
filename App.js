import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Transacoes from './src/views/Transacoes';

export default function App() {
  return (
    <View style={styles.container}>
      <Transacoes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

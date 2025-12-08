import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Topo from './src/views/Topo';

export default function App() {
  return (
    <View style={styles.container}>
      <Topo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

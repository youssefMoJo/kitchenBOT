import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { View, Text, Button } from 'react-native-ui-lib';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text>Lets do This</Text>
        <Button label="Next" onPress={() => console.log('clicked')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

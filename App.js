import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './components/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 50,
    backgroundColor: '#F0F0F0',
    width: '100%',
  },
});

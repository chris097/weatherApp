import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import City from './src/screens/City';
import UpcomingWeather from './src/screens/UpcomingWeather';

const App =() =>{
  return (
    <View style={styles.container}>
      {/* <UpcomingWeather /> */}
      <City />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})

export default App;

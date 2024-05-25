import { StyleSheet, Text } from 'react-native';



export default function HomeScreen() {
  return (
    <Text style={styles.titleContainer}>Home page</Text>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    textAlign:'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
 
});

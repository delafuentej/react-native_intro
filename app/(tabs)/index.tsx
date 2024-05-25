import { StyleSheet, Text, View , Pressable} from 'react-native';
import {Link} from 'expo-router';



export default function HomeScreen() {
  return (
    <div style={styles.titleContainer}>
      <Text >Home page</Text>
      <View>
        <Link href='/about'>
            <Pressable>
              <Text>About</Text>
            </Pressable>
        </Link>

        <Link href={{
          pathname: "user/[id]",
          params:{id: 'bacon'}
        }}>
            <Pressable>
              <Text>View User</Text>

            </Pressable>
        </Link>

        <Link push href='/login'>Login</Link>

        <Link replace href='/forum'>Forum</Link>



      </View>
    </div>
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

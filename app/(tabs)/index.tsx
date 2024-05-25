import { StyleSheet, Text, View , Pressable} from 'react-native';
import {Link, Stack, useNavigation} from 'expo-router';
import { useEffect } from 'react';

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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    width: 50,
    height: 50,
  },


});

export default function HomeScreen() {
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerShow:false })
    }, [navigation]);

  
  return (
    <div style={styles.titleContainer}>
      <Text >Home page</Text>
      <View style={{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
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

        
        <Link  href='/logout'>Logout</Link>



      </View>
      <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'My home',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

         
        }}
      />Another View
      <Text>Home Screen</Text>
      <Link href={{ pathname: 'details', params: { name: 'Bacon' } }}>Go to Details</Link>
    </View>
    </div>
  );
}



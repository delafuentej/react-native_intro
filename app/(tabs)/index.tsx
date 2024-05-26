import { StyleSheet, Text, TextInput, View , Pressable, Image, Button} from 'react-native';
import {Link, Stack, useNavigation} from 'expo-router';
import { useEffect, useState } from 'react';


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
    width: 100,
    height: 100,
    margin: 'auto',
  },
  button: {
    backgroundColor: 'orange',
    borderWidth:10,
    width:50,
    height:50,
  }


});

export default function HomeScreen() {
  const[count, setCount]= useState(0);
  const[name, setName]= useState('')

  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerShow:false })
    }, [navigation]);

  
  return (
    
    <div style={styles.titleContainer}>
      
      <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
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

        <Link  href='/settings'>Settings</Link>



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
          headerRight: ()=> <Button 
                              onPress={()=> setCount(prev => prev +1)}
                              title='Update count'
                              />
         
        }}
        
      />Another View  <Text>Count: {count}</Text>
       <Button 
                              onPress={()=> setCount(prev => prev +1)}
                              title='Update count'
                              disabled={ count >=5}
                              />
         
      <Text>Home Screen</Text>
      
      <Link href={{ pathname: 'details', params: { name: 'Bacon' } }}>Go to Details</Link>
      <Link href='./details' >Details</Link>
    </View>
    <View style={{
      flex: 1,
      alignContent: 'center', 
      justifyContent: 'center', 
      padding: 16,
     
    }}>
      <Text 
      
      style={{ marginVertical: 16, margin:'auto' }}>
        {name ? `Hi ${name}!` : 'What is your name?'}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: 'skyblue', width:200, margin:'auto',  }}
        onChangeText={text => setName(text)}
        secureTextEntry={true}
      />
    </View>
    </div>
  );
}



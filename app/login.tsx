import { Text, Image, TextInput, View, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";

const styles= StyleSheet.create({
  contentContainer: {
   margin: 'auto',
  }
});

export default function Login() {
  const[ userName, setUserName]= useState('');
  const [password, setPassword]= useState('');
    return (
      <ScrollView style={styles.contentContainer}>
        <Text style={{textAlign: 'center'}}>Login</Text>
        <View>
          <Text style={{textAlign: 'center'}}>Welcome!!</Text>
          <Image
            source={{
              uri:'https://reactnative.dev/docs/assets/p_cat2.png',
            }} 
            style={{
              width: 200,
              height:200
            }}
            />
        </View>
        <TextInput
          
          style={{
            height:40,
            width:200,
            borderColor:'blue',
            borderWidth:3,
          }}
         placeholder="Type your username"
         onChangeText={username => setUserName(username)}
         defaultValue={userName}
         secureTextEntry={true}
         
        
        />
         <TextInput
          style={{
            height:40,
            width:200,
            borderColor:'blue',
            borderWidth:3,
          }}
          placeholder="Type your password"
          onChangeText={pw=> setPassword(pw)}
          defaultValue={password}
          secureTextEntry={true}
        
        />
        
      </ScrollView>
    );
  }
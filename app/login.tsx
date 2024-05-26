import { Text, Image, TextInput, View, ScrollView, StyleSheet } from "react-native";

const styles= StyleSheet.create({
  contentContainer: {
   margin: 'auto',
  }
});

export default function Login() {
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
          defaultValue="Type your username"
        
        />
         <TextInput
          style={{
            height:40,
            width:200,
            borderColor:'blue',
            borderWidth:3,
          }}
          defaultValue="Type your password"
        
        />
        
      </ScrollView>
    );
  }
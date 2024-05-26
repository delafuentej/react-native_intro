import { Text, FlatList, StyleSheet, View } from "react-native";


const styles= StyleSheet.create({
  container:{
    flex: 1,
    paddingTop:20,
    margin: 'auto',
  },
  item:{
    padding:10,
    fontSize:20,
    height:44,
  },
});


export default function Forum() {
    return (
      <View 
        style={styles.container}
      >
        <Text>FlatList Component</Text>
        <FlatList
        data={[
          {key: 'James'},
          {key: 'John'},
          {key: 'Mary'},
          {key: 'Martha'},
          {key: 'Alfred'},
          {key: 'Thomas'},
          {key: 'Joana'},
          {key: 'Jana'},
          {key: 'Anna'},
        ]}
        renderItem={({item})=> <Text style={styles.item}>{item.key}</Text>}
        />

        
      </View>
    );
  }
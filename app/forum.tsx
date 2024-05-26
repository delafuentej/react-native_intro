import { Text, FlatList, SectionList, StyleSheet, View } from "react-native";


const styles= StyleSheet.create({
  hauptContainer:{
    flex:1,
    flexDirection: "row",
  },
  container:{
    flex: 1,
    flexDirection:'column',
    paddingTop:20,
  },
    item:{
    padding:10,
    fontSize:20,
    height:44,
  },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
});


export default function Forum() {
    return (
      <View style={styles.hauptContainer}>
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

        <View style={styles.container}>
          <SectionList 
            sections={[
             { title: 'A', data:['Alfred','Anna']},
             { title: 'J', data:['James','John','Joana','Jana']},
             { title: 'M', data:['Mary','Martha']},
             { title: 'T', data:['Thomas']},
            ]}
            renderItem={({item})=> <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section})=>(
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            keyExtractor={item=> `basicListEntry-${item}`}
          
          />



        </View>



      </View>
    );
  }
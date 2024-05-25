import { Text, View, Button} from "react-native";
import { useRouter } from "expo-router";




export default function Settings() {
    const router= useRouter();
    

    const handleDismiss= (num:number)=>{
        router.dismiss(num)
    }
    const handleDismissAll=()=>{
        router.dismissAll();
    }
    return (
      <View style={{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    

      }}>
        <Text>Settings</Text>
        <Button 
            title='Go to the first screen'
            onPress={()=> handleDismiss(3)}
        
        ></Button>

{/* sing the dismissAll action, you can go from settings to home and dismiss any screen in between. */}
        <Button 
            title='Go to the first screen'
            onPress={()=> handleDismissAll()}
        
        ></Button>

        
        
      </View>
    );
  }
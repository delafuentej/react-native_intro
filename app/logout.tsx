import { Text } from "react-native";
import { router } from "expo-router";


export default function Logout() {
    router.replace('./login');
    return (
      <>
        <Text>Logout</Text>
        
        
      </>
    );
  }
import React from 'react';
import { View } from 'react-native';


export const Box=(props:any)=>{
    const {color} = props;
    return(
        <View style={{width:75, height:75, backgroundColor: color}}/>
    )

}
   
    


import {View} from 'react-native';
import React from 'react';
import { Box } from './box';

export const Custom=(color:string)=>{
   
    return(
        <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
            <Box color='red' />
            <Box color='green' />
            <Box color='blue'/>

        </View>
    );
}






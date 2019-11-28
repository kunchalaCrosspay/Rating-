import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
const Registration = props =>{
return (
<View style = {StyleSheet.screen}>  

    <Text  style = {StyleSheet.headerTitle}> {props.title}  </Text>
    </View>

)


} 
export default Registration;  
const styles  = StyleSheet.create ({

screen : {
width : '100%',
height : 90,
paddingTop : 40,
backgroundColor : 'white',
alignItems : 'center',
justifyContent : 'center',
flex : 1


},
headerTitle  : {
color : 'black',
fontSize : 20



}



});
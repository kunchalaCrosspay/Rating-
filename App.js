import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,SafeAreaView,KeyboardAvoidingView,Button,Image} from 'react-native';
// import SecondView from './TheViews/SecondView'
// import Login from './TheViews/Login'
class  viewPracticr extends Component {

state = 
{
// firstName : '',
// lastName : '',
// middleName : '',
// emailAddress : '',
// phoneNumber : ''


}
// handleFirstName = (text)=>{
// this.setState({firstName : text})
// }
// hadleMiddleName  = (text) =>{
// this.setState({middleName : text})

// }
// handleLastName = (text) =>{
// this.setState ({lastName : text})

// }
// handlePhoneNumber = (text) =>{
// this.setState({phoneNumber : text})

// }
// handlEmailAddress = (text) =>{
// this.setState ({emailAddress : text})

// }
render(){
return(



  <KeyboardAvoidingView  behavior = 'padding'  style = {styles.screen} >
      

    {/* <Text > Hello World   </Text> */}
  {/* <SecondView/> */}
  <View style = {styles.TheRateView}>  
    
    <Text style = {styles.header}  > Rate Us  </Text>
    
     </View>
  
  {/* <TextInput   placeholder = " First Name" placeholderTextColor = 'red' style = {styles.TheTextInputStyles} keyboardType = 'ascii-capable' autoCapitalize = 'none' keyboardAppearance = 'dark' returnKeyType = 'next' onChangeText = {this.firstName}    /> */}
  {/* <TextInput   placeholder = " Middle Name" placeholderTextColor = 'red' style = {styles.TheTextInputStyles} keyboardType = 'ascii-capable'autoCapitalize = 'none' keyboardAppearance = 'dark' returnKeyType = 'next' onChangeText = {this.middleName}  />
  <TextInput   placeholder = " Last Name" placeholderTextColor = 'red' style = {styles.TheTextInputStyles} keyboardType = 'ascii-capable' autoCapitalize = 'none' keyboardAppearance = 'dark' returnKeyType = 'next' onChangeText = {this.lastName}/>
   */}
  {/* <TextInput   placeholder = "Email Address" placeholderTextColor = 'red' style = {styles.TheTextInputStyles} keyboardType =  'email-address'autoCapitalize = 'none' keyboardAppearance = 'dark' returnKeyType = 'next' onChangeText =  {this.emailAddress} /> */}
  {/* <TextInput   placeholder = "Phone Number" placeholderTextColor = 'red' style = {styles.TheTextInputStyles} keyboardType = 'phone-pad' keyboardAppearance = 'dark' returnKeyType = 'next' onChangeText = {this.phoneNumber}  /> */}
  {/* <TextInput   placeholder = " Last Name" style = {styles.TheTextInputStyles} keyboardType = 'ascii-capable' keyboardAppearance = 'dark' returnKeyType = 'next'/> */}
  
  {/* <Button   backgroundColor = 'white' title = "Register" style = {StyleSheet.buttonStyle} />  */}
 

  <Image source = {require('./Assets/Images/Crosspay.jpg' )} style = {styles.imageResizer} />

  <View style = {styles.experienceView}> 
  <Text  style = {styles.crosspaylabel}  > CrossPay </Text>
  <Text  style = {styles.crosspayExperincelabel}  > How would you rate our app experience </Text>

  <View style = {styles.starView} > 
  <Image source = {require('./Assets/Images/Crosspay.jpg' )} style = {styles.starShapeImage} />
  <Image source = {require('./Assets/Images/Crosspay.jpg' )} style = {styles.starShapeImage} />
  <Image source = {require('./Assets/Images/Crosspay.jpg' )} style = {styles.starShapeImage} />
  <Image source = {require('./Assets/Images/Crosspay.jpg' )} style = {styles.starShapeImage} />
  <Image source = {require('./Assets/Images/Crosspay.jpg' )} style = {styles.starShapeImage} />
  </View >
  <Button color='black' title="Rate Now"  style = {styles.rateNowBtn}/>
  <View style = {styles.Remindlater} >  
  <Button title = "No,Thanks" color='black' style = {styles.buttonContainer}/>
  <Button title = "Remind Me Later"  color='black'style = {styles.buttonContainer1} />
     </View>

  </View>
  
  
    </KeyboardAvoidingView>
  
  

  )
  


}

}



export default viewPracticr


const styles = StyleSheet.create ({

screen  : {

flex : 1,
justifyContent : 'flex-start',
alignItems : 'center',
paddingTop : 150



},

TheTextInputStyles  : {
height : 50,
width : '80%',
borderRadius : 10,
borderColor : 'black',
margin : 10,
borderBottomColor : 'black',
borderWidth : 2,
paddingLeft : 10



},
buttonStyle : {

backgroundColor: '#7a42f4',
width : 60,
height : 50,
margin : 50,
borderRadius : 10,
borderBottomColor : 'white',
borderWidth : 2
},
TheRateView : {
backgroundColor : '#f7287b',
height : 50,
width : '100%',
alignContent  : 'center',
justifyContent : 'center',

},
header :{

justifyContent : 'center',
 alignContent : 'center',
   fontSize : 20,
   fontWeight : 'bold',
   color : 'white',
   textAlign : 'center'

},
imageResizer : {
height : 125,
width : 125,
margin : 10

},
starShapeImage : {

height : 30,
width : 30,
flexDirection: 'row',
justifyContent : 'space-evenly',
alignContent : 'stretch',
paddingLeft : 10



},
crosspaylabel :{
fontSize : 25,
fontWeight :'normal',
paddingTop : 10,
alignContent  : 'center',
justifyContent : 'center',
textAlign : 'center'

},
crosspayExperincelabel :{
fontSize : 18,
fontWeight :'normal',
paddingTop : 10,
alignContent  : 'flex-start',
justifyContent : 'center',
textAlign : 'center',
margin : 10

},


experienceView :{
justifyContent : 'space-evenly',
margin : 15


},
starView :{
flexDirection : 'row',
margin : 20,
paddingLeft : 25


},

buttonContainer :{

  margin : 20,
  flexDirection : 'row',
  alignContent : 'flex-start',
  textShadowColor : 'white',
 
  
    },
    buttonContainer1 :{
   
  margin : 20,
 
  alignContent : 'flex-end',
  justifyContent :'flex-end',
  textShadowColor : 'white',
        },
        rateNowBtn : {
          backgroundColor:'#f7287b',
   
        },
        Remindlater : {
flexDirection : 'row',
justifyContent : 'space-evenly',
margin : 30

        }

}) 


import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,  } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
// import navigation from './screens/navigation';
// import {AppLoading} from 'expo';
// import home from './components/home';
const bot="10%"
const right="42%"
export default function Register({navigation}) {



  const [textInput1, setTextInput1] =useState("")
  const [textInput2, setTextInput2]=useState("")
  const [textInput3, setTextInput3]=useState("")
  const [textInput4, setTextInput4]=useState("")
  const [textInput5, setTextInput5]=useState("")

  const [textPassword, setPassword]=useState("")
  const [saveInfo, setSaveInfo] =useState(false)
  const [showPass,setshowPass]=useState(false)
    
  return (
    
    <View style={styles.container}>
   <View style={styles.image}>
     <Image style={styles.logo} source={require('../assets/logo1.png')}/>
   </View>
   
      {/* <Text>Open up App.js to start working on your app!</Text> */}

      <View>

      <View style={styles.inputComponent}>
            <Text style={styles.textAboveInputBox}>Email</Text>
            <View style={styles.inputBox}>
            <TextInput 
            style={styles.inputText}
            placeholder=''
            value={textInput1}
            onChangeText={(input)=>{setTextInput1(input)}}
        /> 
            </View>
       
      </View>

      <View style={styles.inputComponent}>
            <Text style={styles.textAboveInputBox}>Số điện thoại</Text>
            <View style={styles.inputBox}>
            <TextInput 
            style={styles.inputText}
            placeholder=''
            value={textInput2}
            onChangeText={(input)=>{setTextInput2(input)}}
        /> 
            </View>
       
      </View>

      <View style={styles.inputComponent}>
            <Text style={styles.textAboveInputBox}>Địa chỉ</Text>
            <View style={styles.inputBox}>
            <TextInput 
            style={styles.inputText}
            placeholder='số nhà, tên phố, tên quận, tên thành phố'
            value={textInput3}
            onChangeText={(input)=>{setTextInput3(input)}}
        /> 
            </View>
       
      </View>

    
 

      <View style={styles.inputComponent}>
      <Text style={styles.textAboveInputBox}>Mật khẩu</Text>

          <View style={styles.inputBox}>
            <TextInput 
                style={styles.inputText}
                placeholder=''
                value={textPassword}
                secureTextEntry={showPass? false: true}
                onChangeText={(input)=>setPassword(input)}
                
              /> 

              <TouchableOpacity onPress={()=>setshowPass(!showPass)} style={{justifyContent:'center'}}>
                  <Icon  style={styles.showIcon} name={showPass? "eye": "eye-off"} size={28} color={"black"}/>
              </TouchableOpacity>
              </View>
           
      </View>


      <View style={styles.inputComponent}>
      <Text style={styles.textAboveInputBox}>Xác nhận lại mật khẩu</Text>

          <View style={styles.inputBox}>
            <TextInput 
                style={styles.inputText}
                placeholder=''
                value={textPassword}
                secureTextEntry={showPass? false: true}
                onChangeText={(input)=>setPassword(input)}
                
              /> 

              <TouchableOpacity onPress={()=>setshowPass(!showPass)} style={{justifyContent:'center'}}>
                  <Icon  style={styles.showIcon} name={showPass? "eye": "eye-off"} size={28} color={"black"}/>
              </TouchableOpacity>
              </View>
           
      </View>

  <TouchableOpacity style={styles.checkbox} onPress={()=>setSaveInfo(!saveInfo)}>
  <Icon name={saveInfo? "checkbox-marked": "checkbox-blank-outline"} size={32} color={"white"}/>  
  <Text style={styles.checkboxText}>Lưu mật khẩu cho lần sau</Text>
  </TouchableOpacity>

        <View style={styles.buttonHandle}>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Main')} >
          
          <View>
          <Text style={styles.textInsideButton}>Đăng ký</Text>
          </View>
            
          </TouchableOpacity>
        </View>
      
      <StatusBar style="auto" />
  </View>


   

  </View>

  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B6291',
    paddingHorizontal: 16,
    paddingVertical: 12
  },

  inputText:{
    backgroundColor:'#fff',
    height: 40,
    paddingHorizontal: 10,
    flex:1,
    
  },
  logo:{
        resizeMode:'contain',
        height:200,
  },
  image:{
    
    paddingTop:30,
    justifyContent:'center',
    resizeMode:'contain',
    alignItems:'center',
    
  },
  button:{
    borderRadius:10,
    backgroundColor:'#CD652B',
    width:300,
    height:50,
    alignItems:'center',
    justifyContent:'center',
   marginBottom:bot,
  },

  buttonHandle:{
    alignItems:'center',
    color:'#fff',
  },
  textInsideButton:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:20,
  },

  textAboveInputBox:{
    color:'#fff',
    fontSize:20,
    paddingBottom:10,
  },

  checkbox:{
    flexDirection:'row',
    alignItems:'center',
    paddingBottom:10,
    marginBottom:10,
    paddingTop:10,
  },

  checkboxText:{
    color:'#fff',
    fontSize:18,
    paddingLeft:16
  },
  inputComponent:{
    paddingBottom:8
  },
  inputBox:{
flexDirection:'row',
alignContent: 'center',
backgroundColor:"#fff"
  },

  showIcon:{
      paddingRight:8,
    
    },

    footer:{
        flexDirection:'row',
    },
    footer1:{
        marginRight:right,
    },

    footer2:{
        
    },
    textfooter1:{
        color:'#ffffff',
        fontSize:20,
    },
    textfooter2:{
            color:'#f5ac1f',
            fontSize:20,

    }
});

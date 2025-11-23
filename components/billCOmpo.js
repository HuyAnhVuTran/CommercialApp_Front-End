import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
  } from "react-native";
  import React from "react";

const left="10%"
  export default function Bill(){
    return(
        <View style={styles.componentWrap}>
        <View style={styles.componentSty}>
          <Text style={styles.textStyle1}>Phương thức thanh toán</Text>
        </View>

        <View style={styles.componentSty}>
          <Text style={styles.textStyle2}>Visa</Text>
        </View>

      </View>
    );
  }


  const styles=StyleSheet.create({
    componentWrap: {
        flexDirection:'row',
        backgroundColor:'#98dfaf'
      },
    
      textStyle1:{
        fontSize:20,
        fontWeight:'bold',
      },

       textStyle2:{
        fontSize:20,
        fontWeight:'bold',
        paddingLeft: left, 
       }, 

      componentSty:{
          padding:10,
          
      },
  })
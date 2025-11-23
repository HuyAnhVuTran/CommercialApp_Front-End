import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";


import Menu from "../components/productList";
import { OrderContext } from "./product";
import { useContext, useState } from "react";
import { value } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";

export default function Cart({ navigation, children }) {
  
  return (
    <View style={styles.container}>
      <View style={styles.componentWrap}>

        <View style={styles.componentSty}>
          <Text style={styles.textStyle}>Tên sản phẩm</Text>
        </View>

        <View style={styles.componentSty}>
          <Text style={styles.textStyle}>Số lượng</Text>
        </View>

        <View style={styles.componentSty}>
          <Text style={styles.textStyle}>Thành tiền</Text>
        </View>
      
      </View>

      {/* <OrderContext.Consumer >
        {val=>{
          return(
            <View style={styles.box}>
              <Text style={styles.textInBox1 }>{val.name}</Text>
                <Text style={styles.textInBox2}> {val.quantity}</Text>
                <Text style={styles.textInBox3}>{val.money}</Text>
            </View>
          );
        }}
      </OrderContext.Consumer> */}

      <View style={styles.buttonWrap}>
        <TouchableOpacity
          onPress={() => navigation.navigate("con")}
          style={styles.buttonC}
        >
          <Text style={styles.textButton}>Tạo đơn hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonWrap: {
    alignItems:'center',
    flex:1,
    justifyContent:'center',
    position:'relative',

  },
  buttonC: {
    backgroundColor: "#cd652b",
    borderRadius:20,
    width: 300,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  textButton: {
    color: "white",

    fontWeight: "bold",
    fontSize: 22,
  },

  componentWrap: {
    flexDirection:'row',
    backgroundColor:'#98dfaf'
  },

  textStyle:{
    fontSize:20,
    fontWeight:'bold',
  },
  componentSty:{
      padding:10,
      paddingLeft:9 
  },


  box:{
    backgroundColor:'#98dfaf',
    flexDirection:'row',
  },

  textInBox1:{
    fontSize:20,
    fontWeight:'bold',
  },

  
  textInBox2:{
    fontSize:20,
    fontWeight:'bold',
    paddingLeft:50,
  },
  
  textInBox3:{
    paddingLeft:130,
    fontSize:20,
    fontWeight:'bold',
  },

});

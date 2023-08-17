import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { AntDesign as Icon } from "@expo/vector-icons";
import Bill from "../components/billCOmpo";

const top = "10%";
const bottom = "3%";
const left="40%"

export default function Confirm({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.returnButtonWrap}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Main")}
          style={styles.returnButton}
        >
          <Icon name="arrowleft" size={32} color={"black"} />
        </TouchableOpacity>
      </View>

      <Bill/>
      <View style={styles.componentWrap}>
        <View style={styles.componentSty}>
          <Text style={styles.textStyle1}>Địa chỉ</Text>
        </View>

        <View style={styles.componentSty}>
          <Text style={styles.textStyle2}>241 Xuân Thủy</Text>
        </View>

      </View>



      

      <View style={styles.buttonWrap}>
        <TouchableOpacity
          onPress={() => navigation.navigate("success")}
          style={styles.buttonC}
        >
          <Text style={styles.textButton}>Đặt đơn hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   alignItems:'center',
    // justifyContent:'center'
  },

  buttonWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonC: {
    backgroundColor: "#cd652b",
    borderRadius: 20,
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

  returnButton: {},

  returnButtonWrap: {
    paddingTop: top,
    backgroundColor: "#414288",
    paddingBottom: bottom,
  },


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

    paddingLeft:left,
  },
  componentSty:{
      padding:10,
      paddingLeft:9 
  },
});

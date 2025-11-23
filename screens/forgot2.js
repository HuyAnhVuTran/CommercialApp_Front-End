import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign as Icon } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { MaterialCommunityIcons} from '@expo/vector-icons';



const right = "50%";
const left = "35%";



export default function Password({ navigation }) {
  const [count, setCount] = useState(0);
  const [varia, setVaria] = useState(0);
  const [fav, setFav] = useState(false);
  const [textInput1, setTextInput1] = useState("");
  const [showPass,setshowPass]=useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.returnButtonWrap}>
          <TouchableOpacity
            onPress={() => navigation.navigate("login")}
            style={styles.returnButton}
          >
            <Icon name="arrowleft" size={32} color={"black"} />
          </TouchableOpacity>
        </View>

        <View style={styles.textHeader}>
          <Text style={styles.textinWrap}>Lấy lại mật khẩu</Text>
        </View>
      </View>

      <View style={styles.inputComponent}>
        <Text style={styles.textAboveInputBox}>Nhập mật khẩu mới</Text>

        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputText}
            placeholder=''
            value={textInput1}
            secureTextEntry={showPass ? false : true}
            keyboardType="default"
            onChangeText={(input) => setTextInput1(input)}
          />

          <TouchableOpacity
            onPress={() => setshowPass(!showPass)}
            style={{ justifyContent: "center" }}
          >
            <MaterialCommunityIcons
              style={styles.showIcon}
              name={showPass ? "eye" : "eye-off"  }
              size={28}
              color={"black"}
            />
          </TouchableOpacity>
        </View>



        
      </View>

      <View style={styles.buttonWrap}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert("MẬT KHẨU MỚI ĐÃ ĐƯỢC THIẾT LẬP CHO TÀI KHOẢN");
            navigation.navigate("login");
          }}
        >
          <Text style={styles.textInButton}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const vertical = "7%";

const styles = StyleSheet.create({
  container: {},

  wrapper: {
    backgroundColor: "#414288",
    paddingVertical: vertical,

    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  wrapper: {
    backgroundColor: "#414288",
    paddingVertical: vertical,

    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  textinWrap: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#cd652b",
    width: 270,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonWrap: {
    alignItems: "center",
    justifyContent: "center",
  },

  textInButton: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  Outer: {
    alignItems: "center",
    justifyContent: "center",
  },

  textChoose: {
    fontSize: 24,
  },

  ChooseWrap: {
    marginBottom: 20,
    backgroundColor: "#98dfaf",
    flexDirection: "row",
  },
  Sign: {
    fontSize: 24,
    marginLeft: 20,
  },

  countWrap: {
    marginLeft: 20,
  },

  textAboveInputBox: {
    color: "black",
    fontSize: 20,
    paddingBottom: 10,
  },

  billWrap: {
    marginBottom: 20,
    backgroundColor: "#98dfaf",
    flexDirection: "row",
  },

  Order: {
    marginLeft: left,
  },
  component: {
    flexDirection: "row",
    marginLeft: left,
  },

  inputText: {
    backgroundColor: "#fff",
    height: 40,
    paddingHorizontal: 10,
    flex: 1,
  },
  inputBox: {
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: "white",
  },

  showIcon:{
    paddingRight:8,
  
  },
});

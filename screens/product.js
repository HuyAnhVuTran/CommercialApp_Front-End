import { StatusBar } from "expo-status-bar";
// import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { AntDesign as Icon } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Numeral } from "react-numeral";
import numeral from "numeral";




import React, { useState } from "react";



const right = "50%";
const left = "35%";
// export const OrderContext = React.createContext();

export default function Product({ route, navigation }) {
  const [count, setCount] = useState(0);
  const [varia, setVaria] = useState(0);
  const [fav, setFav] = useState(false);
  const { product, price, avatar, priceN } = route.params;

  const increment = () => {
    setVaria((count + 1) * priceN);
    setCount(count + 1);
  };

  const decrement = () => {
    if (count - 1 < 0) {
      setCount(count);
      setVaria(0);
    } else {
      setVaria((count - 1) * priceN);
      setCount(count - 1);
    }
  };

  const val = {
    name: product,
    quantity: count,
    money: varia,
  };

  return (
    
    <View style={styles.containerforSecond}>
      <View style={styles.wrapper}>
        <View style={styles.returnButtonWrap}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Main")}
            style={styles.returnButton}
          >
            <Icon name="arrowleft" size={32} color={"black"} />
          </TouchableOpacity>
        </View>

        <View style={styles.textHeader}>
          <Text style={styles.textinWrap}>{product}</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => setFav(!fav)}>
            <Icon name={fav ? "heart" : "hearto"} size={24} color={"black"} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.img2Wrap}>
        <Image style={styles.img2} source={{ uri: avatar }} />
        <View style={styles.First_Name_2_Wrap}>
          <Text style={styles.First_Name_2}> {price}</Text>
        </View>
      </View>

      <View style={styles.ChooseWrap}>
        <Text style={styles.textChoose}>Số lượng</Text>


          <View style={styles.component}>
            <View style={styles.minus}>
              <TouchableOpacity onPress={decrement}>
                <Text style={styles.Sign}>-</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.countWrap}>
              <Text style={styles.count}>{count}</Text>
            </View>

            <View>
              <TouchableOpacity onPress={increment}>
                <Text style={styles.Sign}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

      </View>
      <View style={styles.billWrap}>
        <Text style={styles.textChoose}>Thành tiền</Text>
        <View style={styles.Order}>


          <Text style={styles.textChoose}>{numeral(varia).format("0,0")}đ</Text>
        </View>
      </View>

      <View style={styles.Outer}>
        <View style={styles.buttonWrap}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textInButton}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      </View>


    

    </View>
  );
}
export const valu = Product.val
const vertical = "7%";
const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 80,
  },

  img2: {
    backgroundColor: "#fff",
    width: 200,
    height: 200,
  },
  img2Wrap: {
    backgroundColor: "#5fb49c",
    alignItems: "center",
    justifyContent: "center",
  },

  containerforSecond: {
    flex: 1,
    backgroundColor: "#ffffff",
    color: "#fff",
  },

  First_Name_2: {
    color: "#000000",
    fontSize: 24,
    marginTop: 8,
    marginBottom: 6,
  },

  First_Name_2_Wrap: {
    justifyContent: "center",
    alignItems: "center",
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

  count: {
    fontSize: 24,
  },

  minus: {
    marginLeft: 20,
  },

  returnButton: {},

  returnButtonWrap: {
    flex: 1,
  },

  textHeader: {
    flex: 2,
  },

  billWrap: {
    marginBottom: 20,
    backgroundColor: "#98dfaf",
    flexDirection: "row",
  },

  Order: {
    marginLeft: left,
  },
  component:{
    flexDirection:'row',
    marginLeft:left,
  }
});

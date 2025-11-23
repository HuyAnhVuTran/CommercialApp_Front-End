import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign as Icon } from "@expo/vector-icons";

export default function History({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.returnButtonWrap}>
          <TouchableOpacity
            onPress={() => navigation.navigate("profile")}
            style={styles.returnButton}
          >
            <Icon name="arrowleft" size={32} color={"black"} />
          </TouchableOpacity>
        </View>

        <View style={styles.textHeader}>
          <Text style={styles.textinWrap}>Lịch sử mua hàng</Text>
        </View>

       
      </View>
    </View>
  );
}

const vertical = "7%";

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    color: "#fff",
  },

  returnButtonWrap: {
    flex: 1,
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

  textHeader: {
    flex: 2,
  },


});

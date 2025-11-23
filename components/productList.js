import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
const Records = require("../mock_data.json");

const per='100%'

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={Records.data}
        renderItem={({ item }) => (
          <View style={styles.itemWrap}>
            <TouchableOpacity
              style={styles.pressable}
              onPress={() => navigation.navigate("c", item)}
            >
              <Image style={styles.img} source={{ uri: item.avatar }} />
              <View style={styles.wrapper}>
                <Text style={styles.textWithinPress1}> {item.product}</Text>
                <Text style={styles.textWithinPress2}> {item.price}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const width = "100%";
const left = "20%";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: "column",
    padding:8
  },
  header: {
    flex: 1,
    backgroundColor: "#414288",
    alignItems: "center",
    justifyContent: "center",
  },
  textHead: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
  },
  pressable: {
    flex: 1,
    backgroundColor: "#98dfaf",
    paddingTop: 5,
    marginTop: 20,
    flexDirection: "row",
    margin: 2,
    
  },

  textWithinPress1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textWithinPress2: {
    fontSize: 20,
    fontWeight: "bold",
  },
  img: {
    width: 100,
    height: 80,

  },
 
  img2Wrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  itemWrap: {
    flexDirection: "column",
  
  },

  containerforSecond: {
    flex: 1,

    backgroundColor: "#244fbd",
    color: "#fff",
  },

  First_Name_2: {
    color: "#fff",
    fontSize: 24,
    marginTop: 8,
    marginBottom: 6,
  },

  wrapper: {
    marginLeft: left,
    alignItems: "center",
    paddingVertical: 20,
  },
});

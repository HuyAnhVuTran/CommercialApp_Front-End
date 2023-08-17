import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';  
import { FontAwesome } from '@expo/vector-icons'; 

const Records = require("../mock_data.json");
const tab = createBottomTabNavigator();
import Menu from "../components/productList";
import Profile from "./profile";
import Favourite from "./favourite";
import Cart from "./cart";


export default function Main({ navigation }) {
  return (
    <tab.Navigator>
      <tab.Screen
        name="Home"
        component={Menu}
        options={{
          title: "Cửa hàng",
          headerStyle: {
            backgroundColor: "#414288",
          
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontSize: 25,
            fontWeight:"bold"
          },
          headerTitleAlign:'center',
          tabBarIcon:({size, focused, color})=>{
            return (
              <Entypo name="home"
              size={size}
              color={color}/>

            );
          }
        }}
      />


<tab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Giỏ hàng",
          headerStyle: {
            backgroundColor: "#414288",
          
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontSize: 25,
            fontWeight:"bold"
          },
          headerTitleAlign:'center',
          tabBarIcon:({size, focused, color})=>{
            return (
              <FontAwesome name="shopping-basket"
              size={size}
              color={color}/>

            );
          }
        }}
      />

<tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          title: "Sản phẩm yêu thích",
          headerStyle: {
            backgroundColor: "#414288",
          
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontSize: 25,
            fontWeight:"bold"
          },
          headerTitleAlign:'center',
          tabBarIcon:({size, focused, color})=>{
            return (
              <AntDesign name="heart"
              size={size}
              color={color}/>

            );
          }
        }}
      />

<tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerShown:false,
          tabBarIcon:({size, focused,color})=>{
            return(
              <Ionicons name="person"
              size={size}
              color={color}/>
            )
          }
        }}
      />


    </tab.Navigator>
  );
}

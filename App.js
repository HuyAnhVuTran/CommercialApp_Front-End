import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Waiting from "./screens/waiting";
import Login from "./screens/login";
import Register from "./screens/register";
import Main from "./screens/main";
import SplashScreen from "react-native-splash-screen";
import React, { useEffect } from "react";
import Product from "./screens/product";
import Nav from "./navigation/navigation";
import Confirm from "./screens/confirm";
import Success from "./screens/success";
import History from "./screens/history";
import Profile from "./screens/profile";
import Forget from "./screens/forgot";
import Password from "./screens/forgot2";

const Stack = createNativeStackNavigator();
const tab=createBottomTabNavigator();
// const MyContext=React.createContext();
export default function App() {
  // useEffect(()=>{

  // }, [])

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: "transparent",
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />

      <Stack.Screen name="c"
      component={Product}
      options={{
        headerShown:false
      }} />

<Stack.Screen name="nav"
      component={Nav}
      options={{
        headerShown:false
      }} />

<Stack.Screen name="con"
      component={Confirm}
      options={{
        headerShown:false
      }} />

<Stack.Screen name="success"
      component={Success}
      options={{
        headerShown:false
      }} />
      

      <Stack.Screen name="history"
      component={History}
      options={{
        headerShown:false
      }} />

<Stack.Screen name="profile"
      component={Profile}
      options={{
        headerShown:false
      }} />

<Stack.Screen name="forget"
      component={Forget}
      options={{
        headerShown:false
      }} />

<Stack.Screen name="password"
      component={Password}
      options={{
        headerShown:false
      }} />

      </Stack.Navigator>



      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

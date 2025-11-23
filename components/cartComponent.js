import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
  } from "react-native";
  
  
export default function CartComponent({route}){

    const { product, price, avatar, priceN } = route.params;

    return(
        <View style={styles.container}>

            <View>

            </View>




        </View>
    );
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"red",
    },

})
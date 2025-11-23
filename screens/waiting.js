import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


const  left="17%"
export default function Waiting(){
    return(
        <View style={styles.container}>
            <View style={styles.img}>
                <Image  source={require('../assets/logo1.png')}/>
            </View>

            <View style={styles.bottom}>
                 <Text style={styles.textAtBot}>
                    By Huy Anh Vu Tran
                </Text>
            </View>
       
        <StatusBar style="auto" />
        </View>
    )
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#3B6291',

    },

    img:{
        marginLeft:left,
        flex:1,
        alignContent:'center',
       justifyContent:'center'
    },

    textAtBot:{
        color:'white',
        fontSize:24,
    },
    
    bottom:{
alignItems:'center',
paddingVertical:20,
    },

})
import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { RNCamera } from "react-native-camera";
import { useCamera } from "react-native-camera-hooks";
import { CameraType, Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";





const top = "10%";
const bottom = "10%";

const lod = "100%";

export default function Profile({ navigation }) {
  //const [{ cameraRef }, { takePicture }] = useCamera(null);

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage]=useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back );
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  const cameraRef = useRef(null);

  useEffect(()=>{
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted' )
    })();

  },[])


  const takePicture=async () => {
    if(cameraRef){
      try{
        const data = await cameraRef.current.takePictureAsync;
        console.log(data);
        setImage(data.uri)
      } catch (e){
          console.log(e);
      }
    }
  }

  const saveImage = async() =>  {
    if(image){
      try{
        await MediaLibrary.createAssetAsync(image);
        alert("Picture saved");
      }catch(e){
        console.log(e);
      }
    }
  }

if(hasCameraPermission ===  false){
  return <Text>No access to camera</Text>
}

  // const captureHandle = async () => {
  //   try {
  //     const data = await takePicture();
  //     console.log(data.uri);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <View style={styles.container}>
      <ScrollView style = {styles.scroll}>
        <View style={StyleSheet.body}>
          {/* <RNCamera
            ref={cameraRef}
            type={RNCamera.Constants.Type.back}
            style={styles.preview}
          /> */}
          <Camera style={styles.preview}  type={type} flashMode={flash} ref={cameraRef}>

          </Camera>
        </View>

        <View style={styles.Header}>
          <Text style={styles.textInHeader}>Profile</Text>

          <View style={styles.regionUnderText}>
            <View style={styles.circle}></View>

            <View style={styles.camera}>
              <TouchableOpacity onPress={() => takePicture()}>
                <Entypo
                  name="camera"
                  size={28}
                  color={"black"}
                  style={styles.cameraIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.Component}>
          <View style={styles.factor}>
            <Ionicons
              name="person-circle-outline"
              size={24}
              color={"black"}
              style={styles.icon}
            />
            <Text style={styles.componentText}>Name</Text>
          </View>

          <View>
            <Text style={styles.customerText}>Huy Anh Vu Tran</Text>
          </View>
        </View>

        <View style={styles.Component}>
          <View style={styles.factor}>
            <Feather
              name="home"
              size={24}
              color={"black"}
              style={styles.icon}
            />
            <Text style={styles.componentText}>Home Address</Text>
          </View>

          <View>
            <Text style={styles.customerText}>8 Tôn Thất Thuyết</Text>
          </View>
        </View>

        <View style={styles.Component}>
          <View style={styles.factor}>
            <Entypo
              name="old-phone"
              size={24}
              color={"black"}
              style={styles.icon}
            />
            <Text style={styles.componentText}>Phone</Text>
          </View>

          <View>
            <Text style={styles.customerText}>0255556293</Text>
          </View>
        </View>

        <View style={styles.Component}>
          <View style={styles.factor}>
            <Entypo name="mail" size={24} color={"black"} style={styles.icon} />
            <Text style={styles.componentText}>Email</Text>
          </View>

          <View>
            <Text style={styles.customerText}>JohnPoe@gmail.com</Text>
          </View>
        </View>

        <View style={styles.Component}>
          <TouchableOpacity onPress={()=>navigation.navigate('history')}>
            <View style={styles.factor}>
              <Text style={styles.componentText}>Lịch sử mua hàng</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.wrapLogOut}>
          <TouchableOpacity
            onPress={() => navigation.navigate("login")}
            style={styles.buttonLogOut}
          >
            <Text style={styles.textLogOut}> Đăng xuất </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:10,
    
  },

  Header: {
    backgroundColor: "#334195",
    alignItems: "center",
    paddingBottom: 20,
  },

  textInHeader: {
    paddingTop: top,
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: bottom,
  },

  circle: {
    marginLeft: top,
    backgroundColor: "white",
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },

  regionUnderText: {
    flexDirection: "row",
  },
  camera: {
    backgroundColor: "gray",
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraIcon: {},

  wrapLogOut: {
    alignItems: "center",
    paddingBottom:24,
  },

  buttonLogOut: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cd652b",
    marginTop: 25,
    width: 200,
    height: 40,
    borderRadius: 10,
  },

  textLogOut: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  Component: {
    backgroundColor: "#98dfaf",
    marginTop: 25,
    flexDirection: "column",
    paddingBottom: 20,
  },

  componentText: {
    paddingLeft: 20,
    fontSize: 24,
    fontWeight: "bold",
  },

  customerText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  factor: {
    flexDirection: "row",
    paddingVertical:5
  },
  icon: {
    paddingVertical: 5,
  },
  scroll: {
   
    paddingBottom:100,
  },
});

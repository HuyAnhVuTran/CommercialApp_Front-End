import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  PixelRatio,
} from "react-native";

import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Svg, Circle, Path } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { useEffect } from "react";

const top = "100%";
const bottom = "10%";
const { width, height } = Dimensions.get("window");

const circle_length = 1000;
const radius = circle_length / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);

export default function Success({ navigation }) {
  const circle_progress = useSharedValue(1);
  const scale = useSharedValue(1);
  const filledCircleOpacity = useSharedValue(0);
  const tickOpacity = useSharedValue(0);

  const message = useSharedValue(0);
  const button = useSharedValue(0);


  const nav=useSharedValue(0);

  useEffect(() => {

    circle_progress.value = withTiming(0, { duration: 1300 });
    scale.value = withDelay(1000, withSpring(90));
    filledCircleOpacity.value = withDelay(1500, withTiming(1));
    tickOpacity.value = withDelay(1500, withTiming(1, { duration: 500 }));
    message.value = withDelay(1500, withTiming(1, { duration: 500 }));
    button.value = withDelay(1500, withTiming(1, { duration: 500 }));
    nav.value = withDelay(1500, withTiming(1, { duration: 500 }));


  }, []);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circle_length * circle_progress.value,
  }));

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: filledCircleOpacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  const tickAnimatedStyle = useAnimatedStyle(() => {
    return {
      position:'absolute',
      opacity: tickOpacity.value,
      marginTop: top,
    };
  });

  const messageAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: message.value,
      position: "relative",
    };
  });

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: button.value,
      position: "absolute",
    };
  });

  return (
    <View style={styles.container}>

      <Svg style={{ position: "absolute" }}>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={radius}
          stroke="#404258"
          strokeWidth={30}
        />

        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={radius}
          stroke="#82cd47"
          strokeWidth={15}
          strokeDasharray={circle_length}
          //strokeDashoffset={circle_length*circle_progress.value }
          animatedProps={animatedProps}
          strokeLinecap="round"
        />
      </Svg>

      <Animated.View
        style={[
          {
            position: "absolute",
            width: "0.7%",
            height: "0.3%",
            borderRadius: 140,
            backgroundColor: "#cd652b",
            transform: [{scale:50}]
          },
          reanimatedStyle,
        ]}
      />

      <Svg viewBox="0 0 40 40">
        <AnimatedPath
          d="M12.5 20l5 5 9-9 "
          stroke={"#a9eb76"}
          strokeWidth={2}
          strokeLinecap="round"
          style={tickAnimatedStyle}
        />
      </Svg>

      <Animated.View style={messageAnimatedStyle}>
        <Text style={styles.noti}>Đã đặt hàng thành công!</Text>
      </Animated.View>

      {/* <Animated.View style={buttonAnimatedStyle}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Main")}
          style={styles.buttonC}
        >
          <Text style={styles.textButton}>Quay lại cửa hàng</Text>
        </TouchableOpacity>
      </Animated.View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: bottom,
  },

  

  textButton: {
    color: "white",

    fontWeight: "bold",
    fontSize: 18,
  },

 
  noti: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

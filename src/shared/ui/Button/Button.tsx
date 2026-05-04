import {Animated, GestureResponderEvent, Pressable, Text, View} from "react-native";
import { ButtonProps } from "./Button.types";
import { useButtonStyles } from "@/shared/ui/Button/Button.styles";
import { colors } from "@/shared/themes";

export function Button(props: ButtonProps) {
  const { text, onPressIn, onPressOut, ...rest } = props;
  const animatedValue = new Animated.Value(100);
  const color = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [colors.violetHover, colors.violetPrimary],
  });
  const fadeIn = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
    onPressIn && onPressIn(e);
  }
  const fadeOut = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 100,
      useNativeDriver: true,
    }).start();
    onPressOut && onPressOut(e);
  }
  return (
    <Pressable onPressIn={fadeIn} onPressOut={fadeOut} {...rest}>
      <Animated.View style={[useButtonStyles.button, {backgroundColor: color}]}>
        <Text style={useButtonStyles.text}>{text}</Text>
      </Animated.View>
    </Pressable>
  );
}

import {Animated, Text } from "react-native";
import { useEffect, useState } from "react";
import { ErrorNotificationProps } from "./ErrorNotification.types";
import { useErrorNotificationStyles } from "./ErrorNotification.styles";

export function ErrorNotification(props: ErrorNotificationProps) {
  const { error } = props;
  const [isShown, setIsShown] = useState<boolean>(false);
  const animatedValue = new Animated.Value(-100);
  const onEnter = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }
  useEffect(() => {
    if (!error) {
      return;
    }
    setIsShown(true);
    const timerId = setTimeout(() => {
      setIsShown(false);
    }, 3000);
    return () => {
      clearTimeout(timerId);
    }
  }, [error]);
  if (!isShown) {
    return <></>;
  }
  return (
    <Animated.View style={[
      useErrorNotificationStyles.error,
      {transform: [{ translateY: animatedValue }]},
    ]} onLayout={onEnter}>
      <Text style={useErrorNotificationStyles.errorText}>{error}</Text>
    </Animated.View>
  );
}

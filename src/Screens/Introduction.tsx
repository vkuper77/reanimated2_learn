import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

const SIZE = 200;

const handlerRotation = (box: Animated.SharedValue<number>) => {
  'worklet';
  return `${box.value * 2 * Math.PI}rad`;
};

const Introduction = () => {
  const box = useSharedValue(1);
  const scale = useSharedValue(1);

  const style = useAnimatedStyle(
    () => ({
      opacity: 1,
      borderRadius: (box.value * SIZE) / 2,
      transform: [{scale: scale.value}, {rotate: handlerRotation(box)}],
    }),
    [],
  );

  useEffect(() => {
    box.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(0.5), -1, true);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8}>
        <Animated.View style={[styles.box, style]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: SIZE,
    height: SIZE,
    backgroundColor: '#001E6C',
  },
});

export default Introduction;

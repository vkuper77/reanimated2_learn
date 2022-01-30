import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface PageProps {
  title: string;
  idx: number;
  translateX: Animated.SharedValue<number>;
}

const {width, height} = Dimensions.get('window');

const SIZE = width * 0.8;

const Page = ({title, idx, translateX}: PageProps) => {
  const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    return {transform: [{scale: scale}]};
  });

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [height / 2, 0, -height / 2],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-1, 1, -1],
      Extrapolate.CLAMP,
    );

    return {transform: [{translateY}], opacity};
  });

  return (
    <View
      key={idx}
      style={[
        styles.container,
        {backgroundColor: `rgba(256, 0, 150, 0.${idx + 1})})`},
      ]}>
      <Animated.View style={[styles.box, rStyle]} />
      <Animated.View style={[{position: 'absolute'}, rTextStyle]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9C19E0',
  },
  text: {
    fontSize: 50,
    color: '#99DDCC',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default Page;

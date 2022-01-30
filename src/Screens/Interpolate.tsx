import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Page from '../Components/Page';

const WORDS = ['Brothers', 'go', 'play', 'tanks', '!?'];

const Interpolate = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <View style={{flex: 1}}>
      <Animated.ScrollView
        pagingEnabled={true}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.wrapper}>
        {WORDS.map((item, idx) => (
          <Page title={item} idx={idx} translateX={translateX} />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#B8B5FF',
  },
});

export default Interpolate;

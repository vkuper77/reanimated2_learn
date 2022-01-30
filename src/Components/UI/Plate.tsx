import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as React from 'react';

export interface ComponentProps {
  title: string;
  icon: string;
  screen: React.ReactNode;
}

const Plate = ({title, icon, screen}: ComponentProps) => {
  const {navigate} = useNavigation<any>();

  const onPress = () =>
    navigate('Details', {
      title,
      screen,
    });

  return (
    <TouchableOpacity onPress={onPress} style={styles.plate}>
      <Text style={styles.plateText}>{`${icon} ${title}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  plate: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#E6E6E6',
    margin: 10,
  },
  plateText: {
    fontSize: 20,
    color: '#0F52BA',
  },
});

export default Plate;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {TTextInfo} from '../../types';

const TextInfo: React.FC<TTextInfo> = ({label, data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.data}>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
  },
  label: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 5,
    fontFamily: 'StarJediRounded',
  },
  data: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    padding: 5,
  },
});

export default TextInfo;

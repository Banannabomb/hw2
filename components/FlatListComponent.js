import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

const FlatListComponent = ({ allItems }) => {
  return allItems.map((element) => {
    return (
      <View style={styles.bubblyText}>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{element}</Text>
      </View>
    );
  });
};

export default FlatListComponent;

const styles = StyleSheet.create({
  bubblyText: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: '80%',
  },
});

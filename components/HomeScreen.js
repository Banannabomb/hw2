import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { storeData, getData, clearData } from '../functions/AsyncFunctions';
import FlatListComponent from './FlatListComponent';
import { parseArray } from '../functions/parseArray';

const HomeScreen = () => {
  const [task, setTask] = useState('');
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const res = await getData();

    const onlyItems = parseArray(res);
    console.log(onlyItems);

    setItems(onlyItems);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await storeData(task);
    console.log(task);

    const res = await getData();
    console.log(res);

    const onlyItems = parseArray(res);
    console.log(onlyItems);

    setItems(onlyItems);
  };

  const handleClear = (e) => {
    e.preventDefault();
    clearData();
    setItems([]);
    setTask('');
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.largeText}>To-Do List</Text>

      <View style={styles.inputAndButton}>
        <TextInput
          style={styles.userInput}
          placeholder='Add Task!'
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleClear}>
        <Text style={styles.buttonText}>Clear</Text>
      </TouchableOpacity>

      <FlatListComponent allItems={items} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },

  inputAndButton: {
    alignItems: 'center',
    width: '90%',
    flexDirection: 'row',
    marginVertical: 10,
  },

  largeText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  userInput: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    marginVertical: 15,
    padding: 20,
    width: '70%',
  },
  button: {
    backgroundColor: 'green',
    padding: 13,
    borderRadius: 10,
    marginHorizontal: 10,
    width: '30%',
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 25,
  },
});

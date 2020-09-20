import React, {Component, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput,ScrollView} from 'react-native';

const App = () => {
  const [todos,setTodos] = useState([]);
  const [textFieldValue,setTextFieldValue] = useState('')
  
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <TextInput 
        placeholder="Todo Text"
        placeholderTextColor="#000"
        style={styles.todoTextInput}
        value={textFieldValue}
        onChangeText={(newText)=>{
          setTextFieldValue(newText)
        }}
        />
        <Button 
          title="Add"
          onPress={()=>{
            if(!textFieldValue.length){
              alert('Please enter some text')
              return;
            }
            setTodos([
              ...todos,
              textFieldValue
            ]);
            setTextFieldValue('')
          }}
        />
      </View>
      <ScrollView style={styles.itemsContainer}>
        {todos.map((data,index)=>(
          <View style={styles.item}>
            <Text style={styles.itemText}>{data}</Text>
            <Button 
              title="Delete"
              onPress={()=>{
                let existingData = [...todos];
                existingData.splice(index,1)
                setTodos(existingData);
              }}
            />
          </View> 
        ))}
        {todos.length == 0 ? <View style={styles.noTodosContainer}>
          <Text>No Todos Added Yet</Text>
        </View> : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    flex:1
  },
  fieldContainer:{
    flexDirection:"row"
  },
  todoTextInput:{
    backgroundColor:"#ccc",
    flex:1
  },
  itemsContainer:{
    flex:1
  },
  item:{
    padding:10,
    elevation:5,
    margin:10,
    backgroundColor:"#fff",
    flexDirection:"row"
  },
  itemText:{
    fontSize:20,
    flex:1
  },
  noTodosContainer:{
    flex:1,
    alignItems:"center"
  }
});

export default App;

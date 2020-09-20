import React, {Component, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

class Greeting extends Component {
  render() {
    const {text} = this.props;
    return <Text style={styles.text}>Greetings {text}</Text>;
  }
}

const Counter = ({counter}) => {
  return <Text style={{color: 'red'}}>Counter: {counter}</Text>;
};

const CounterContainer = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState('test@user.com');

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const alertEmail = () => {
    alert(email);
  };

  return (
    <>
      <Text style={styles.text}>This is counter App</Text>
      <Counter counter={count} />
      <Button style={styles.button} onPress={increment} title="Increment" />
      <Button style={styles.button} onPress={decrement} title="Decrement" />
      <Greeting text="Hello World" />
      <TextInput
        style={styles.textInput}
        placeholder="Enter email"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      {/* <Text>{email}</Text> */}
      <Button style={styles.button} onPress={alertEmail} title="Alert Email" />
    </>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <CounterContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  textInput: {
    backgroundColor: '#1E6738',
    color: '#fff',
    margin: 20,
    padding: 20,
  },
});

export default App;

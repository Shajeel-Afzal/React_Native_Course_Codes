import React, {Component, useState} from 'react';
import {Text, Button} from 'react-native';

class Greeting extends Component {
  render() {
    const {text} = this.props;
    return <Text>Greetings {text}</Text>;
  }
}

const Counter = ({counter}) => {
  return <Text>Counter: {counter}</Text>;
};

const CounterContainer = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <Text>This is counter App</Text>
      <Counter counter={count} />
      <Button onPress={increment} title="Increment" />
      <Button onPress={decrement} title="Decrement" />
      <Greeting text="Hello World" />
    </>
  );
};

const App = () => {
  return <CounterContainer />;
};

export default App;

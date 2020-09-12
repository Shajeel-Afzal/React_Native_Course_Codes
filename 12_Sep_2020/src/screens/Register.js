import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

export const Register = ({navigation}) => {
    return (
        <View style={{
            backgroundColor: "#FFF",
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Text style={{
              fontSize: 30
            }}>Register</Text>
            <Text style={{ fontSize: 15 }}>Please signin to continue</Text>
            <View style={{ width: "80%", margin: 20 }}>
              <TextInput placeholder="Full Name" placeholderTextColor="#000" style={{
                backgroundColor: "#eaeaea",
                paddingHorizontal: 20
              }} />
              <TextInput placeholder="Email" placeholderTextColor="#000" style={{
                backgroundColor: "#eaeaea",
                paddingHorizontal: 20,
                marginTop: 20
              }} />
              <TextInput placeholder="Password" placeholderTextColor="#000" style={{
                backgroundColor: "#eaeaea",
                paddingHorizontal: 20,
                marginTop: 20
              }} />
              <View style={{ marginTop: 20 }} />
              <Button title="Login" color="#fF0000" onPress={() => {
               
              }} />
            </View>
          </View>
    
    );
}
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header Box */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Example 1</Text>
      </View>

      {/* Bild */}
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/react-logo.png')} // Replace with your circular image path
          style={styles.image}
        />
      </View>

      {/* Button */}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <Button title="BUTTON" onPress={() => {}} color="#d6d8d7"  />
          <Button title="BUTTON" onPress={() => {}} color="#d6d8d7" />
        </View>
        <View style={styles.buttonRow}>
          <Button title="BUTTON" onPress={() => {}} color="#d6d8d7" />
          <Button title="BUTTON" onPress={() => {}} color="#d6d8d7" />
        </View>
      </View>

      {/* Email */}
      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    backgroundColor: '#2d8577', 
    paddingVertical: 20,
    paddingLeft: 24, 
    alignItems: 'flex-start', 
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginVertical: 5,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '100%', 
    paddingHorizontal: 16, 
  },
  input: {
    width: '60%', 
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#e91e63',
    marginLeft: 60, 
  },
  inputLabel: {
    fontSize: 16,
    color: '#7f7f7f',
  },
});

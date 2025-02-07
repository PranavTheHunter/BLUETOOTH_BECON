import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";

const Application = () => {
  return (
    <View style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>BLUETOOTH</Text>
      <Text style={styles.subtitle}>BEACON</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>USER NAME:</Text>
       

        <Text style={styles.label}>BEACON NAME:</Text>
        
      </View>

      {/* Description */}
      <TextInput
        style={styles.description}
        placeholder="DESCRIPTION"
        placeholderTextColor="#666"
        multiline
      />

      {/* Speaker Icon */}
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/929/929434.png" }} // Replace with your icon URL if needed
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Application;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9E4A8", // Light yellow background
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    textDecorationLine: "underline",
    marginBottom: 40,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 20,
  },
  description: {
    width: "100%",
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    borderColor: "#000",
    borderWidth: 1,
    textAlignVertical: "top",
  },
  iconContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 50,
    height: 50,
  },
});

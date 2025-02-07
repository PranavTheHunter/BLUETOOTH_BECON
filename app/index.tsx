import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter(); // Hook for navigation

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BLUETOOTH</Text>
      <Text style={styles.title2}>BEACON</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
        />
      </View>
      {/* Hyperlink for Sign Up */}
      <TouchableOpacity onPress={() => router.push("/SignUp")}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDE6E8",
    paddingHorizontal: 20,
    paddingTop: 60,
    justifyContent: "center", // Vertically centers content
    alignItems: "center", // Horizontally centers content
  },
  
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#004080",
  },
  title2: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#004080",
    marginBottom: 40,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 10,
    rowGap:15,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  linkText: {
    color: "#007BFF",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    width: "55%",
    height: 50,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

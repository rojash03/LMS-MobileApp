import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function Login() {
  const router = useRouter();
  const { register } = useLocalSearchParams();
  const [isRegister, setIsRegister] = useState(register === "true");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password || (isRegister && (!name || !role))) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      if (isRegister) {
        // Registration API call
        Alert.alert("Success", "Registered successfully!");
        router.push("/dashboard");
      } else {
        // Login API call
        Alert.alert("Success", "Login successful!");
        router.push("/dashboard");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-blue-100 justify-center items-center px-6">
      <View className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <View className="items-center mb-6">
          <Image
            source={require("../assets/libraryLogo.png")}
            className="w-28 h-28 rounded-2xl mb-4"
          />
          <Text className="text-2xl font-bold text-center text-black">
            {isRegister ? "Join Library Hub" : "Welcome Back"}
          </Text>
          <Text className="text-gray-600 text-center">
            {isRegister
              ? "Create an account to manage your library activity"
              : "Sign in to access your library dashboard"}
          </Text>
        </View>

        {isRegister && (
          <>
            <Text className="text-black mb-1 font-medium">Name:</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              className="w-full border rounded-md px-4 py-2 mb-4 bg-gray-100"
            />

            <Text className="text-black mb-1 font-medium">Role:</Text>
            <TextInput
              value={role}
              onChangeText={setRole}
              placeholder="Role (e.g., Borrower)"
              className="w-full border rounded-md px-4 py-2 mb-4 bg-gray-100"
            />
          </>
        )}

        <Text className="text-black mb-1 font-medium">Email:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          className="w-full border rounded-md px-4 py-2 mb-4 bg-gray-100"
        />

        <Text className="text-black mb-1 font-medium">Password:</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
          className="w-full border rounded-md px-4 py-2 mb-4 bg-gray-100"
        />

        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          className="mb-4"
        >
          <Text className="text-blue-600">{showPassword ? "Hide" : "Show"} Password</Text>
        </TouchableOpacity>

        <Text className="text-center text-sm mb-4 text-black">
          {isRegister ? "Already have an account?" : "Are you new here?"}{" "}
          <Text
            onPress={() => setIsRegister(!isRegister)}
            className="text-red-600 font-semibold"
          >
            {isRegister ? "Log In" : "Register"}
          </Text>
        </Text>

        <TouchableOpacity
          disabled={loading}
          onPress={handleSubmit}
          className="w-full bg-black py-3 rounded-md"
        >
          <Text className="text-white text-center font-semibold text-lg">
            {loading ? (isRegister ? "Signing Up..." : "Logging In...") : isRegister ? "Sign Up" : "Log In"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

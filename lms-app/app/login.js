import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

const API_URL = "https://library-mgmt-system-1.onrender.com/api";

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
    // Trim inputs
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedName = name.trim();
    const trimmedRole = role.trim();

    if (!trimmedEmail || !trimmedPassword || (isRegister && (!trimmedName || !trimmedRole))) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }

    const payload = isRegister
      ? { name: trimmedName, email: trimmedEmail, password: trimmedPassword, role: trimmedRole }
      : { email: trimmedEmail, password: trimmedPassword };

    console.log(isRegister ? "Register payload:" : "Login payload:", payload);

    setLoading(true);

    try {
      const endpoint = isRegister ? "/auth/register" : "/auth/login";
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Something went wrong");

      Alert.alert("Success", isRegister ? "Registered successfully!" : "Login successful!");
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#BFDBFE", padding: 16 }}>
      <View style={{ width: "100%", maxWidth: 400, backgroundColor: "#FFF", padding: 24, borderRadius: 24, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 10 }}>
        <View style={{ alignItems: "center", marginBottom: 24 }}>
          <Image
            source={require("../assets/libraryLogo.png")}
            style={{ width: 112, height: 112, borderRadius: 16, marginBottom: 12 }}
          />
          <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", color: "#000" }}>
            {isRegister ? "Join Library Hub" : "Welcome Back"}
          </Text>
          <Text style={{ color: "#4B5563", textAlign: "center" }}>
            {isRegister
              ? "Create an account to manage your library activity"
              : "Sign in to access your library dashboard"}
          </Text>
        </View>

        {isRegister && (
          <>
            <Text style={{ color: "#000", marginBottom: 4, fontWeight: "500" }}>Name:</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              style={{ width: "100%", borderWidth: 1, borderRadius: 8, padding: 8, marginBottom: 12, backgroundColor: "#F3F4F6" }}
            />

            <Text style={{ color: "#000", marginBottom: 4, fontWeight: "500" }}>Role:</Text>
            <TextInput
              value={role}
              onChangeText={setRole}
              placeholder="Role (e.g., Borrower)"
              style={{ width: "100%", borderWidth: 1, borderRadius: 8, padding: 8, marginBottom: 12, backgroundColor: "#F3F4F6" }}
            />
          </>
        )}

        <Text style={{ color: "#000", marginBottom: 4, fontWeight: "500" }}>Email:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          style={{ width: "100%", borderWidth: 1, borderRadius: 8, padding: 8, marginBottom: 12, backgroundColor: "#F3F4F6" }}
        />

        <Text style={{ color: "#000", marginBottom: 4, fontWeight: "500" }}>Password:</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
          style={{ width: "100%", borderWidth: 1, borderRadius: 8, padding: 8, marginBottom: 12, backgroundColor: "#F3F4F6" }}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ marginBottom: 16 }}>
          <Text style={{ color: "#2563EB" }}>{showPassword ? "Hide" : "Show"} Password</Text>
        </TouchableOpacity>

        <Text style={{ textAlign: "center", fontSize: 14, marginBottom: 16, color: "#000" }}>
          {isRegister ? "Already have an account?" : "Are you new here?"}{" "}
          <Text
            onPress={() => setIsRegister(!isRegister)}
            style={{ color: "#DC2626", fontWeight: "600" }}
          >
            {isRegister ? "Log In" : "Register"}
          </Text>
        </Text>

        <TouchableOpacity
          disabled={loading}
          onPress={handleSubmit}
          style={{ width: "100%", backgroundColor: "#000", paddingVertical: 12, borderRadius: 8 }}
        >
          <Text style={{ color: "#FFF", textAlign: "center", fontWeight: "600", fontSize: 16 }}>
            {loading ? (isRegister ? "Signing Up..." : "Logging In...") : isRegister ? "Sign Up" : "Log In"}
          </Text>
        </TouchableOpacity>
      </View>
  </View>
);
}

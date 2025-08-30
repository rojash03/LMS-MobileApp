import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/login'); // Navigate to Login screen
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }}
      className="flex-1 justify-center items-center"
      resizeMode="cover"
    >
      {/* Dark overlay for readability */}
      <View className="absolute inset-0 bg-black/50" />

      <View className="z-10 items-center px-8">
        <Text className="text-white text-4xl font-bold text-center mb-8">
          Welcome to Library Hub
        </Text>
        <Text className="text-white/90 text-lg text-center mb-12 leading-6">
          Manage your books, track loans, and discover new reads with ease.
        </Text>

        <TouchableOpacity
          onPress={handleGetStarted}
          className="bg-blue-600 px-8 py-4 rounded-lg shadow-lg"
          activeOpacity={0.8}
        >
          <Text className="text-white text-lg font-semibold">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

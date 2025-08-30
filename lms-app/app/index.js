import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView className="bg-gray-100">
      <View className="items-center py-20 px-6">
        <Text className="text-5xl font-bold text-center mb-6">
          Welcome to the Library Hub
        </Text>
        <Text className="text-blue-600 font-semibold text-2xl text-center mb-4">
          Discover a world of knowledge at your fingertips.
        </Text>
        <Text className="text-center text-xl text-gray-500 mb-6">
          Explore a world of knowledge at your fingertips. Easily manage your
          book loans and returns while discovering your next great read with our
          intuitive library management system. Sign In to Your Library.
        </Text>
        <TouchableOpacity
          className="bg-blue-600 rounded-lg px-4 py-3"
          onPress={() => router.push("/login")}
        >
          <Text className="text-white text-lg text-center">
            Get Started with Library Hub
          </Text>
        </TouchableOpacity>
      </View>

    
      <View className="flex-row px-4 pb-10">
        <View className="bg-white p-4 rounded-2xl border border-gray-200 shadow-md w-32 items-center mr-4">
          <Text className="text-5xl mb-2">📚</Text>
          <Text className="text-lg font-bold text-pink-600 text-center">
            Reading
          </Text>
          <Text className="text-gray-600 text-center mt-2 text-sm">
            Explore a world of books.
          </Text>
        </View>
        <View className="bg-white p-4 rounded-2xl border border-gray-200 shadow-md w-32 items-center mr-4">
          <Text className="text-5xl mb-2">🔄</Text>
          <Text className="text-lg font-bold text-blue-600 text-center">
            Borrow & Return
          </Text>
          <Text className="text-gray-600 text-center mt-2 text-sm">
            Manage your book loans and returns easily.
          </Text>
        </View>
        <View className="bg-white p-4 rounded-2xl border border-gray-200 shadow-md w-32 items-center">
          <Text className="text-5xl mb-2">🌟</Text>
          <Text className="text-lg font-bold text-green-600 text-center">
            Discover
          </Text>
          <Text className="text-gray-600 text-center mt-2 text-sm">
            Find your next great read with recommendations.
          </Text>
        </View>
      </View>

       <View className="bg-blue-100 rounded-3xl p-8 mx-6 mb-10">
        <Text className="text-2xl font-medium text-gray-900 text-center mb-4">
          "This library management system has transformed how we serve our
          community. It's intuitive, efficient, and patrons love how easy it is
          to use."
        </Text>
        <Text className="text-lg text-blue-700 font-semibold text-center">
          — Sarah Johnson, Head Librarian
        </Text>
      </View>
    </ScrollView>
  );
}

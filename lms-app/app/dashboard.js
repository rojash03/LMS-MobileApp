import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function LibraryDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  const menuItems = [
    { title: "Book Management", icon: "📚" },
    { title: "Borrow Records", icon: "📝" },
    { title: "Members", icon: "👥" },
    { title: "Return Books", icon: "🔄" },
    { title: "Reports", icon: "📊" },
    { title: "Settings", icon: "⚙️" },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-sky-600 pt-12 pb-8 px-6 rounded-b-3xl">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-white text-2xl font-bold">
              Welcome to Library Hub
            </Text>
            <Text className="text-green-100 mt-1">Dashboard</Text>
          </View>
          <TouchableOpacity
            onPress={handleLogout}
            className="bg-blue-700 px-4 py-2 rounded-lg"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Stats Cards */}
      <View className="flex-row flex-wrap justify-between px-6  mt-4 mb-6">
        <View className="bg-white p-4 rounded-xl shadow-sm w-[48%] mb-4">
          <Text className="text-gray-600">Total Books</Text>
          <Text className="text-2xl font-bold text-blue-600">150</Text>
        </View>
        <View className="bg-white p-4 rounded-xl shadow-sm w-[48%] mb-4">
          <Text className="text-gray-600">Available Books</Text>
          <Text className="text-2xl font-bold text-green-600">120</Text>
        </View>
        <View className="bg-white p-4 rounded-xl shadow-sm w-[48%] mb-4">
          <Text className="text-gray-600">Borrowed Books</Text>
          <Text className="text-2xl font-bold text-red-600">30</Text>
        </View>
        <View className="bg-white p-4 rounded-xl shadow-sm w-[48%] mb-4">
          <Text className="text-gray-600">Active Members</Text>
          <Text className="text-2xl font-bold text-purple-600">25</Text>
        </View>
      </View>
      <View className="p-6">
        <Text className="text-xl font-semibold text-gray-800 mb-6">
          Quick Actions
        </Text>
        <View className="flex-row flex-wrap justify-between">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm mb-4 w-[48%] items-center"
              activeOpacity={0.7}
            >
              <Text className="text-3xl mb-2">{item.icon}</Text>
              <Text className="text-gray-800 font-medium text-center">
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Activity */}
        <View className="bg-white rounded-xl p-6 shadow-sm mt-4">
          <Text className="text-lg font-semibold text-gray-800 mb-3">
            Recent Activity
          </Text>
          <View className="space-y-3">
            <View className="flex-row items-center py-2">
              <View className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
              <Text className="text-gray-600 flex-1">
                New book "React Basics" added
              </Text>
              <Text className="text-gray-400 text-sm">5 min ago</Text>
            </View>
            <View className="flex-row items-center py-2">
              <View className="w-2 h-2 bg-green-500 rounded-full mr-3" />
              <Text className="text-gray-600 flex-1">
                Member Jane borrowed "Java Guide"
              </Text>
              <Text className="text-gray-400 text-sm">30 min ago</Text>
            </View>
            <View className="flex-row items-center py-2">
              <View className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
              <Text className="text-gray-600 flex-1">
                Book "Python 101" returned
              </Text>
              <Text className="text-gray-400 text-sm">2 hours ago</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

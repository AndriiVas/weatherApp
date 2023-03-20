import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function Asurion({ navigation }) {
  function openAsurionWebsite() {
    Linking.openURL("https://www.asurion.com/");
  }
  return (
    <View style={tw`flex-1 bg-white items-center justify-center`}>
      <Text style={tw`text-4xl font-bold`}>This is Asurion component</Text>
      <TouchableOpacity
        style={tw`bg-gray-900 rounded-lg py-4 px-8 mt-8`}
        onPress={openAsurionWebsite}
      >
        <Text style={tw`text-white font-bold text-lg`}>
          Visit Asurion Website
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`bg-gray-900 rounded-lg py-4 px-8 mt-8`}
        onPress={() => navigation.goBack()}
      >
        <Text style={tw`text-white font-bold text-lg`}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

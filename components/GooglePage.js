import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function Google({ navigation }) {
  function openGoogleWebsite() {
    Linking.openURL("https://www.google.com/");
  }
  return (
    <View style={tw`flex-1 bg-white items-center justify-center`}>
      <Text style={tw`text-4xl font-bold`}>This is Google component</Text>
      <TouchableOpacity
        style={tw`bg-gray-900 rounded-lg py-4 px-8 mt-8`}
        onPress={openGoogleWebsite}
      >
        <Text style={tw`text-white font-bold text-lg`}>Visit Google</Text>
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

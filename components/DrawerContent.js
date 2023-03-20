import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";

const DrawerContent = (props) => {
  const navigation = useNavigation();

  const handlePress = (screenName) => {
    navigation.navigate(screenName);
    props.navigation.closeDrawer();
  };

  return (
    <View style={tw`flex-1`}>
      <TouchableOpacity
        style={tw`flex-row items-center p-4`}
        onPress={() => handlePress("Home")}
      >
        <Text style={tw`text-lg font-bold text-gray-800`}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`flex-row items-center p-4`}
        onPress={() => handlePress("Asurion page")}
      >
        <Text style={tw`text-lg font-bold text-gray-800`}>Asurion</Text>
      </TouchableOpacity>
    </View>
  );
};
export default DrawerContent;

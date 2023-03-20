import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const BurgerMenu = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <View>
        <Text>Burger Menu</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BurgerMenu;

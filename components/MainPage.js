import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import tw from "tailwind-react-native-classnames";
import DrawerContent from "./DrawerContent";
import Google from "./GooglePage";
import HomeScreen from "./HomeScreen";

const Drawer = createDrawerNavigator();

export default function MainPage() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={tw`bg-white w-3/4`}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Google" component={Google} />
    </Drawer.Navigator>
  );
}

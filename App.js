import React from "react";
import MainPage from "./components/MainPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import tw from "tailwind-react-native-classnames";
import Asurion from "./components/AsurionPage";
import BurgerMenu from "./components/BugerMenu";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerTitleStyle: tw`text-xl font-bold text-center`,
          headerStyle: tw`bg-gray-900`,
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="Main Page"
          component={MainPage}
          options={[
            ({ navigation }) => ({
              headerLeft: () => <BurgerMenu navigation={navigation} />,
            }),
          ]}
        />
        <Stack.Screen
          name="Asurion page"
          component={Asurion}
          options={[
            ({ navigation }) => ({
              headerLeft: () => <BurgerMenu navigation={navigation} />,
            }),
          ]}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

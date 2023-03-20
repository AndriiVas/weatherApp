import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import { API_KEY } from "@env";
export default function HomeScreen() {
  const navigation = useNavigation();

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no
          `
      );
      const json = await response.json();
      setWeatherData(json);
    } catch (error) {
      setError(error);
    }
  };
  return (
    <View style={tw`flex-1 bg-white items-center justify-center`}>
      <StatusBar backgroundColor="#1A202C" barStyle="light-content" />

      <Text style={tw`text-4xl font-bold text-gray-900 mb-8`}>Weather App</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Asurion page")}
        style={tw`bg-gray-900 rounded-lg py-4 px-8`}
      >
        <Text style={tw`text-white font-bold text-lg`}>Go to Asurion page</Text>
      </TouchableOpacity>
      <TextInput
        style={tw`border-2 border-gray-300 rounded-lg p-4 w-80 my-8 text-gray-900`}
        onChangeText={(text) => setCity(text)}
        value={city}
        placeholder="Enter city name"
        placeholderTextColor="#A0AEC0"
      />
      <TouchableOpacity
        style={tw`bg-purple-700 rounded-full py-4 px-8`}
        onPress={getWeather}
      >
        <Text style={tw`text-white font-bold text-lg`}>Get Weather</Text>
      </TouchableOpacity>
      {weatherData?.current && (
        <View style={tw`mt-8 bg-gray-200 p-4 rounded-lg w-80`}>
          <Text
            style={tw`text-center text-xl text-gray-900`}
          >{`Current temperature in ${weatherData.location.name}: ${weatherData.current.temp_c}°C, feels like ${weatherData?.current.feelslike_c}°C`}</Text>
        </View>
      )}
      {weatherData?.error && (
        <View style={tw`mt-8 bg-gray-200 p-4 rounded-lg w-80`}>
          <Text
            style={tw`text-center text-xl text-gray-900`}
          >{`No location found`}</Text>
        </View>
      )}
    </View>
  );
}

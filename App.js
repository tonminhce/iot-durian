import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/HomePage/HomeScreen";
import AutomationScreen from "./screens/AutomationScreen";
import { ScenarioScreenOptions } from "./screens/ScenarioPage";
import ScenarioStack from "./screens/ScenarioPage";
import { Colors } from "./constants/colors";

// SplashScreen.preventAutoHideAsync()
//   .then((_) => {})
//   .catch(console.warn);

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "be-vietnam": require("./assets/fonts/BeVietnamPro-Regular.ttf"),
    "epilogue-700": require("./assets/fonts/Epilogue-SemiBold-700.ttf"),
    Pacifico: require("./assets/fonts/Pacifico-Regular.ttf"),
  });
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Automation") {
                iconName = focused ? "cog" : "cog-outline";
              } else if (route.name === "Scenario Stack") {
                iconName = focused ? "layers" : "layers-outline";
              } else if (route.name === "Statistic") {
                iconName = focused ? "analytics" : "analytics-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "settings-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#007FFF",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen name="Automation" component={AutomationScreen} />
          <Tab.Screen
            name="Scenario Stack"
            component={ScenarioStack}
            options={ScenarioScreenOptions}
          />
          {/* <Tab.Screen name="Statistic" component={StatisticScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

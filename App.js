import React from "react";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopBar from "./components/TopBar";

const Stack = createNativeStackNavigator();

let firststartup = true;

//add app registry to the export if there are view errors
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            //pass colorpalette to TopBar
            header: () => <TopBar />,
            headerShown: true,
            headerMode: "float",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

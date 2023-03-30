import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "./src/screens/AccountScreen";
import HomeSceen from "./src/screens/HomeSceen";
import LoginScreen from "./src/screens/LoginScreen";
import MoreServices from "./src/screens/MoreServices";
import SignUpScreen from "./src/screens/SignUpScreen";
import StatisticsScreen from "./src/screens/StatisticsScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import MessageScreen from "./src/screens/MessageScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={HomeSceen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="MoreSevices"
          component={MoreServices}
          options={{ headerShown: false }}
        />
            <Stack.Screen
          name="Statistics"
          component={StatisticsScreen}
          options={{ headerShown: false }}
        />

          <Stack.Screen
          name="Message"
          component={MessageScreen}
          options={{ headerShown: false }}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

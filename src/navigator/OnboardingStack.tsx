import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../pages/Onboarding";
const Stack = createNativeStackNavigator();

export const OnboardingStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Onboarding"
      component={Onboarding}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

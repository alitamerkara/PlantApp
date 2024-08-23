import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { OnboardingStack } from "./OnboardingStack";
import { AppStack } from "./AppStack";
import { RootState } from "../store/store";

export default function Router() {
  const onboard = useSelector((state: RootState) => state.slicer.onboard);

  return (
    <NavigationContainer>
      {onboard ? <OnboardingStack /> : <AppStack />}
    </NavigationContainer>
  );
}

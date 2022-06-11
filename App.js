import { StatusBar } from "expo-status-bar";
import RootStackNavigator from "./navigation/RootStackNavigator";
import { useFonts } from "expo-font";
import LoginContextProvider from "./store/context/login-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    SourceSansRegular: require("./assets/fonts/SourceSansPro-Regular.ttf"),
    SourceSansSemiBold: require("./assets/fonts/SourceSansPro-SemiBold.ttf"),
    SourceSansBold: require("./assets/fonts/SourceSansPro-Bold.ttf"),
    SourceSansBlack: require("./assets/fonts/SourceSansPro-Black.ttf"),
    SourceSansLight: require("./assets/fonts/SourceSansPro-Light.ttf"),
  });

  if (!fontsLoaded) {
    //if fonts not loaded, we return nothing
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <LoginContextProvider>
        <RootStackNavigator />
      </LoginContextProvider>
    </>
  );
}

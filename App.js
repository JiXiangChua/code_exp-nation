import { StatusBar } from "expo-status-bar";
import RootStackNavigator from "./navigation/RootStackNavigator";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    SourceSansRegular: require("./assets/fonts/SourceSansPro-Regular.ttf"),
    SourceSansSemiBold: require("./assets/fonts/SourceSansPro-SemiBold.ttf"),
    SourceSansBold: require("./assets/fonts/SourceSansPro-Bold.ttf"),
    SourceSansBlack: require("./assets/fonts/SourceSansPro-Black.ttf"),
    SourceSansLight: require("./assets/fonts/SourceSansPro-Light.ttf"),
  });

  if (!loaded) {
    //load fonts
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <RootStackNavigator />
    </>
  );
}

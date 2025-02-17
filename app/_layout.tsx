import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import GlobalProvider from "../context/globalProvider";

export default function RootLayout() {
  return (
    <GlobalProvider>
    <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
        <Stack.Screen name="onboarding/index" />
        <Stack.Screen name="auth/index" />
        <Stack.Screen name="screens/listingDetails" />
    </Stack>
    <StatusBar style="dark" />
    </GlobalProvider>
  );
}

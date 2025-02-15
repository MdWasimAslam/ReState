import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
    <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
        <Stack.Screen name="onboarding/index" />
        <Stack.Screen name="auth/index" />
    </Stack>
    <StatusBar style="dark" />
    </>
  );
}

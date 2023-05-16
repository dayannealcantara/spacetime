// eslint-disable-next-line prettier/prettier
import { StatusBar } from "expo-status-bar";
// eslint-disable-next-line prettier/prettier
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text className="text-5xl font-bold text-zinc-50">I love you baby</Text>
      <StatusBar style="auto" />
    </View>
    // eslint-disable-next-line prettier/prettier
  );
}

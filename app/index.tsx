import "./global.css";
import { Text, View } from "react-native";
import { verifyInstallation } from 'nativewind';

export default function Index() {
  verifyInstallation();
  return (

 <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-red-500">Hello, World!</Text>
    </View>

  );
}

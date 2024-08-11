import { Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import { useRouter } from 'expo-router';

export default function App() {
  
  const router = useRouter()

  const handlePress = () => {
    router.push('/(tabs)/home');
  };

  return (
    <SafeAreaView className="bg-gray-1 h-full">
      <View className="w-full justify-center items-center min-h-[85vh] px-2">
        <Image
          source={images.pat}
          className="w-[400px] h-full opacity-20"
        />
        <View className="absolute items-center top-[8%]">
            <Text className="text-5xl text-black font-bold mb-5">UserList</Text>
            <Text className="text-sl text-black font-preguler justify-center">UserList is an app designed to display user information in a clear and organized manner. With UserList, you can easily view details about users, including their ID, email, name, address, and more</Text>
        </View>
        <TouchableOpacity onPress={handlePress} className="absolute bg-black rounded-xl min-h-[50px] w-full justify-center items-center bottom-10">
          <Text className="text-white font-psemibold text-lg ">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
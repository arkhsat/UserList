import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from '../constants';
import { useRouter } from 'expo-router';
import { useNavigation } from 'expo-router';

const DetailScreen = ({}) => {
  const navigation = useNavigation();
  const router = useRouter();
  
  const colorMap = {
    1: '#f296dd',
    2: '#b7f7c8',
    3: '#f296dd',
    4: '#f296dd',
    5: '#f296dd',
    6: '#f296dd',
    7: '#b7f7c8',
    8: '#b7f7c8',
    9: '#f296dd',
    10: '#f296dd',
  };

  const handlePress = () => {
    router.push('/(tabs)/home');
  };

  const map = () => {
    const lat = item.address?.geo?.lat;
    const lng = item.address?.geo?.lng;
  
    if (lat && lng) {
      navigation.navigate('map', { lat, lng, name: item.name });
    } else {
      console.error('Latitude or Longitude is missing.');
    }
  };

  const route = useRoute();
  const { item, image } = route.params;

  const backgroundColor = colorMap[item.id] || '#ffffff';

  return (
    <SafeAreaView className="bg-gray-1 h-full p-2">
      <ScrollView contentContainerStyle={{ height: 'auto' }}>
        <TouchableOpacity onPress={handlePress}>
          <View className="ml-1 mt-4">
            <Image
              source={icons.back}
              className="w-[35px] h-[35px]"
            />
          </View>
        </TouchableOpacity>
        <Text className="text-2xl text-center font-pbold mb-5">Detail User</Text>
        <View className="p-4 rounded-lg shadow-md border-2 border-black" style={{ backgroundColor }}>
          <View>
            <Text className="text-xl font-bold text-center">{item.name}</Text>
            <Text className="text-sl font-bold mb-5 text-center">ID: {item.id}</Text>
            <View className="items-center mb-8">
              <Image
                source={image}
                className="w-[300px] h-[300px] rounded-full"
              />
            </View>  
            <Text className="text-sl mb-2">Username: {item.username}</Text>
            <Text className="text-sl mb-2">Email: {item.email}</Text>
            <TouchableOpacity onPress={map}>
              <Text className="text-sl mb-2 text-blue-100">
                Address: {item.address.street}, {item.address.city}, {item.address.zipcode}
              </Text>
            </TouchableOpacity>
            <Text className="text-sl mb-2">Phone: {item.phone}</Text>
            <Text className="text-sl mb-2">Website: {item.website}</Text>
            <Text className="text-sl mb-2">Company: {item.company.name}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

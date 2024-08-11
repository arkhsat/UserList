import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from 'expo-router';
import Box from '../../components/box';
import { images } from '../../constants';

const Home = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const img = {
    1: images.wom1,
    2: images.man2,
    3: images.wom3,
    4: images.wom4,
    5: images.wom5,
    6: images.wom6,
    7: images.man7,
    8: images.man8,
    9: images.wom9,
    10: images.wom10,
  }

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

  
  const API = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    API();
  }, []);

  const handlePress = (item, image) => {
    navigation.navigate('detail', {item, image});
  };

  const map = (item) => {
    const lat = item.address?.geo?.lat;
    const lng = item.address?.geo?.lng;

    if (lat && lng) {
      console.log('lat and lng:', lat, lng);
      navigation.navigate('map', { lat, lng, name: item.name });
    } else {
      console.error('Latitude or Longitude is missing.');
    }
  };

  return (
    <SafeAreaView className="flex-1 p-2 bg-gray-1 h-full">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View className="mb-5 mt-5">
            <Text className="text-2xl font-pbold text-black text-center">User List</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <>
            <Box
              name = {item.name}
              id = {item.id}
              username = {item.username}
              email = {item.email}
              add = {item.address}
              image={img[item.id]}
              handlePress={() => handlePress(item, img[item.id])}
              map={() => map(item)}
              colorMap={colorMap}
            />
          </>
          
        )}
      />
    </SafeAreaView>
  );
};




export default Home;

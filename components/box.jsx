import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Box = ({ name, id, username, email, add, handlePress, map, image, colorMap }) => {
  const backgroundColor = colorMap[id] || '#ffffff';

  return (
    <TouchableOpacity onPress={handlePress} className="mx-2 mb-3">
      <View className="flex-row rounded-lg p-2 shadow-md border-2 border-black" style={{ backgroundColor }}>
        <Image
            source={image}
            className="w-[100px] h-[140px] rounded-[5px]"
        />
        <View className="flex-1 flex-col ml-3">
          <Text className="text-lg font-bold text-black">{name}</Text>
          <Text className="text-xs text-black mb-2 text-justify">ID: {id}</Text>
          <Text className="text-xs text-black text-justify">Username: {username}</Text>
          <Text className="text-xs text-black mb-1 text-justify">Email: {email}</Text>

          <TouchableOpacity onPress={map}>
            <Text className="text-xs text-justify text-blue-100">
              Address: {add.street}, {add.city}, {add.zipcode}
            </Text>
            <Text className="text-xs text-justify text-blue-100">
              Latitude: {add.geo.lat}, Longitude: {add.geo.lng}
            </Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Box;

import React, {useState, useEffect} from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, TouchableOpacity, Image } from 'react-native';
import { icons } from '../constants';
import { useNavigation } from 'expo-router';
import { useRouter } from 'expo-router';
import { useRoute } from '@react-navigation/native';

export default function MapScreen() {
    const router = useRouter();
    const route = useRoute();

    const handlePress = () => {
        router.push('/(tabs)/home');
    };

    const { lat, lng, name } = route.params;
    console.log('lat and lng:', lat, lng);

    const[mapRegion, setMapRegion] = useState({
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
        latitudeDelta: 0.0922,
        longitude: 0.0421,
    })

    useEffect(() => {
        setMapRegion({
          latitude: parseFloat(lat),
          longitude: parseFloat(lng),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }, [lat, lng]);

    return (
        <View className="flex-1">
            <MapView
                className="w-[100%] h-[100%]"
                region={mapRegion}
            >

            <Marker
                coordinate={{
                latitude: mapRegion.latitude,
                longitude: mapRegion.longitude
            }}
          title={name}
          description={`Lat: ${lat}, Lng: ${lng}`}
        />
            </MapView>

            <TouchableOpacity onPress={handlePress} className="absolute top-2 left-2">
                <Image
                    source={icons.back}
                    className="w-[40px] h-[40px] color-black mt-10"
                    
                />
            </TouchableOpacity>
        </View>
    );
}

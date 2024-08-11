import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import * as Location from 'expo-location';

export default function MapScreen() {
    const [mapRegion, setMapRegion] = useState({
        latitude: -37.3159,
        longitude: 81.1496,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const [errorMsg, setErrorMsg] = useState('');

    const userLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg("Access to location was denied");
            return;
        }

        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        setMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        });
        console.log(location.coords.latitude, location.coords.longitude);
    };

    useEffect(() => {
        userLocation();
    }, []);

    return (
        <View className="flex-1">
            <MapView
                className="w-full h-full"
                region={mapRegion}
            >
                <Marker
                    coordinate={{
                        latitude: mapRegion.latitude,
                        longitude: mapRegion.longitude
                    }}
                    title='Your Location'
                />
            </MapView>
            <TouchableOpacity 
                className="absolute bottom-5 left-20 right-20 bg-blue-500 p-2 rounded-xl items-center justify-center"
                onPress={userLocation}
            >
                <Text className="text-white text-center text-lg">Get the Location</Text>
            </TouchableOpacity>
            {errorMsg ? <Alert>{errorMsg}</Alert> : null}
        </View>
    );
}

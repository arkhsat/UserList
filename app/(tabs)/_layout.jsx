import { View, Text, Image } from 'react-native';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { icons } from '../../constants';

const TabsIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
};

const Tabslayout = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#FFA001',
            tabBarInactiveTintColor: '#CDCDE0',
            tabBarStyle: {
              backgroundColor: '#161622',
              borderTopWidth: 1,
              borderTopColor: '#232533',
              height: 70,
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 20,
            },
          }}
        >
          <Tabs.Screen
            name="home"
            options={{
              title: 'Home',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabsIcon
                  icon={icons.home}
                  color={color}
                  name="Home"
                  focused={focused}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="maps"
            options={{
              title: 'Map',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabsIcon
                  icon={icons.map}
                  color={color}
                  name="Map"
                  focused={focused}
                />
              ),
            }}
          />
        </Tabs>
      </View>

    </>
  );
};

export default Tabslayout;

import { Tabs, Slot, Stack } from 'expo-router';

import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        
        }}
      />

    <Tabs.Screen
            name="blog"
            options={{
              title: 'Blog',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
              ),
            
            }}
          />
 
      <Slot />
       <Tabs />
       {/* <Stack.Screen> component in the routes's file. This is useful for interactions that change the UI. */}
        <Stack />
      {/* Native Layouts */}

      {/* Native Layouts */}
            <Stack 
              screenOptions={{
                headerStyle:{
                  backgroundColor:'#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle:{
                  fontWeight:'bold',
                },
              }}>
{/* Optionally configure static options outside the route.*/}
              <Stack.Screen name="home" options={{}} />
            </Stack>
    </Tabs>




  );
}

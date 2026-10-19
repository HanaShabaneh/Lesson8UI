
import React from 'react';
import { Tabs } from 'expo-router';

// Modern SVG icons
import {
  LayoutGrid,
  ArrowDownUp,
  List,
  Keyboard
} from 'lucide-react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6F4E37',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { height: 65, paddingTop: 5 },
      }}
    >

      {/* Tab 1: Flexbox */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Flexbox',
          tabBarIcon: ({ color, size }) => (
            <LayoutGrid size={size} color={color} />
          ),
        }}
      />

      {/* Tab 2: ScrollView */}
      <Tabs.Screen
        name="scroll"
        options={{
          title: 'ScrollView',
          tabBarIcon: ({ color, size }) => (
            <ArrowDownUp size={size} color={color} />
          ),
        }}
      />

      {/* Tab 3: FlatList */}
      <Tabs.Screen
        name="list"
        options={{
          title: 'FlatList',
          tabBarIcon: ({ color, size }) => (
            <List size={size} color={color} />
          ),
        }}
      />

      {/* Tab 4: Inputs */}
      <Tabs.Screen
        name="inputs"
        options={{
          title: 'Inputs',
          tabBarIcon: ({ color, size }) => (
            <Keyboard size={size} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}

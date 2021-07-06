import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {View,Text,Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CatalogScreen from '../screens/CatalogScreen';
import BagScreen from '../screens/BagScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return(
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          flex: 1,
          backgroundColor: '#24292E',
          height: 80,
          position: 'absolute',
          bottom: 0,
          left: 0,
        }
      }}
  >
        <Tab.Screen 
          name="Главная"
          component={HomeScreen} 
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../src/Tab-icons/icon-home.png')}
                  resizeMode="contain"
                  style={{
                    width: 34,
                    height: 34,
                    tintColor: focused ? '#E2000F' : '#D4D4D9',
                  }}
                />
                <Text
                  style={{color: focused ? '#E2000F' : '#D4D4D9', fontSize: 10}}>
                  Главная
                </Text>
              </View>
            ),
          }} 
        />
        <Tab.Screen 
        name="Каталог" 
        component={CatalogScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../src/Tab-icons/icon-catalog.png')}
                resizeMode="contain"
                style={{
                  width: 34,
                  height: 34,
                  tintColor: focused ? '#E2000F' : '#D4D4D9',
                }}
              />
              <Text
                style={{color: focused ? '#E2000F' : '#D4D4D9', fontSize: 10}}>
                Каталог
              </Text>
            </View>
          ),
        }} 
      />
        <Tab.Screen 
        name="Корзина" 
        component={BagScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../src/Tab-icons/icon-shop.png')}
                resizeMode="contain"
                style={{
                  width: 34,
                  height: 34,
                  tintColor: focused ? '#E2000F' : '#D4D4D9',
                }}
              />
              <Text
                style={{color: focused ? '#E2000F' : '#D4D4D9', fontSize: 10}}>
                Корзина
              </Text>
            </View>
          ),
        }} 
      />
        <Tab.Screen 
        name="Профиль" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../src/Tab-icons/icon-profile.png')}
                resizeMode="contain"
                style={{
                  width: 34,
                  height: 34,
                  tintColor: focused ? '#E2000F' : '#D4D4D9',
                }}
              />
              <Text
                style={{color: focused ? '#E2000F' : '#D4D4D9', fontSize: 10}}>
                Профиль
              </Text>
            </View>
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

export default Tabs;
import { StyleSheet, Text, View, TextInput,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
// import { ScrollView } from 'react-native-gesture-handler'
import Categories from '../components/categories'

export default function HomeScreen() {
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barstyle="dark-content" />
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="23" width="25" stroke="gray" />
                    <TextInput placeholder='Restaurants' className="ml-2 flex-1" />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-300">
                        <Icon.MapPin height="23" width="25" stroke="gray" />
                        <Text className="text-gray-600">New York,NYC</Text>

                    </View>
                </View>
                <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 bg-gray-300 rounded-full">
                    <Icon.Sliders height="23" width="25" stroke="white" />

                </View>
            </View>

            <ScrollView showVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
                }}
            >
                <Categories/>
            </ScrollView>
        </SafeAreaView>
    )
}




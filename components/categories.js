import React from 'react';
import { View, Text } from 'react-native';
import {categories} from '../constants'

export default function Categories () {
  return (
    <View className="mt-4">
      <ScrollView horizontal 
      showHorizontalScrollIndicator={false}
      className="overflow-visible"
      contentContainerStyles={{paddingHorizontal:15}}>
        {
          categories.map((category, index)=>{
            return (
      
            )
          })
        }
        
      </ScrollView>
     
    </View>
  );
}



import { Image, Pressable, Text, View } from 'react-native';

import { useState } from 'react';

const ResultTab = ({navigation, route}) => {

  return (
    <View className={'p-4 flex-1 h-screen bg-gray-200'}>
      <Text className={'text-3xl mb-3 font-bold text-black w-full'}>Results</Text>

      <View className={'flex items-center my-5 w-full '}>
        <View className={'flex items-center justify-center h-40'}>
          <Image
            className={' w-80 h-48 '}
            resizeMode={'contain'}
            resizeMethod={"scale"}
            source={{
              uri: `data:image/png;base64,${route.params.filepath}`
            }}
          />
        </View>
      </View>
      <View className={'flex items-center my-5 w-full h-10 border-[1px] border-black'}>
      </View>
      <View className={'flex items-center mb-3 w-full h-52 border-[1px] border-black'}>
      </View>

      <View className={'flex flex-row items-center justify-center py-2 w-full'}>
        <Pressable
          className={'bg-blue-800 px-10 py-2 mb-2 mx-2'}
        >
          <Text className="text-xl font-semibold text-center text-gray-200">Export Data</Text>
        </Pressable>
        <Pressable
          className={'bg-red-800 px-10 py-2 mb-2 mx-2'}
          onPress={()=> navigation.navigate('CameraTab')}
        >
          <Text className="text-xl font-semibold text-center text-gray-200">Close</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ResultTab;
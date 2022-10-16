import { Image, Pressable, Text, View } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import { useState } from 'react';

const CameraTab = () => {
  const [filepath, setFilepath] = useState('')

  const onSelectImage = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
    }
    const result = await launchCamera(options);
    // if(result.didCancel){
    //   alert('Cancelled')
    // }else{
    //   // console.log('Base64', result.assets[0].base64);
    //   setFilepath(result.assets[0].base64);
    // }
  }
  return (
    <View className={'p-4 justify-center flex-1 h-screen bg-gray-200'}>
      <Text className={'text-2xl mb-3 font-bold text-black'}>Live Capture of Image</Text>
      <Text className={'text-lg mb-6 font-bold'}>
        Click the button and capture an photo
      </Text>
      <View className={'flex flex-col items-center justify-center py-2 w-full z-10'}>
        <Pressable
          className={'bg-blue-900 w-4/5 py-5 mb-2'}
          onPress={()=> onSelectImage()}
        >
          <Text className="text-xl font-semibold text-center text-gray-200">Take photo</Text>
        </Pressable>
      </View>
      <View className={'flex items-center mb-2 w-full'}>
        <View className={'flex items-center justify-center h-40 '}>
          <Image
            className={' w-64 h-fit'}
            resizeMode={'contain'}
            resizeMethod={"scale"}
            source={require('../assets/position.jpg')}
          />
        </View>
      </View>
      <View className={'flex flex-col items-center justify-center py-2 w-full'}>
        <Pressable
          className={'bg-green-900 w-4/5 py-5 mb-2'}
          onPress={()=> onSelectImage()}
        >
          <Text className="text-xl font-semibold text-center text-gray-200">Start the scan</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CameraTab;
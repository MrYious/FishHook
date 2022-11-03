import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

import {launchImageLibrary} from 'react-native-image-picker';

const GalleryTab = ({navigation}) => {

  const [filepath, setFilepath] = useState('')

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setFilepath('');
    });
    return unsubscribe;
  }, [navigation]);

  const onSelectImage = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
    }
    const result = await launchImageLibrary(options);
    if(result.didCancel){
      // alert('Cancelled')
    }else{
      // console.log('Response', result.assets[0]);
      // console.log('fileName -> ', result.assets[0].base64);
      setFilepath(result.assets[0].base64);
    }
  }

  const handleScanImage = () => {
    if(filepath){
      navigation.navigate('Result', { filepath: filepath })
    }
  }

  return (
    <View className={'p-4 justify-center flex-1 h-screen bg-gray-200'}>
      <Text className={'text-2xl mb-3 font-bold text-black'}>Select from Device</Text>
      <Text className={'text-lg mb-6 font-bold text-black'}>
        Click the button and select an image
      </Text>
      <View className={'flex flex-col items-center justify-center py-2 w-full z-10 mb-5'}>
        <Pressable
          className={'bg-blue-900 w-4/5 py-5 '}
          onPress={()=> onSelectImage()}
        >
          <Text className="text-xl font-semibold text-center text-gray-200">Select an image</Text>
        </Pressable>
      </View>
      <View className={'flex items-center mb-5 w-full'}>
        {filepath ?
          <View className={'flex items-center justify-center h-40 '}>
            <Image
              className={' w-80 h-48 '}
              resizeMode={'contain'}
              resizeMethod={"scale"}
              source={{
                uri: `data:image/png;base64,${filepath}`
              }}
            />
          </View>
          :
          <View className={'flex items-center justify-center w-full h-40 '}>
            <Text className='text-black'>The image goes here</Text>
          </View>
        }
      </View>
      <View className={'flex flex-col items-center justify-center py-2 w-full'}>
        <Pressable
          className={`w-4/5 py-5 mb-2 ${filepath ? 'bg-green-900' : 'bg-gray-500'}`}
          onPress={handleScanImage}
        >
          <Text className="text-xl font-semibold text-center text-gray-200">Start the scan</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GalleryTab;
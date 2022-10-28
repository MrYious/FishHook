import { Image, Pressable, ScrollView, Text, View } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';

const ResultTab = ({navigation, route}) => {
  const [result, setEval] = useState(false);
  const [details, setDetails] = useState({
    texture: false,
    color: true,
    pattern: false,
    shape: false,
  });

  return (
    <ScrollView className={'p-4 flex-1 h-screen bg-gray-200'}>
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
      <View className={'flex flex-row px-2 items-center my-5 w-full h-10 border-[1px] border-black'}>
        <Text className='text-xl font-bold text-black'>Evaluation:</Text>
        <Text className={` text-xl px-3 font-bold ${result? 'text-green-700' : 'text-red-700'}`}>{ '100' +' %'}</Text>
        <Text className={` text-xl font-bold ${result? 'text-green-700' : 'text-red-700'}`}>( TiLV {result ? 'POSITIVE' : 'NEGATIVE'} )</Text>
      </View>
      <View className={'flex flex-col p-2 mb-3 w-full  border-[1px] border-black'}>
        <Text className='mb-2 text-xl font-bold text-black'>Details:</Text>
        {/* 1 */}
        <View className='flex flex-row items-center w-full mb-2'>
          <Text className='w-[60%] text-xl'>Skin Texture: </Text>
          <Text className={`w-[25%] text-xl font-bold ${details.texture? 'text-green-700' : 'text-red-700'}`}>{details.texture ? 'Positive' : 'Negative'}</Text>
          <Pressable className='pl-2' onPress={() => alert('Clicked')}>
            <MaterialIcons name={'info-outline'} size={20} color={'black'} />
          </Pressable>
        </View>
        {/* 2 */}
        <View className='flex flex-row items-center w-full mb-2'>
          <Text className='w-[60%] text-xl'>Skin Color: </Text>
          <Text className={`w-[25%] text-xl font-bold ${details.color? 'text-green-700' : 'text-red-700'}`}>{details.color ? 'Positive' : 'Negative'}</Text>
          <Pressable className='pl-2' onPress={() => alert('Clicked')}>
            <MaterialIcons name={'info-outline'} size={20} color={'black'} />
          </Pressable>
        </View>
        {/* 3 */}
        <View className='flex flex-row items-center w-full mb-2'>
          <Text className='w-[60%] text-xl'>Scale Pattern: </Text>
          <Text className={`w-[25%] text-xl font-bold ${details.pattern? 'text-green-700' : 'text-red-700'}`}>{details.pattern ? 'Positive' : 'Negative'}</Text>
          <Pressable className='pl-2' onPress={() => alert('Clicked')}>
            <MaterialIcons name={'info-outline'} size={20} color={'black'} />
          </Pressable>
        </View>
        {/* 4 */}
        <View className='flex flex-row items-center w-full mb-2'>
          <Text className='w-[60%] text-xl'>Abdominal Shape: </Text>
          <Text className={`w-[25%] text-xl font-bold ${details.shape? 'text-green-700' : 'text-red-700'}`}>{details.shape ? 'Positive' : 'Negative'}</Text>
          <Pressable className='pl-2' onPress={() => alert('Clicked')}>
            <MaterialIcons name={'info-outline'} size={20} color={'black'} />
          </Pressable>
        </View>
      </View>

      <View className={'flex flex-row items-center justify-center py-2 w-full'}>
        <Pressable
          className={'bg-green-800 px-5 py-2 mb-2 mx-2'}
        >
          <Text className="text-xl font-semibold text-center text-gray-200">Export</Text>
        </Pressable>
        <Pressable
          className={'bg-blue-800 px-5 py-2 mb-2 mx-2'}
        >
          <Text className="text-xl font-semibold text-center text-gray-200">Share</Text>
        </Pressable>
        <Pressable
          className={'bg-red-800 px-5 py-2 mb-2 mx-2'}
          onPress={()=> navigation.navigate('CameraTab')}
        >
          <Text className="text-xl font-semibold text-center text-gray-200">Close</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ResultTab;
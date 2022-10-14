import { BackHandler, Pressable, Text, View } from 'react-native';

const Landing = ({ navigation }) => {
  return (
    <View className={'items-center justify-center flex-1 h-screen bg-gray-200'}>

      {/* HEADER */}
      <View className={'flex flex-col items-center justify-center py-4 w-full h-32'}>
        <View className={'flex flex-row'}>
          <Text className={'font-bold text-5xl text-green-700'}>Fish</Text>
          <Text className={'font-bold text-5xl text-red-700'}>Hook</Text>
        </View>

        <Text className={'font-light text-lg mt-1'}>Capture each threat, Protect your Tilapias</Text>
      </View>

      {/* ACTIONS */}
      <View className={'flex flex-col items-center justify-center py-4 w-full'}>
        <Pressable
          className={'bg-green-700 w-32 py-3 mb-2'}
          onPress={()=> navigation.navigate('Main')}
        >
          <Text className="text-xl font-semibold text-center text-gray-300">Start</Text>
        </Pressable>
        <Pressable
          className={'bg-red-900 w-32 py-3 '}
          onPress={()=> BackHandler.exitApp()}
        >
          <Text className="text-xl font-semibold text-center text-white">Exit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Landing;

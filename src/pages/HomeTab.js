import { Text, View } from 'react-native';

const HomeTab = () => {
  return (
    <View className={' p-4  items-center flex-1 h-screen bg-gray-200'}>
      <Text className={'text-5xl font-bold my-7 text-black'}>Welcome</Text>
      <View className={''}>
        <Text className={'text-lg mb-4 font-bold text-justify text-black'}>
         <Text className={'text-3xl font-bold text-green-700'}>FishHook </Text>
          helps in detecting the existence of TiLV in your nile tilapias based to physical signs.
        </Text>
        <Text className={'text-lg font-bold text-justify text-black'}>
         <Text className={'text-3xl font-bold text-red-700'}>TiLV</Text>
          , or Tilapia Lake Virus, is a highly contagious pathogen that has detrimental effects on tilapia farming.
        </Text>
        <Text className={'text-lg mb-4 font-bold text-justify text-black'}>
          Due to its link to high fish mortality rates and significant negative economic effects on the aquaculture of tilapia, this virus has drawn a lot of interest from the aquaculture industry worldwide.
        </Text>
        <Text className={'text-lg mb-6 font-bold text-justify text-black'}>
          This app evaluates an image of nile tilapia and check if there are positive signs and symptoms of TiLV.
        </Text>
        <Text className={'text-lg mb-4 font-bold text-justify text-black'}>
          Start using the app by checking out the other tabs.
        </Text>
      </View>
    </View>
  );
};

export default HomeTab;
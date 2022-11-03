import { Image, ScrollView, Text, View } from 'react-native';

const InfoTab = () => {
  return (
    <View className={'p-4 flex-1 bg-gray-200'}>
      <Text className={'text-2xl mb-3 font-bold text-black'}>Instructions</Text>
      <Text className={'text-lg mb-1 font-bold text-black'}>
        Using an existing image:
      </Text>
      <Text className={'text-lg mb-3 text-justify text-black'}>
        Click the <Text className={'font-bold'}>Gallery</Text> Tab, then select the tilapia image from your device's gallery.
      </Text>
      <Text className={'text-lg mb-1 font-bold text-black'}>
        Using the camera:
      </Text>
      <Text className={'text-lg mb-3 text-justify text-black'}>
        Click the <Text className={'font-bold'}>Camera</Text> Tab, then capture the image by pointing the camera to the tilapia and pressing the shutter button.
      </Text>
      <Text className={'text-lg mb-1 font-bold text-black'}>
        The Tilapia image
      </Text>
      <Text className={'text-lg mb-1 text-justify text-black'}>
        The tilapia <Text className={'font-bold'}>must</Text> be in the Profile View where one side of the fish is fully visible. The process will fail if this condition is not met. 
      </Text>
      <Text className={'text-lg mb-1 text-justify text-black'}>
        The image should also be in the highest quality possible for more extraction of details.
      </Text>
      <Text className={'text-lg mb-4 text-justify text-black'}>
        The following image is an example of a tilapia image in Profile View.
      </Text>
      <View className={'flex items-center justify-center h-32 '}>
        <Image
          className={'w-full h-fit'}
          resizeMode={'contain'}
          resizeMethod="scale"
          source={require('../assets/position.png')}
        />
      </View>
    </View>
  );
};

export default InfoTab;
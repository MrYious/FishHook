import { Text, View } from 'react-native';

const AboutTab = () => {
  return (
    <View className={' p-4 justify-center flex-1 h-screen bg-gray-200'}>
      <Text className={'text-2xl mb-3 font-bold text-black'}>
        Everything About Us
      </Text>
      <Text className={'text-lg mb-1 font-bold text-black'}>
        Objective
      </Text>
      <Text className={'text-lg mb-3 text-justify text-black'}>
        To detect and identify the physical signs and symptoms of Tilapia Lake Virus TiLV.
      </Text>
      <Text className={'text-lg mb-1 font-bold text-black'}>
        Technology
      </Text>
      <Text className={'text-lg mb-3 text-justify text-black'}>
        The app was developed using Artificial Intelligence and Image Processing.
      </Text>
      <Text className={'text-lg mb-1 font-bold text-black'}>
        Authors
      </Text>
      <Text className={'text-lg mb-3 text-justify text-black'}>
        This app was developed by four Computer Science students of Polytechnic University of the Philippines - Sta. Mesa. 
      </Text>
      <Text className={'text-lg mb-1 font-bold text-black'}>
        Contact Us
      </Text>
      <Text className={'text-lg mb-3 text-justify text-black'}>
        You can reach us through the following email: contact@fishhook.com
      </Text>
      <Text className={'text-lg mb-1 font-bold text-black'}>
        License
      </Text>
      <Text className={'text-lg mb-3 text-justify text-black'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, impedit!
      </Text>
    </View>
  );
};

export default AboutTab;
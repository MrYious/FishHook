import { ScrollView, Text, View } from 'react-native';

const AboutTab = () => {
  return (
    <ScrollView className={'p-4 flex-1 bg-gray-200'}>
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
        This project is open source and can be used by future researchers. Access the project thru this link:
        <Text className="underline"> https://github.com/MrYious/FishHook</Text>
      </Text>
      <Text className={'text-lg mb-1 font-bold text-black'}>
        Department of Agriculture - Bureau of Fisheries and Aquatic Resources (DA-BFAR)
      </Text>
      <Text className={'text-lg mb-1 text-justify text-black'}>
        Responsible for the development, improvement, management, and conservation of the country's fishery and aquatic resources.
      </Text>
      <Text className={'text-lg mb-1 text-justify text-black'}>
        Email: info@bfar.da.gov.ph
      </Text>
      <Text className={'text-lg mb-3 text-justify text-black'}>
        Contact #: +63(2)929-8074
      </Text>
      <Text className={'text-lg mb-3 text-justify text-black'}>
      </Text>
    </ScrollView>
  );
};

export default AboutTab;
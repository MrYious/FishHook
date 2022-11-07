import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const ResultTab = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setEval] = useState(false);
  const [details, setDetails] = useState({
    texture: false,
    color: true,
    pattern: false,
    shape: false,
  });

  useEffect(() => {
    setTimeout(()=>{
      console.log('Timer Done')
      setIsLoading(false);
    }, 4000)
  }, [])

  const createPDF = async () => {
    var code = `<div style="display: flex;align-items: flex-start; font-family: Verdana, Geneva, Tahoma, sans-serif; flex-direction: column;padding: 20px;">
      <div style="font-size: 50px;margin: 10px 0px;;">FishHook</div>
      <div style="font-size: 25px;margin: 20px 0px;">Results</div>
      <div style="font-size: 15px;">The Image: </div>
      <img style="width: 50%;border: 2px solid black;margin: 20px 0px 40px 0px;padding: 5px;" src="data:image/png;base64,${route.params.filepath}" alt="">
      <div style="font-size: 15px;font-weight: bold;display: flex; margin-bottom: 15px;">
        <div style="font-weight: bold; width: 200px;">The Evaluation:</div>
        <span style="color: green;">
          12% ( TiLV NEGATIVE )
        </span>
      </div>
      <div style="font-size: 15px;font-weight: bold;display: flex;flex-direction: column;">
        <div style="font-weight: bold; margin-bottom: 10px;">Details:</div>
        <div style="margin-bottom: 10px;display: flex;margin-left: 20px;">
            <div style="font-weight: bold; width: 200px;">Skin Texture: </div>
            <div style="color: green;">
              Negative
            </div>
        </div>
        <div style="margin-bottom: 10px;display: flex;margin-left: 20px;">
            <div style="font-weight: bold; width: 200px;">Skin Color: </div>
            <div style="color: red;">
              Positive
            </div>
        </div>
        <div style="margin-bottom: 10px;display: flex;margin-left: 20px;">
            <div style="font-weight: bold; width: 200px;">Scale Pattern: </div>
            <div style="color: green;">
              Negative
            </div>
        </div>
        <div style="margin-bottom: 10px;display: flex;margin-left: 20px;">
            <div style="font-weight: bold; width: 200px;">Abdominal Shape: </div>
            <div style="color: green;">
              Negative
            </div>
        </div>
      </div>
      <div style="font-size: 15px;font-weight: bold;display: flex;flex-direction: column;">
        <div style="margin: 10px 0px;display: flex;">
            <div style="font-weight: bold; width: 70px;">Date: </div>
            <div >
              November 8, 2022
            </div>
        </div>
      </div>
    </div>`;
    let options = {
      html: code,
      fileName: 'FishHook Results',
      directory: 'Documents',
    };
    // console.log('options', options);
    let file = await RNHTMLtoPDF.convert(options)
    console.log(file);
    alert(file.filePath);
  }

  if(isLoading){
    return (
      <View className={'p-4 flex-1 justify-center items-center h-screen bg-gray-200'}>
        <Text className={'text-2xl mb-3 text-black w-full text-center'}>Processing ...</Text>
      </View>
    );
  } else {
    return (
      <ScrollView className={'p-4 flex-1 h-screen bg-gray-200'}>
        <Text className={'text-3xl mb-3 font-bold text-black w-full'}>Results</Text>

        <View className={'flex items-center my-5 w-full '}>
          <View className={'flex items-center justify-center w-full h-40'}>
            <Image
              className={' w-80 h-52 '}
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
          <Text className={` text-xl px-3 font-bold ${result? 'text-red-700' : 'text-green-700'}`}>{ '12' +' %'}</Text>
          <Text className={` text-xl font-bold ${result? 'text-red-700' : 'text-green-700'}`}>( TiLV {result ? 'POSITIVE' : 'NEGATIVE'} )</Text>
        </View>
        <View className={'flex flex-col p-2 mb-3 w-full  border-[1px] border-black'}>
          <Text className='mb-2 text-xl font-bold text-black'>Details:</Text>
          {/* 1 */}
          <View className='flex flex-row items-center w-full mb-2'>
            <Text className='w-[60%] text-xl text-black'>Skin Texture: </Text>
            <Text className={`w-[25%] text-xl font-bold ${details.texture? 'text-red-700' : 'text-green-700'}`}>{details.texture ? 'Positive' : 'Negative'}</Text>
            <Pressable className='pl-2' onPress={() => alert('Clicked')}>
              <MaterialIcons name={'info-outline'} size={20} color={'black'} />
            </Pressable>
          </View>
          {/* 2 */}
          <View className='flex flex-row items-center w-full mb-2'>
            <Text className='w-[60%] text-xl text-black'>Skin Color: </Text>
            <Text className={`w-[25%] text-xl font-bold ${details.color? 'text-red-700' : 'text-green-700'}`}>{details.color ? 'Positive' : 'Negative'}</Text>
            <Pressable className='pl-2' onPress={() => alert('Clicked')}>
              <MaterialIcons name={'info-outline'} size={20} color={'black'} />
            </Pressable>
          </View>
          {/* 3 */}
          <View className='flex flex-row items-center w-full mb-2'>
            <Text className='w-[60%] text-xl text-black'>Scale Pattern: </Text>
            <Text className={`w-[25%] text-xl font-bold ${details.pattern? 'text-red-700' : 'text-green-700'}`}>{details.pattern ? 'Positive' : 'Negative'}</Text>
            <Pressable className='pl-2' onPress={() => alert('Clicked')}>
              <MaterialIcons name={'info-outline'} size={20} color={'black'} />
            </Pressable>
          </View>
          {/* 4 */}
          <View className='flex flex-row items-center w-full mb-2'>
            <Text className='w-[60%] text-xl text-black'>Abdominal Shape: </Text>
            <Text className={`w-[25%] text-xl font-bold ${details.shape? 'text-red-700' : 'text-green-700'}`}>{details.shape ? 'Positive' : 'Negative'}</Text>
            <Pressable className='pl-2' onPress={() => alert('Clicked')}>
              <MaterialIcons name={'info-outline'} size={20} color={'black'} />
            </Pressable>
          </View>
        </View>
        <View className={'flex flex-row items-center justify-center py-2 w-full'}>
          <Pressable
            className={'bg-green-800 px-5 py-2 mb-2 mx-2'}
            onPress={createPDF}
          >
            <Text className="text-xl font-semibold text-center text-gray-200">Export</Text>
          </Pressable>
          <Pressable
            className={'bg-red-800 px-5 py-2 mb-2 mx-2'}
            onPress={()=> navigation.pop()}
          >
            <Text className="text-xl font-semibold text-center text-gray-200">Close</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  }
};

export default ResultTab;
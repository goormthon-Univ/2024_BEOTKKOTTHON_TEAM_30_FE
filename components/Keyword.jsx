import { Image, Text, View } from "react-native";

import loverIcon from '../assets/twinkleLover.png';
import friendIcon from '../assets/twinkleFriend.png';
import workIcon from '../assets/twinkleWork.png';
import familyIcon from '../assets/twinkleFamily.png';
import dailyIcon from '../assets/twinkleDaily.png';

export default function Keyword({type, keywordText}){
    

    
    return <View className="flex flex-row h-[48px] rounded-[16px] py-[2px] border-solid border-[1px] border-[#F2F4F7] items-center pl-[4px] mb-[12px]">
    <Image
    className="m-[12px]"
      source={
        type === '가족'
          ? familyIcon
          : type === '일상'
          ? dailyIcon
          : type === '친구'
          ? friendIcon
          : type === '직장'
          ? workIcon
          : type === '연인'
          ? loverIcon
          : ''
      }
    />

    <View className="flex flex-col gap-[2px]">
      <Text className="color-[#98A2B3] text-[12px] font-normal">{type}</Text>
      <Text className="color-[#182230] text-[16px] font-medium">{keywordText}</Text>
    </View>
  </View>
}
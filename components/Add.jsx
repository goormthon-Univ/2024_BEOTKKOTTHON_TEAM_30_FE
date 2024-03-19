import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import CalledKeywordItem from './CalledKeywordItem';

import loverIcon from '../assets/twinkleLover.png';
import friendIcon from '../assets/twinkleFriend.png';
import workIcon from '../assets/twinkleWork.png';
import familyIcon from '../assets/twinkleFamily.png';
import dailyIcon from '../assets/twinkleDaily.png';

import assignButton from '../assets/assignButton.png';
import {useContext} from 'react';
import {UserLocContext} from '../contexts/userloc';
import {KeywordsContext} from '../contexts/keywords';
import Keyword from './Keyword';

const CalledKeywords = [
  {id: 0, icon: loverIcon},
  {id: 1, icon: friendIcon},
  {id: 2, icon: workIcon},
  {id: 3, icon: familyIcon},
  {id: 4, icon: dailyIcon},
];

export default function Add() {
  const {moveLoc} = useContext(UserLocContext);
  const {keywords} = useContext(KeywordsContext);
  return (
    <>
      <View>
        <Text className="color-[#606BFF] text-[32px] font-bold">구름아</Text>
        <Text className="color-[#182230] text-[20px] font-bold my-[12px]">
          로 가장 많이 불렸어요!
        </Text>
      </View>

      <View className="mt-10">
        <Text className="color-[#182230] text-[20px] font-bold">
          오늘 많이 불린 키워드
        </Text>
        <View className="flex flex-row justify-between mt-[16px] mx-[12px]">
          {/* 백에서 정보 받아오기.. */}
          {CalledKeywords.map(item => (
            <CalledKeywordItem key={item.id} icon={item.icon} cnt={0} />
          ))}
        </View>
        <View className="mt-5 flex flex-row justify-between items-end mb-[8px]">
          <Text className="text-[20px] font-bold color-[#182230]">
            내 키워드
          </Text>
          <Text className="color-[#606BFF]">편집</Text>
        </View>
        <View className="mt-[8px] flex flex-col">
          <Pressable
            onPressIn={() => moveLoc('assign')}
            className="bg-[#F2F4F7] flex flex-row items-center rounded-[16px] mb-[12px] h-[48px]">
            <Image className="m-[12px]" source={assignButton} />
            <Text className="color-[#98A2B3] text-[16px] font-medium">
              키워드 추가하기
            </Text>
          </Pressable>

          <ScrollView className="flex flex-col ">
            {keywords.map(item => (
              <Keyword
                key={item.id}
                type={item.type}
                keywordText={item.keywordText}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
}

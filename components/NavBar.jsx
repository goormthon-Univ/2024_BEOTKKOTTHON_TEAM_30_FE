import {View} from 'react-native';
import NavBarButton from './NavBarButton';
import add from '../assets/AddButton.png';
import addActivated from '../assets/AddButtonActivated.png';

import home from '../assets/HomeButton.png';
import homeActivated from '../assets/HomeButtonActivated.png';

import setting from '../assets/SettingButton.png';
import settingActivated from '../assets/SettingButtonActivated.png';
import {useContext} from 'react';
import { UserLocContext } from '../contexts/userloc';

const NavBars = [
  {
    id: 0,
    name: 'add',
    title: '키워드 등록',
    icon: add,
    activated: addActivated,
  },
  {id: 1, name: 'home', title: '홈', icon: home, activated: homeActivated},
  {
    id: 2,
    name: 'setting',
    title: '설정',
    icon: setting,
    activated: settingActivated,
  },
];

export default function NavBar() {
  const {userLoc, moveLoc} = useContext(UserLocContext);
  

  return (
    <View className="mb-9 flex flex-row justify-evenly">
      {NavBars.map(item => (
        <NavBarButton
          key={item.id}
          name={item.name}
          title={item.title}
          icon={item.name === userLoc ? item.activated : item.icon}
          onPressIn={tab => moveLoc(tab)}
          tab={userLoc}
        />
      ))}
    </View>
  );
}

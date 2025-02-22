/* eslint-disable quotes */
import React from "react";
import {
  BellIcon,
  HomeIcon,
  UserIcon,
  Bars3BottomLeftIcon,
  Cog6ToothIcon,
  LanguageIcon,
  ArrowRightStartOnRectangleIcon,
  QrCodeIcon,
  PencilIcon,
  CakeIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  CreditCardIcon,
} from "react-native-heroicons/outline";
export const Icons = {
  HomeIcon,
  BellIcon,
  UserIcon,
  Bars3BottomLeftIcon,
  Cog6ToothIcon,
  LanguageIcon,
  ArrowRightStartOnRectangleIcon,
  QrCodeIcon,
  PencilIcon,
  CakeIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  CreditCardIcon,
};

const Icon = ({ type, color, size = 24, style }) => {
  const IconComponent = Icons[type];
  return <IconComponent color={color} size={size} />;
};

export default Icon;

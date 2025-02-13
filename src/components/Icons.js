/* eslint-disable quotes */
import React from "react";
import { BellIcon, HomeIcon, UserIcon } from "react-native-heroicons/outline";
export const Icons = {
  HomeIcon,
  BellIcon,
  UserIcon,
};

const Icon = ({ type, color, size = 24, style }) => {
  const IconComponent = Icons[type];
  return <IconComponent color={color} size={size} />;
};

export default Icon;

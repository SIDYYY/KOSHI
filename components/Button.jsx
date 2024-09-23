import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Button = ({
  label,
  otherStyles,
  transparent = false,
  textStyle,
  withIcon,
  onPress,
  disabled = false,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`${
        transparent || isLoading ? "bg-[#E4E7EB]" : "bg-[#5CB88F]"
      }  h-[57px] rounded-lg relative justify-center items-center flex-row space-x-4 mx-4 ${otherStyles} ${
        disabled ? "bg-[#9b9b9b]" : ""
      }`}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
    >
      {withIcon ? (
        <Image source={withIcon} className="h-6 w-6" resizeMode="contain" />
      ) : (
        ""
      )}
      <Text
        className={`text-base font-bold text-center ${
          textStyle || isLoading ? "text-[#9b9b9b]" : "text-white"
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import FontSize from "../constants/FontSize";
import { Ionicons } from "@expo/vector-icons";
import Font from "../constants/Font";
import Spacing from "../constants/Spacing";
import { user } from "../data";
import useColors from "../hooks/useColors";

const Header: React.FC = () => {
  const colors = useColors();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity>
        <Image
          style={{
            height: 60,
            width: 60,
            borderRadius: Spacing.borderRadius.xxl,
          }}
          source={user.profile}
        />
      </TouchableOpacity>
      <View
        style={{
          width: "65%",
        }}
      >
        <Text
          style={{
            fontSize: FontSize.base,
            fontFamily: Font["poppins-semiBold"],
            color: colors.textGray,
          }}
        >
          Welcome back!
        </Text>
        <Text
          style={{
            fontSize: FontSize.lg,
            fontFamily: Font["poppins-semiBold"],
          }}
        >
          {user.name} 👋
        </Text>
      </View>
      <TouchableOpacity
        style={{
          height: 60,
          width: 60,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          borderRadius: Spacing.borderRadius.xxl,
          borderColor: colors.border,
        }}
      >
        <Ionicons
          name='notifications-outline'
          size={FontSize.xl}
          color={colors.text}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

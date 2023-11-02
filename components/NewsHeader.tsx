import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import { Categories } from "../data";
import useColors from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";

type Props = {
  categoryId: number;
};

const NewsHeader: React.FC<Props> = ({ categoryId }) => {
  const { goBack } = useNavigation();
  const colors = useColors();
  const category = Categories.find((category) => category.id === categoryId);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: Spacing.padding.base,
      }}
    >
      <TouchableOpacity
        onPress={goBack}
        style={{
          height: 50,
          width: 50,
          borderWidth: 2,
          borderColor: colors.border,
          borderRadius: Spacing.borderRadius.xxl,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name='chevron-back' size={FontSize.lg} color={colors.text} />
      </TouchableOpacity>
      {category && (
        <Text
          style={{
            fontFamily: Font["poppins-semiBold"],
            fontSize: FontSize.lg,
          }}
        >
          {category.name}
        </Text>
      )}
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          borderWidth: 2,
          borderColor: colors.border,
          borderRadius: Spacing.borderRadius.xxl,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons
          name='bookmark-outline'
          size={FontSize.lg}
          color={colors.text}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NewsHeader;

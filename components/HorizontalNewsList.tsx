import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { NewsList } from "../data";
import Spacing from "../constants/Spacing";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import useColors from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackType } from "../types";
import Dot from "./Dot";

const HorizontalNewsList: React.FC = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackType>>();
  const colors = useColors();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={250 + Spacing.margin.lg}
    >
      {NewsList.map((item) => (
        <TouchableOpacity
          onPress={() => navigate("Details", { news: item })}
          key={item.id}
          style={{
            width: 250,
            marginRight: Spacing.margin.lg,
          }}
        >
          <Image
            source={item.image}
            style={{
              width: "100%",
              height: 300,
              borderRadius: Spacing.borderRadius.lg,
            }}
          />
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.lg,
              marginVertical: Spacing.margin.sm,
            }}
            numberOfLines={2}
          >
            {item.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: FontSize.sm,
                color: colors.textGray,
              }}
            >
              {item.author}
            </Text>
            <Dot />
            <Text
              style={{
                fontSize: FontSize.sm,
                color: colors.textGray,
              }}
            >
              {item.length}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default HorizontalNewsList;

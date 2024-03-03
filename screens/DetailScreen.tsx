
import {SafeAreaView, ScrollView, View,Text, Image} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";

import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackType} from "../types";
import NewsHeader from "../components/NewsHeader";
import Markdown from "react-native-markdown-package";
import Dot from "../components/Dot";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import useColors from "../hooks/useColors";

type Props = NativeStackScreenProps<RootStackType, "Details">;

const DetailScreen: React.FC<Props> = ({ navigation: { goBack }, route: { params: { news } } }) => {
  const colors = useColors()

    return (
      <SafeAreaView>
        <NewsHeader categoryId={news.categoryId} />
        <ScrollView
          style={{
            padding: Spacing.padding.base,
          }}
        >
          <View
            style={{
              paddingVertical: Spacing.padding.base,
            }}
          >
            <Text
              style={{
                fontSize: FontSize.xl,
                fontFamily: Font["poppins-semiBold"],
              }}
            >
              {news.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginVertical: Spacing.margin.base,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.sm,
                  color: colors.textGray,
                }}
              >
                {news.author}
              </Text>
              <Dot />
              <Text
                style={{
                  fontSize: FontSize.sm,
                  color: colors.textGray,
                }}
              >
                {news.length}
              </Text>
            </View>
            <Image
              source={news.image}
              style={{
                width: "100%",
                height: 250,
                borderRadius: Spacing.borderRadius.lg,
              }}
            />
            <Markdown
              styles={{
                text: {
                  color: colors.text,
                },
                view: {
                  marginVertical: Spacing.margin.base,
                },
                heading2: {
                  fontFamily: Font["poppins-semiBold"],
                },
              }}
            >
              {news.body}
            </Markdown>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
};

export default DetailScreen;

import { View, Text, Image } from "react-native";
import React from "react";
import { News } from "../data";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import Spacing from "../constants/Spacing";
import useColors from "../hooks/useColors";
import Markdown from "react-native-markdown-package";
import NewsInfo from "./NewsInfo";

type Props = {
  news: News;
};

const NewContent: React.FC<Props> = ({ news }) => {
  const colors = useColors();
  return (
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
      <NewsInfo leftText={news.author} rightText={news.length} />

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
  );
};

export default NewContent;

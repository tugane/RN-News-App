import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackType } from "../types";
import useColors from "../hooks/useColors";
import { Categories } from "../data";
import Font from "../constants/Font";
import NewsHeader from "../components/NewsHeader";
import NewContent from "../components/NewContent";

type Props = NativeStackScreenProps<RootStackType, "Details">;

const DetailScreen: React.FC<Props> = ({
  navigation: { goBack },
  route: {
    params: { news },
  },
}) => {
  return (
    <SafeAreaView>
      <NewsHeader categoryId={news.categoryId} />
      <ScrollView
        style={{
          padding: Spacing.padding.base,
        }}
      >
        <NewContent news={news} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

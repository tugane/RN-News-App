import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackType } from "../types";

type Props = NativeStackScreenProps<RootStackType, "Details">;

const DetailScreen: React.FC<Props> = ({ navigation: { goBack } }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => goBack()}
        style={{
          padding: Spacing.padding.base,
        }}
      >
        <Ionicons name='chevron-back' color={Colors.text} size={FontSize.lg} />
      </TouchableOpacity>

      <Text style={{ margin: Spacing.margin.lg, fontSize: FontSize.lg }}>
        DetailScreen
      </Text>
    </SafeAreaView>
  );
};

export default DetailScreen;

import {SafeAreaView, ScrollView,} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackType} from "../types";
import NewsHeader from "../components/NewsHeader";
import NewContent from "../components/NewContent";

type Props = NativeStackScreenProps<RootStackType, "Details">;

const DetailScreen: React.FC<Props> = ({navigation: {goBack}, route: {params: {news}}}) => {
    return (
        <SafeAreaView>
            <NewsHeader categoryId={news.categoryId}/>
            <ScrollView
                style={{
                    padding: Spacing.padding.base,
                }}
            >
                <NewContent news={news}/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DetailScreen;

import { DefaultTheme } from "@react-navigation/native";
const white = "#FFFFFF";
const gray = "#A0A0A0";
const light = "#E9E9E9";
const black = "#1D1D1F";
const orange = "#E45B3A";

const Colors = {
  primary: black,
  onPrimary: light,
  background: white,
  lightBackground: light,
  secondary: orange,
  text: black,
  textGray: gray,
  border: light,
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Colors,
  },
};

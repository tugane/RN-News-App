declare module "react-native-markdown-package" {
  import React, { Component } from "react";
  import { StyleSheet } from "react-native";
  import { ParserRule } from "simple-markdown";

  class Markdown extends Component<{
    enableLightBox?: boolean;
    navigator?: unknown;
    imageParam?: unknown;
    onLink?: (url: string) => void;
    bgImage?: unknown;
    onImageOpen?: unknown;
    onImageClose?: unknown;
    rules?: { [name: string]: ParserRule };
    styles: ReturnType<typeof StyleSheet.create>;
    children: React.ReactNode;
  }> {}

  export = Markdown;
}

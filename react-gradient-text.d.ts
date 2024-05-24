// file: react-gradient-text.d.ts
declare module "react-gradient-text" {
  import { CSSProperties, ReactNode } from "react";

  export interface GradientTextProps {
    text: string;
    gradientColors: string[];
    gradientDirection: string;
    fontSize?: string;
    fontWeight?: CSSProperties["fontWeight"];
    lineHeight?: string;
    style?: CSSProperties;
    className?: string;
  }

  export const GradientText: React.FC<GradientTextProps>;
}

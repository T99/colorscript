import { ColorOccurrence } from "./color-occurrence";
import { Color } from "./Color";

export type ColorMergerFunction = (...colorOccurrences: ColorOccurrence[]) => Color;

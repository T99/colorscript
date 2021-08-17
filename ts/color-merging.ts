import { ColorOccurrence } from "./color-occurrence";
import { Color } from "./color";

export type ColorMergerFunction = (...colorOccurrences: ColorOccurrence[]) => Color;

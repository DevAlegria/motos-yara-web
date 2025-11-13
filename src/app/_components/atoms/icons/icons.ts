import { BarsIcon } from "./Bars";
import { AngleLeftIcon } from "./AngleLeft";

export const icons = {
  bars: BarsIcon,
  angleLeft: AngleLeftIcon
};

export type IconName = keyof typeof icons;
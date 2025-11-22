import { BarsIcon } from "./Bars";
import { AngleLeftIcon } from "./AngleLeft";
import { CloseIcon } from "./Close";

export const icons = {
  bars: BarsIcon,
  angleLeft: AngleLeftIcon,
  close: CloseIcon
};

export type IconName = keyof typeof icons;
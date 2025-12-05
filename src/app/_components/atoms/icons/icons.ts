import { BarsIcon } from "./Bars";
import { AngleLeftIcon } from "./AngleLeft";
import { CloseIcon } from "./Close";
import { SearchIcon } from "./Search";


export const icons = {
  bars: BarsIcon,
  angleLeft: AngleLeftIcon,
  close: CloseIcon,
  search: SearchIcon
};

export type IconName = keyof typeof icons;
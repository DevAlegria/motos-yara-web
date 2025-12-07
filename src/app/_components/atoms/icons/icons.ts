import { AngleLeftIcon } from "./AngleLeft";
import { BarsIcon } from "./Bars";
import { CloseIcon } from "./Close";
import { EnvelopeIcon } from "./Envelope";
import { MapPinIcon } from "./MapPin";
import { PhoneIcon } from "./Phone";
import { SearchIcon } from "./Search";



export const icons = {
  angleLeft: AngleLeftIcon,
  bars: BarsIcon,
  close: CloseIcon,
  envelope: EnvelopeIcon,
  mapPin: MapPinIcon,
  phone: PhoneIcon,
  search: SearchIcon,

};

export type IconName = keyof typeof icons;
import { FaHandsHelping, FaStore } from 'react-icons/fa';
import { BsChatLeft, BsFillChatDotsFill, BsHeart } from 'react-icons/bs';
import { IoLogoAppleAr } from 'react-icons/io5';
import { SiExpertsexchange } from 'react-icons/si';
import { MdHealthAndSafety } from 'react-icons/md';
import { BiMask, BiWorld } from 'react-icons/bi';
import { RiPulseLine } from 'react-icons/ri';
import { GiArtificialHive } from 'react-icons/gi';
import { TbArrowsDoubleNeSw } from 'react-icons/tb';
import { FiShoppingCart } from 'react-icons/fi';

export const getAppUrl = (value) => {
  if (value === 'fhir') {
    return process.env.NODE_ENV === 'development'
      ? 'http://localhost:3006'
      : 'https://fhir.aimedis.app';
  }

  const app = Apps.find((app) => app.value === value);
  if (!app) {
    throw new Error(`${value} not found in getAppUrl()`);
  }
  return app.url;
};

export const Apps = [
  {
    name: 'Care',
    value: 'care',
    icon: RiPulseLine,
    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3002'
        : 'https://care.aimedis.app',
  },
  {
    name: 'Chat',
    value: 'chat',
    icon: BsChatLeft,
    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3003'
        : 'https://chat.aimedis.app',
  },
  {
    name: 'dApp',
    value: 'dapp',
    icon: GiArtificialHive,
    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3004'
        : 'https://aimx.aimedis.app',
  },
  {
    name: 'Exchange',
    value: 'exchange',
    icon: TbArrowsDoubleNeSw,
    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3005'
        : 'https://exchange.aimedis.app',
  },
  {
    name: 'Health',
    value: 'health',
    icon: BsHeart,
    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3006'
        : 'https://health.aimedis.app',
  },
  {
    name: 'Metaverse',
    value: 'metaverse',
    icon: BiMask,
    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3008'
        : 'https://metaverse.aimedis.app',
  },
  {
    name: 'Store',
    value: 'store',
    icon: FiShoppingCart,
    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3009'
        : 'https://store.aimedis.app',
  },
];

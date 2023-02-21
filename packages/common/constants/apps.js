import { FaHandsHelping, FaStore } from 'react-icons/fa';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { IoLogoAppleAr } from 'react-icons/io5';
import { SiExpertsexchange } from 'react-icons/si';
import { MdHealthAndSafety } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';

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
    icon: FaHandsHelping,
    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3002'
        : 'https://care.aimedis.app',
  },
  {
    name: 'Chat',
    value: 'chat',
    icon: BsFillChatDotsFill,
    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3003'
        : 'https://chat.aimedis.app',
  },
  {
    name: 'Dapp',
    value: 'dapp',
    icon: IoLogoAppleAr,
    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3004'
        : 'https://aimx.aimedis.app',
  },
  {
    name: 'Exchange',
    value: 'exchange',
    icon: SiExpertsexchange,
    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3005'
        : 'https://exchange.aimedis.app',
  },
  {
    name: 'Health',
    value: 'health',
    icon: MdHealthAndSafety,
    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3006'
        : 'https://health.aimedis.app',
  },
  {
    name: 'Metaverse',
    value: 'metaverse',
    icon: BiWorld,
    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3008'
        : 'https://metaverse.aimedis.app',
  },
  {
    name: 'Store',
    value: 'store',
    icon: FaStore,
    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3009'
        : 'https://store.aimedis.app',
  },
];

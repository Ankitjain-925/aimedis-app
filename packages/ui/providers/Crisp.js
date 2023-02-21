import { createContext, useContext, useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';
import { useRouter } from 'next/router';

const CrispChatContext = createContext();

const CrispChatProvider = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID, {
      autoload: false,
    });
  }, []);

  useEffect(() => {
    if (typeof window.$crisp === 'undefined') return;

    if (
      router.asPath.indexOf('/login') > -1 ||
      router.asPath.indexOf('/contact') > -1
    ) {
      Crisp.chat.hide();
    } else {
      Crisp.chat.show();
    }
  }, [router]);

  return (
    <CrispChatContext.Provider value={Crisp}>
      {children}
    </CrispChatContext.Provider>
  );
};

export const useCrispChat = () => {
  return useContext(CrispChatContext);
};

export { CrispChatContext, CrispChatProvider };

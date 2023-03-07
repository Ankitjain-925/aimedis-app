import { ColorModeScript } from '@chakra-ui/react';
// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Head, Main, NextScript } from 'next/document';
import { theme } from '../../../theme';

export function DocumentRoot() {
  return (
    <Html>
      <Head>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

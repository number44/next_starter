import '../styles/globals.scss';
import type { AppProps } from 'next/app';

const NextApp = ({ Component, pageProps }: AppProps) => {
  // Typescript does not complain about unknown property
  const getLayout = Component.getLayout || ((page) => page);
  // snip
};
export default NextApp;

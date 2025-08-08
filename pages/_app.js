import { SessionProvider } from "next-auth/react";
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar'; // Make sure this matches your folder structure
import '../styles/globals.css'; // If you have global styles

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

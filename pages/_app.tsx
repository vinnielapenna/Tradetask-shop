import { SessionProvider } from "next-auth/react";
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar'; // Adjust path if needed
import '../styles/globals.css'; // Optional, only if you have this file

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}


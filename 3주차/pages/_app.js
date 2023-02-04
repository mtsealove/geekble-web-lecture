import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useState } from 'react';
import '../styles/fonts.css';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <>
  <Header/>
  <Component {...pageProps}  />
  <Footer/>
  </>
}

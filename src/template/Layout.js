import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Head from 'next/head';

export const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/logobulat.png" />
      </Head>

      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

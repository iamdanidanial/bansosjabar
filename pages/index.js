import Head from 'next/head';
import Hero from '../src/section/Hero';
import KriteriaPenerima from '../src/section/KriteriaPenerima';
import MacamBansos from '../src/section/MacamBansos';
import { Layout } from '../src/template/Layout';

export default function Home() {
  return (
    <Layout title="Bantuan Sosial Covid-19">
      <Hero />
      <KriteriaPenerima />
      <MacamBansos />
    </Layout>
  );
}

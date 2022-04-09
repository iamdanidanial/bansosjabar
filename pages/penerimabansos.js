import React from 'react';
import DaftarPenerimaBansos from '../src/section/DaftarPenerimaBansos';
import Hero from '../src/section/Hero';
import { Layout } from '../src/template/Layout';

export default function penerimabansos() {
  return (
    <Layout title="Penerima Bansos">
      <DaftarPenerimaBansos />
    </Layout>
  );
}

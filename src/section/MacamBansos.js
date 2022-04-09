import Image from 'next/image';
import React from 'react';

const features = [
  {
    name: 'Program Keluarga Harapan (PKH) oleh Kemensos',
    image: '/pkh.png',
    deskripsi: 'Program Keluarga Harapan (PKH) oleh Kemensos',
  },
  {
    name: 'Bantuan Pangan Non Tunai (BPNT) / Sembako  oleh Kemensos',
    image: '/sembako.png',
    deskripsi:
      'Membantu menyelesaikan permasalahan tugas kuliah anda terkait dengan dev app',
  },
  {
    name: 'Bantuan Sosial Pangan (BSP) / Sembako oleh Kemensos',
    image: '/sembako.png',
    deskripsi: 'Butuh landing page untuk company profile? atau web profile',
  },
  {
    name: 'Bantuan Sosial Tunai (BST) POS oleh Kemensos',
    image: '/pos.jpg',
    deskripsi: 'butuh applikasi multiplatform? bisa anda dapatkan disini',
  },
  {
    name: 'Bantuan Sosial Tunai (BST) BANK oleh Kemensos',
    image: '/bansos.png',
    deskripsi:
      'Mau undangan pernikahan Digital ? banyak pilihan template nya loh...',
  },
  {
    name: 'Bantuan Langsung Tunai Dana Desa (BLT DD) oleh Kemendes PDTT',
    image: '/bansos.png',
    deskripsi:
      'ingin punya portofolio yang menarik hfkdjaf hkjs fshkjf smfhskjfsdm skjhfls',
  },
  {
    name: 'Bantuan Usaha Micro Kecil Menengah oleh Kemenkop UKM',
    image: '/bansos.png',
    deskripsi:
      'ingin punya portofolio yang menarik hfkdjaf hkjs fshkjf smfhskjfsdm skjhfls',
  },
  {
    name: 'Subsidi Gaji Karyawan dan Program Prakerja oleh Kemenaker',
    image: '/bansos.png',
    deskripsi:
      'ingin punya portofolio yang menarik hfkdjaf hkjs fshkjf smfhskjfsdm skjhfls',
  },
  {
    name: 'Subsidi bantuan listrik gratis 1 tahun oleh PT PLN',
    image: '/bansos.png',
    deskripsi:
      'ingin punya portofolio yang menarik hfkdjaf hkjs fshkjf smfhskjfsdm skjhfls',
  },
];

export default function MacamBansos() {
  return (
    <div className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-green-700 tracking-tight sm:text-5xl">
          Macam-Macam Bantuan Sosial
        </p>
        <p className="mx-auto text-lg text-gray-500">
          Bantuan sosial yang dikeluarkan oleh pemerintah banyak sekali macam
          nya, ini beberapa bantuan yang telah disalurkan kepada masyarakat yang
          terdampak covid-19
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-green-50 rounded-lg px-6 pb-8 text-center">
                  <div>
                    <div>
                      <span className="inline-flex items-center justify-center p-3">
                        <Image
                          src={feature.image}
                          height={125}
                          width={150}
                          layout="fixed"
                          alt="nana"
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="text-lg font-medium -tracking-tight">
                      {feature.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

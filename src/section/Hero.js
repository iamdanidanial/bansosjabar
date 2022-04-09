import React from 'react';
import { PlusIcon } from '@heroicons/react/solid';

export default function Hero() {
  return (
    <div>
      {/* Hero card */}
      <div className="relative overflow-hidden">
        <div className="min-h-full absolute inset-x-0 bottom-0" />
        <div className="mx-auto">
          <div className="relative shadow-xl sm:overflow-hidden">
            <div className="absolute inset-0 invisible lg:visible">
              <img
                className="h-full w-full object-cover"
                src="/hero.jpg"
                alt="People working on laptops"
              />
              <div className="absolute inset-0  mix-blend-multiply" />
            </div>
            <div className="relative max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-32">
              <p className="text-gray-600 text-xl">Selamat Datang di wesite</p>
              <h1 className="text-4xl tracking-tight sm:text-5xl font-bold lg:text-7xl mt-2 text-green-700">
                Pendataan Penerima
              </h1>
              <h3 className="text-3xl tracking-tight sm:text-3xl font-bold lg:text-7xl mt-2 text-green-500">
                Bantuan Sosial Covid-19
              </h3>
              <p className="mt-6 max-w-lg text-xl text-gray-600 sm:max-w-2xl">
                Web aplikasi yang dapat digunakan untuk mendaftarkan data warga
                yang membutuhkan bantuan sosial diera pandemi Covid-19
              </p>

              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    <PlusIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Daftar Bansos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { PlusIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const navigation = [
  {
    judul: 'Beranda',
    href: '/',
  },
  {
    judul: 'Data Penerima Bansos',
    href: '/penerimabansos',
  },
  {
    judul: 'Tentang',
    href: '/tentang',
  },
];

export default function Header() {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-white shadow-sm sticky top-0 z-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-16 w-auto"
                    src="/bansos.png"
                    alt="Logo Bansos"
                  />
                  <img
                    className="hidden lg:block h-16 w-auto"
                    src="/bansos.png"
                    alt="Logo Bansos"
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8 text-white font-semibold items-center px-1 pt-1 text-lg">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {navigation.map((nav) => (
                    <Link href={nav.href} key={nav.judul}>
                      <a className="border-transparent hover:text-green-700 inline-flex items-center p-1 text-black font-normal text-lg">
                        {nav.judul}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/daftarbansos" passHref>
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 border border-transparent bg-green-700 text-lg font-medium rounded-md text-white shadow-sm hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <PlusIcon
                        className="-ml-1 mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      <span>Daftar Bansos</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div>
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {navigation.map((nav) => (
                <Link href={nav.href} key={nav.judul}>
                  <a className="border-transparent text-white bg-green-600 hover:bg-gray-50 hover:border-green-700 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
                    {nav.judul}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

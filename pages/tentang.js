import React from 'react';
import HeroBanner from '../src/components/HeroBanner';
import { Layout } from '../src/template/Layout';
import {
  MailIcon,
  PhoneIcon,
  ChevronDownIcon,
  PlusIcon,
  UploadIcon,
  SaveAsIcon,
  SaveIcon,
} from '@heroicons/react/outline';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';

const faqs = [
  {
    question: 'Kenapa ada perbedaan 6  tahun dari  lulus SMK dan Kuliah ???',
    answer:
      'Alhamdulillah saya bisa Lulus Kuliah, Walaupun ada Gap 2 tahun. kenapa begitu? karena biaya kuliah saya tanggung sendiri, saya mengumpulkan uang kurang lebih selama 2 tahun untuk biaya kuliah, jadi setiap awal semester saya membayar lunas biaya per satu semester. selain itu, saya juga mempunyai tanggung jawab terhadap keluarga. itulah yang menyebabkan saya mempunyai gap tahun kelulusan.',
  },
  {
    question:
      'Bagimana bisa bekerja di Dinas Kependudukan dan Pencatatan Sipil Kabupaten Cianjur???',
    answer:
      'Kebetulan saya sekolah di Sekolah Menengah Kejuruan (SMMK) yang mempunyai proggram Praktik Kerja Industri, saat berada dikelas 2 saya Praktik Kerja Industri di Dinas Kependudukan dan Pencatatan Sipil Kabupaten Cianjur selama 3 bulan. Waktu itu setelah selesai prakerin saya disuruh membantu pekerjaan yang banyak sehabis pulang sekolah. nah alhamdulillah setelah lulus SMK saya langsung disuruh bekerja di Dinas tersebut.',
  },
  {
    question:
      'Kenapa setelah kerja dipemerintahan pindah ke swasta tepatnya di PT Pou Yuen Indonesia???',
    answer:
      'Setelah bekerja kurang lebih 3 tahun di Dinas Kependudukan Kabupaten Cianjur, saya memutuskan untuk resign tepatnya pada Maret 2017, karena membutuhkan banyak biaya untuk perkuliahan. jadi saya memutuskan untuk pindah keswasta agar bisa menopang biaya hidup. akhirnya setelah Lulus kuliah saya memilih resign juga dari pabrik sepatu, kenapa? pabrik ada pengurangan karyawan dikarenakan pandemi covid-19 oleh karena itu pabrik melakukan pengurangan karyawan dengan sistem resign pesangon bukan PHK, ditambah saya juga ingin berfokus mengembangkan diri dibidang Pemrograman kareana dipekerjaan sebelumnya tidak ada hubungan dengan pemrograman',
  },
  {
    question: 'Kenapa belum ada pengalaman kerja di bidang pemrograman???',
    answer:
      'Setelah resign dari pekerjaan sebelumnya, saya memutuskan untuk fokus belajar terlebih dahulu dan mencari tahu jati diri ingin berfokus dibidang mana... untuk saat ini saya sibuk mengikuti berbagai macam pelatihan dan bootcamp untuk menunjang ilmu pengetahuan di bidang pemrograman.',
  },
  {
    question: 'Kenapa lama sekali hampir satu tahun setengah tidak bekerja???',
    answer:
      'untuk menjadi seorang proggramers pasti sangat dibutuhkan portofolio project yang telah dibuat, sambil belajar sambil membuat portofolio. ditambah saya mendapatkan beasiswa belajar 1 tahun dari Dicoding, 3 Bulan dari Keminfo dan 3 Bulan dari Provinsi Jabar. selain mengikuti pembelajaran beasiswa dan bootcamp saya juga menjadi Fasilitator IDCamp 2021 dan BDD 2021 selama 9 bulan yaitu bertugas untuk membimbing dan mengajar penerima beasiswa di Kelas Web pada platform Dicoding Indonesia ',
  },

  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Tentang() {
  return (
    <Layout title="Tentang">
      <HeroBanner
        judul="Tentang"
        image="/glass.webp"
        deskripsi="kumpulan pertanyaan yang sering ditanyakan oleh penerima bantuan sosial dan Kontak informasi yang dibutuhkan"
      />
      <section className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto pt-2 pb-12 px-4 sm:px-6 lg:px-8 lg:py-16">
          <svg
            className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"
            width={784}
            height={404}
            fill="none"
            viewBox="0 0 784 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={784}
              height={404}
              fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
            />
          </svg>

          <svg
            className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="56409614-3d62-4985-9a10-7ca758a8f4f0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
            />
          </svg>

          <div className="relative lg:flex lg:items-center">
            <div className="hidden lg:block lg:flex-shrink-0">
              <img
                className="h-64 w-64 rounded-full xl:h-64 xl:w-80"
                src="/kemensos.png"
                alt="fada"
              />
            </div>

            <div className="relative lg:ml-10">
              <svg
                className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-green-200 opacity-50"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 144 144"
                aria-hidden="true"
              >
                <path
                  strokeWidth={2}
                  d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                />
              </svg>
              <blockquote className="relative">
                <div className="text-xl text-justify leading-9 font-medium text-gray-900">
                  <p>
                    Kementerian Sosial Republik Indonesia (disingkat Kemensos),
                    dahulu Departemen Sosial (disingkat Depsos), adalah
                    kementerian yang mempunyai tugas menyelenggarakan dan
                    membidangi urusan dalam negeri di dalam pemerintahan untuk
                    membantu presiden dalam penyelenggaraan pemerintahan negara
                    di bidang sosial.[1] Kementerian Sosial dipimpin oleh
                    seorang Menteri Sosial (Mensos) yang sejak tanggal 23
                    Desember 2020 dijabat oleh Tri Rismaharini.
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex">
                    <div className="flex-shrink-0 lg:hidden">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-4 lg:ml-0">
                      <div className="text-base font-medium text-gray-900">
                        Tri Rismaharini
                      </div>
                      <div className="text-base font-medium text-green-600">
                        Menteri Sosial Republik Indonesia
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-green-700">
                Pertanyaan yang sering diajukan
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Tidak dapat menemukan jawaban yang Anda cari? Hubungi kami{' '}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  customer support
                </a>{' '}
                team.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <dl className="space-y-6 divide-y divide-gray-200">
                  {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-2">
                      {({ open }) => (
                        <>
                          <dt className="text-lg">
                            <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                              <span className="font-medium text-gray-900">
                                {faq.question}
                              </span>
                              <span className="ml-6 h-7 flex items-center">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? '-rotate-180' : 'rotate-0',
                                    'h-6 w-6 transform'
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel as="dd" className="mt-2 pr-12">
                            <p className="text-base text-gray-500">
                              {faq.answer}
                            </p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-green-700 sm:text-3xl">
                Hubungi Saya
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Masih banyak pertanyaan? anda dapat menghubungi
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt>Alamat:</dt>
                  <dd>
                    <p>Pasir Banen Village, Kabupaten Cianjur</p>
                    <p>Jawa Barat, Indonesia 43292</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+62 (812) 8187 8727</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">iamdanidanial@gmail.com</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                    placeholder="Nama Lengkap"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border border-gray-300 rounded-md"
                    placeholder="Pesan"
                    defaultValue={''}
                  />
                </div>
                <div>
                  <Link href="/daftarbansos" passHref>
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 border border-transparent bg-green-700 text-lg font-medium rounded-md text-white shadow-sm hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <SaveIcon
                        className="-ml-1 mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      <span>Kirim Pesan</span>
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

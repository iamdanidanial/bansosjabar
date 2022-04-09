import { CheckIcon } from '@heroicons/react/outline';

const kriteriaPenerima = [
  'ODP, PDP dan warga dengan status positif Covid-19',
  'Keluarga yang anggotanya meninggal akibat positif Covid-19 (Jika ada)',
  'Asisten rumah tangga dan pekerja/karyawan yang di PHK/Dirumahkan',
  'Tukang ojek, sopir angkot dan tukang beca yang tidak beroperasi',
  'Pedagang kecil, pedagang keliling dan balukan yang tidak berjualan lagi',
  'Tukang bangunan, tukang sol sepatu dan tukang cukur yang tidak bekerja',
  'Nelayan/Pencari ikan yang berhenti melaut',
  'Buruh tukang jahit, tukang parkir dan buruh cuci yang tidak bekerja lagi',
  'Buruh tani dan buruh harian lepas yang tidak bekerja lagi',
];

export default function KriteriaPenerima() {
  return (
    <div className="bg-white p-12">
      <div className="max-w-7xl mx-auto sm:px-6">
        <div>
          <p className="text-5xl font-extrabold text-green-700">
            Kriteria Penerima Bansos
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Bagi warga yang termasuk kedalam kriteria tersebut silahkan
            mendaftarkan diri untuk menjadi penerima bantuan sosial.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 flex flex-col lg:flex-row">
          <div className="space-y-2 sm:space-y-0 flex items-center align-middle">
            <img className="h-80 w-auto" src="/bansos.jpg" alt="Logo Bansos" />
          </div>
          <div className="space-y-2 sm:space-y-0">
            {kriteriaPenerima.map((kriteria) => (
              <div key={kriteria} className="relative m-2">
                <CheckIcon
                  className="absolute h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
                <p className="ml-9 text-lg leading-6 text-justify font-medium mt-5 text-gray-900">
                  {kriteria}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

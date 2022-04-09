import { PencilIcon, PrinterIcon, TrashIcon } from '@heroicons/react/outline';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import HeroBanner from '../components/HeroBanner.js';
import penerimaBansos from '../data/data.js';

export default function DaftarPenerimaBansos() {
  const [provinsi, setProvinsi] = useState([]);
  const [kabupaten, setKabupaten] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);
  const [desa, setDesa] = useState([]);

  let no = 1;

  let [currentProvinsiID, setCurrentProvinsiID] = useState('');
  let [currentKabupatenID, setCurrentKabupatenID] = useState('');
  let [currentKecamatanID, setCurrentKecamatanID] = useState('');

  const handleDelete = () => {
    alert('Apakah anda yakin akan menghapus data ini');
  };

  const getProvinsi = async () => {
    await axios
      .get(`http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
      .then((response) => setProvinsi(response.data));
  };

  const getKabupaten = async (currentProvinsiID) => {
    await axios
      .get(
        `http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${currentProvinsiID}.json`
      )
      .then((response) => setKabupaten(response.data));

    return <span> Kabupaten : {kabupaten.name}</span>;
  };

  const getKecamatan = async (currentKabupatenID) => {
    await axios
      .get(
        `http://www.emsifa.com/api-wilayah-indonesia/api/districts/${currentKabupatenID}.json`
      )
      .then((response) => setKecamatan(response.data));
    console.log(kecamatan);
  };

  const getDesa = async (currentKecamatanID) => {
    await axios
      .get(
        `http://www.emsifa.com/api-wilayah-indonesia/api/villages/${currentKecamatanID}.json`
      )
      .then((response) => setDesa(response.data));
    console.log(desa);
  };

  useEffect(() => {
    penerimaBansos.map((penerima) => setCurrentProvinsiID(penerima.provinces));
    penerimaBansos.map((penerima) => setCurrentKabupatenID(penerima.regencies));
    penerimaBansos.map((penerima) => setCurrentKecamatanID(penerima.districts));

    getProvinsi();
    console.log(currentProvinsiID);
    console.log(currentKabupatenID);
    console.log(currentKecamatanID);

    if (currentProvinsiID) {
      getKabupaten(currentProvinsiID);
    }

    if (currentKabupatenID) {
      getKecamatan(currentKabupatenID);
    }

    if (currentKecamatanID) {
      getDesa(currentKecamatanID);
    }
  }, [
    currentProvinsiID,
    currentKabupatenID,
    currentKecamatanID,
    setCurrentProvinsiID,
    setCurrentKabupatenID,
    setCurrentKecamatanID,
  ]);

  return (
    <div>
      <HeroBanner
        judul="Data Penerima Bansos"
        deskripsi="Berikut merupakan daftar penerima bansos akibat covid-19 masyarakat Indonesia pada tahun 2021-2022"
        image="/glass.webp"
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col m-auto">
          <div className=" sm:-mx-6 lg:-mx-8">
            <div className="relative max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-4 lg:px-4">
              {/* <div className="px-4 sm:px-0 text-center">
                <h3 className="text-2xl  font-medium text-gray-900">
                  Daftar masyakat Penerima Bansos
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Tahun Anggaran 2021-2022
                </p>
                <hr className="mt-5" />
              </div> */}
              <div className="shadow overflow-x-auto mt-4 border-b border-green-200 sm:rounded-sm">
                <table className="min-w-full divide-y divide-green-200">
                  <thead className="bg-green-600">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Nama
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        NIK
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        No. KK
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Umur
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Jenis Kelamin
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Alamat
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Kode Provinsi
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Photo
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {penerimaBansos.map((data) => (
                      <tr key={data.nik}>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <p className="text-sm text-gray-900 uppercase">
                            {no++}
                          </p>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <p className="text-sm text-gray-900 uppercase">
                            {data.name}
                          </p>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <p className="text-sm  text-gray-900 ">{data.nik}</p>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <p className="text-sm text-gray-900 ">{data.kk}</p>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          {data.age}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          {data.gender}
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          {data.address} RT. {data.rt} RW. {data.rw}
                          <br />
                          {desa
                            .filter((des) => des.id == data.villages)
                            .map((des) => (
                              <span key={des.id}>Desa : {des.name}</span>
                            ))}
                          <br />
                          {kecamatan
                            .filter((kec) => kec.id == data.districts)
                            .map((kec) => (
                              <span key={kec.id}>Kecamatan : {kec.name}</span>
                            ))}
                          <br />
                          {/* {kabupaten
                            .filter((kab) => kab.id == data.regencies)
                            .map((kab) => (
                              <span key={kab.id}>Kabupaten : {kab.name}</span>
                            ))} */}
                          <span>
                            Kabupaten : {() => getKabupaten(data.provinces)}
                          </span>
                        </td>

                        {provinsi
                          .filter((prov) => prov.id == data.provinces)
                          .map((prov) => (
                            <td
                              key={prov.id}
                              className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                            >
                              {prov.name}
                            </td>
                          ))}

                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            type="button"
                            onClick={handleDelete}
                            className="relative inline-flex items-center px-2 py-2 border border-transparent bg-red-600 text-lg font-medium rounded-md text-white shadow-sm hover:bg-red-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            <TrashIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="relative inline-flex items-center ml-2 px-2 py-2 border border-transparent bg-orange-600 text-lg font-medium rounded-md text-white shadow-sm hover:bg-orange-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                          >
                            <PencilIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </button>
                          <button
                            type="button"
                            className="relative inline-flex items-center ml-2 px-2 py-2 border border-transparent bg-violet-600 text-lg font-medium rounded-md text-white shadow-sm hover:bg-violet-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                          >
                            <PrinterIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

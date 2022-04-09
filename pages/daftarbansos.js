import Label from '../src/atoms/Label';
import { Layout } from '../src/template/Layout';
import { schema } from '../src/Utils/validation';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CreatableSelect from 'react-select/creatable';
import penerimaBansos from '../src/data/data';
import toast, { Toaster } from 'react-hot-toast';

import axios from 'axios';
import { useEffect } from 'react';
import HeroBanner from '../src/components/HeroBanner';
import Link from 'next/link';
import { SaveIcon } from '@heroicons/react/outline';

export default function DaftarBansos() {
  const [provinsi, setProvinsi] = useState([]);
  const [kabupaten, setKabupaten] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);
  const [desa, setDesa] = useState([]);
  const [loading, setLoading] = useState(false);

  let [provinsiID, setProvinsiID] = useState('');
  let [kabupatenID, setKabupatenID] = useState('');
  let [kecamatanID, setKecamatanID] = useState('');

  const API_URL = `http://www.emsifa.com/api-wilayah-indonesia/api/`;

  const getProvinsi = async () => {
    await axios
      .get(API_URL + `provinces.json`)
      .then((response) => setProvinsi(response.data));
    console.log(provinsi);
  };

  const getKabupaten = async (provinsiID) => {
    await axios
      .get(API_URL + `regencies/${provinsiID}.json`)
      .then((response) => setKabupaten(response.data));
    console.log(kabupaten);
  };

  const getKecamatan = async (kabupatenID) => {
    await axios
      .get(API_URL + `districts/${kabupatenID}.json`)
      .then((response) => setKecamatan(response.data));
    console.log(kecamatan);
  };

  const getDesa = async (kecamatanID) => {
    await axios
      .get(API_URL + `villages/${kecamatanID}.json`)
      .then((response) => setDesa(response.data));
    console.log(desa);
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      nik: '',
      kk: '',
      age: '',
      gender: '',
      provinces: '',
      regencies: '',
      districts: '',
      villages: '',
      address: '',
      rt: '',
      rw: '',
      income_before: '',
      income_after: '',
      reason: {
        label: '',
        value: '',
      },
      img_ktp: null,
      img_kk: null,
      agreement: true,
    },
  });

  const handleChangeProvinsi = (e) => {
    setProvinsiID(e.target.value);
    kecamatan.length = 0;
    desa.length = 0;
    kabupaten.length = 0;
    getKabupaten(e.target.value);
  };

  const handleChangeKabupaten = (e) => {
    setKabupatenID(e.target.value);
    kecamatan.length = 0;
    desa.length = 0;
    getKecamatan(e.target.value);
  };

  const handleChangeKecamatan = (e) => {
    setKecamatanID(e.target.value);
    desa.length = 0;
    getDesa(e.target.value);
  };

  const onSubmitHandle = (data) => {
    const normal = 1500;
    const time = 1000 * (Math.random() + 1);

    setLoading(true);
    setTimeout(() => {
      if (time > normal) {
        toast.error(
          'Ups! Sepertinya ada masalah dengan server, tolong klik verifikasi kembali.',
          {
            style: {
              background: '#333',
              color: '#fff',
            },
          }
        );
        console.log(time);
        console.log('Data error karena lebih dari 1500 millisecond');
        setLoading(false);
      } else {
        toast.success('Sukses! Data sudah berhasil disimpan.', {
          style: {
            background: '#333',
            color: '#fff',
          },
        });
        console.log('Data Berhasil disimpan');
        console.log(time);
        console.log(data);
        penerimaBansos.push(data);
        setLoading(false);
      }
    }, time);
  };

  useEffect(() => {
    getProvinsi();
  }, []);

  const options = [
    { value: 'Kehilangan pekerjaan', label: 'Kehilangan pekerjaan' },
    {
      value: 'Kepala keluarga terdampak atau korban Covid',
      label: 'Kepala keluarga terdampak atau korban Covid',
    },
    {
      value: 'Tergolong fakir/miskin semenjak sebelum Covid',
      label: 'Tergolong fakir/miskin semenjak sebelum Covid',
    },
  ];

  return (
    <Layout title="Daftar Bansos">
      <HeroBanner
        judul="Daftar Bantuan Sosial"
        deskripsi="Silahkan masukan data pribadi anda dengan sebenar benarnya"
        image="/bansos.jpg"
      />
      <div>
        <Toaster />
      </div>
      <div className="my-8 max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="px-4 sm:px-0">
              <h3 className="text-2x1 font-medium leading-6 text-gray-900">
                Form Data
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Mohon di isi dengan benar dan sesuai dengan data asli nya.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmitHandle)}>
              <div className="overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 bg-gray-50 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                      <Label htmlFor="name" value="Nama Lengkap Sesuai KTP" />
                      <input
                        type="text"
                        {...register('name')}
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.name && errors.name.message && (
                        <small className="text-red-500">
                          {errors.name.message}
                        </small>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <Label htmlFor="nik" value="Nomor NIK" />
                      <input
                        type="number"
                        {...register('nik')}
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.nik && errors.nik.message && (
                        <small className="text-red-500">
                          {errors.nik.message}
                        </small>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <Label htmlFor="kk" value="Nomor KK" />
                      <input
                        type="number"
                        {...register('kk')}
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.kk && errors.kk.message && (
                        <small className="text-red-500">
                          {errors.kk.message}
                        </small>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <Label htmlFor="age" value="Umur" />
                      <input
                        type="number"
                        {...register('age')}
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.age && errors.age.message && (
                        <small className="text-red-500">
                          {errors.age.message}
                        </small>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <Label htmlFor="gender" value="Jenis Kelamin" />
                      <select
                        {...register('gender')}
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      >
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="Laki-laki">Laki - laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                      {errors.gender && errors.gender.message && (
                        <small className="text-red-500">
                          {errors.gender.message}
                        </small>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <Label htmlFor="provinces" value="Provinsi" />
                      <select
                        {...register('provinces')}
                        onChange={handleChangeProvinsi}
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      >
                        <option value="">Pilih Provinsi</option>
                        {provinsi.map((prov) => (
                          <option key={prov.id} value={prov.id}>
                            {prov.name}
                          </option>
                        ))}
                      </select>
                      {errors.provinces && errors.provinces.message && (
                        <small className="text-red-500">
                          {errors.provinces.message}
                        </small>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <Label htmlFor="regencies" value="Kabupaten" />
                      <select
                        {...register('regencies')}
                        onChange={handleChangeKabupaten}
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      >
                        <option value="">Pilih Kabupaten</option>
                        {kabupaten.map((kab) => (
                          <option value={kab.id} key={kab.id}>
                            {kab.name}
                          </option>
                        ))}
                      </select>
                      {errors.regencies && errors.regencies.message && (
                        <small className="text-red-500">
                          {errors.regencies.message}
                        </small>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <Label htmlFor="districts" value="Kecamatan" />
                      <select
                        {...register('districts')}
                        onChange={handleChangeKecamatan}
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      >
                        <option value="">Pilih Kecamatan</option>
                        {kecamatan.map((kec) => (
                          <option value={kec.id} key={kec.id}>
                            {kec.name}
                          </option>
                        ))}
                      </select>
                      {errors.districts && errors.districts.message && (
                        <small className="text-red-500">
                          {errors.districts.message}
                        </small>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <Label htmlFor="villages" value="Desa" />
                      <select
                        {...register('villages')}
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      >
                        <option value="">Pilih Desa</option>
                        {desa.map((desa) => (
                          <option value={desa.id} key={desa.id}>
                            {desa.name}
                          </option>
                        ))}
                      </select>
                      {errors.villages && errors.villages.message && (
                        <small className="text-red-500">
                          {errors.villages.message}
                        </small>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <Label htmlFor="address" value="Alamat Rumah" />
                      <textarea
                        {...register('address')}
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.address && errors.address.message && (
                        <small className="text-red-500">
                          {errors.address.message}
                        </small>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <Label htmlFor="rt" value="Nomor RT" />
                      <input
                        type="text"
                        {...register('rt')}
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.rt && errors.rt.message && (
                        <small className="text-red-500">
                          {errors.rt.message}
                        </small>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <Label htmlFor="rw" value="Nomor RW" />
                      <input
                        type="text"
                        {...register('rw')}
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.rw && errors.rw.message && (
                        <small className="text-red-500">
                          {errors.rw.message}
                        </small>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <Label
                        htmlFor="income_before"
                        value="Pendapatan Sebelum Pandemi"
                      />
                      <input
                        type="number"
                        {...register('income_before')}
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.income_before && errors.income_before.message && (
                        <small className="text-red-500">
                          {errors.income_before.message}
                        </small>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <Label
                        htmlFor="income_after"
                        value="Pendapatan Setelah Pandemi"
                      />
                      <input
                        type="number"
                        {...register('income_after')}
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.income_after && errors.income_after.message && (
                        <small className="text-red-500">
                          {errors.income_after.message}
                        </small>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <Label
                        htmlFor="reason"
                        value="Alasan Membutuhkan Bantuan"
                      />
                      <Controller
                        name="reason"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <CreatableSelect
                            isClearable
                            {...field}
                            id="reason-select"
                            instanceId="reason-select"
                            className="mt-1"
                            styles={{
                              control: (base) => ({
                                ...base,
                                "[type='text']:focus": {
                                  boxShadow: 'none',
                                },
                              }),
                            }}
                            placeholder="Ketikan alasan nya disini, atau pilih pilihan di bawah ini"
                            options={options}
                          />
                        )}
                      />
                      {errors.reason && (
                        <small className="text-red-500">
                          {errors.reason.value?.message}
                        </small>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <Label htmlFor="img_ktp" value="Foto KTP" />
                      <input
                        type="file"
                        {...register('img_ktp')}
                        className="pt-1 w-full focus:outline-none"
                      />
                      {errors.img_ktp && errors.img_ktp.message && (
                        <small className="text-red-500">
                          {errors.img_ktp.message}
                        </small>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <Label htmlFor="img_kk" value="Foto KK" />
                      <input
                        type="file"
                        {...register('img_kk')}
                        className="pt-1 w-full focus:outline-none"
                      />
                      {errors.img_kk && errors.img_kk.message && (
                        <small className="text-red-500">
                          {errors.img_kk.message}
                        </small>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <div className="flex items-center">
                        <input
                          id="agreement"
                          type="checkbox"
                          {...register('agreement')}
                          className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded cursor-pointer"
                        />
                        <label
                          htmlFor="agreement"
                          className="ml-3 block text-sm text-gray-900 select-none cursor-pointer"
                        >
                          Saya menyatakan bahwa data yang diisikan adalah benar
                          dan siap mempertanggungjawabkan apabila ditemukan
                          ketidaksesuaian dalam data tersebut.
                        </label>
                      </div>
                      {errors.agreement && (
                        <small className="text-red-500">
                          {errors.agreement.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="relative inline-flex items-center px-4 py-2 border border-transparent bg-green-700 text-lg font-medium rounded-md text-white shadow-sm hover:bg-green-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 ease-in-out duration-150"
                  >
                    <SaveIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    <span>{loading ? `Loading ...` : 'Simpan'}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

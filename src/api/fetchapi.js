import axios from 'axios';

const getProvinsi = async () => {
  await axios
    .get(API_URL_PROVINSI)
    .then((response) => setProvinsi(response.data));
  console.log(provinsi);
};

const getKabupaten = async (currentProvinsiID) => {
  await axios
    .get(
      `http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${currentProvinsiID}.json`
    )
    .then((response) => setkabupaten(response.data));
  console.log(kabupaten);
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

export { getProvinsi, getKabupaten, getKecamatan, getDesa };

import React from "react";

const TabelLaporan = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 text-center mb-10">
        Tabel Laporan Pengguna
      </h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Kategori Laporan
              </th>
              <th scope="col" class="px-6 py-3">
                Deskripsi Laporan
              </th>
              <th scope="col" class="px-6 py-3">
                Plat Kendaraan
              </th>
              <th scope="col" class="px-6 py-3">
                Email Pelapor
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Kekerasan verbal
              </th>
              <td class="px-6 py-4">
                Sopir menggunakan bahasa yang kurang baik
              </td>
              <td class="px-6 py-4">DD 0000 XX</td>
              <td class="px-6 py-4">astaganaga@y.ok</td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-red-500">
                  Supir Ditegur
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Pelecehan seksual
              </th>
              <td class="px-6 py-4">SOPIRNYA CATCALLING!!!</td>
              <td class="px-6 py-4">DD 1111 XX</td>
              <td class="px-6 py-4">omale@gmail.com</td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-red-500">
                  Sopir Diberhentikan
                </a>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Sopir Membahayakan
              </th>
              <td class="px-6 py-4">Sopir mengantuk dan ugal-ugalan</td>
              <td class="px-6 py-4">DD 10110 XX</td>
              <td class="px-6 py-4">gasss@gmail.com</td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-red-500">
                  Sopir Ditegur
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelLaporan;

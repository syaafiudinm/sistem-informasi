// App.jsx
import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore"; // Import onSnapshot
import { db } from "./firebase"; // Pastikan import db benar

function App() {
  // const [name, setName] = useState(null); // State untuk menyimpan nilai 'number'
  // const [loading, setLoading] = useState(true); // State untuk loading

  // // Fungsi untuk mengambil data dari Firestore
  // const fetchData = () => {
  //   // Mengakses dokumen 'data' di dalam koleksi 'count'
  //   const docRef = doc(db, "users", "KDmIm8pXGZaV9iNnCUXa"); // Menentukan referensi dokumen menggunakan doc()

  //   // Menggunakan onSnapshot untuk mendengarkan perubahan pada dokumen
  //   const unsubscribe = onSnapshot(
  //     docRef,
  //     (docSnap) => {
  //       if (docSnap.exists()) {
  //         // Jika dokumen ditemukan, ambil nilai dari field 'number'
  //         const nameValue = docSnap.data()?.name;
  //         setName(nameValue); // Set nilai 'number' ke state
  //         setLoading(false); // Set loading ke false setelah data diterima
  //       } else {
  //         console.log("Dokumen tidak ditemukan.");
  //         setLoading(false); // Set loading ke false jika dokumen tidak ditemukan
  //       }
  //     },
  //     (error) => {
  //       console.error("Error fetching data: ", error);
  //       setLoading(false); // Set loading ke false jika terjadi error
  //     }
  //   );

  //   // Mengembalikan fungsi unsubscribe untuk menghentikan pendengaran saat komponen unmounted
  //   return unsubscribe;
  // };

  // // Panggil fetchData ketika komponen dimuat
  // useEffect(() => {
  //   const unsubscribe = fetchData();
  //   return () => unsubscribe(); // Hentikan pendengaran saat komponen unmounted
  // }, []);

  // return (
  //   <div>
  //     <h1>Name from Firestore:</h1>
  //     {/* Menampilkan nilai number atau teks loading jika data belum ada */}
  //     {loading ? (
  //       <p className="text-2xl text-slate-900">Loading...</p>
  //     ) : (
  //       <p>{name !== null ? name : "No data available"}</p>
  //     )}
  //   </div>
  // );
}

export default App;

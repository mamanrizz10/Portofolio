"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    alamat: "",
    namaOrangTua: "",
    noTelepon: "",
    jenjang: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format pesan WhatsApp
    const message = `*PENDAFTARAN SANTRI BARU*
*Ponpes Assalam Kubar*

*Data Calon Santri:*
Nama Lengkap: ${formData.namaLengkap}
Tempat Lahir: ${formData.tempatLahir}
Tanggal Lahir: ${formData.tanggalLahir}
Jenis Kelamin: ${formData.jenisKelamin}
Alamat: ${formData.alamat}

*Data Orang Tua/Wali:*
Nama: ${formData.namaOrangTua}
No. Telepon: ${formData.noTelepon}

*Jenjang Pendidikan:*
${formData.jenjang === "MTs" ? "Madrasah Tsanawiyah (MTs)" : "Madrasah Aliyah (MA)"}

Mohon informasi lebih lanjut mengenai proses pendaftaran. Terima kasih.`;

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);
    
    // Nomor WhatsApp admin ponpes
    const phoneNumber = "6285751379112";
    
    // Buka WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-primary text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary text-2xl font-bold">PA</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Ponpes Assalam Kubar</h1>
                <p className="text-green-100 text-sm">Membentuk Generasi Qurani</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold animate-pulse">
            ✨ Kuota Terbatas - Daftar Sekarang!
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Wujudkan Impian Menjadi<br />
            <span className="text-yellow-300">Generasi Qurani Berakhlak Mulia</span>
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-green-50 max-w-3xl mx-auto">
            Bergabunglah dengan ribuan alumni sukses yang telah menimba ilmu di Ponpes Assalam Kubar
          </p>
          <p className="text-lg text-green-100 mb-8">
            📍 Pondok Pesantren Assalam Kalimantan Barat | Tahun Ajaran 2026/2027
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#daftar"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105"
            >
              🚀 Daftar Sekarang - Gratis!
            </a>
            <a 
              href="#fasilitas"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-4 rounded-full font-semibold text-lg border-2 border-white/30 transition"
            >
              Lihat Fasilitas
            </a>
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Mengapa Memilih Ponpes Assalam?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lebih dari sekadar belajar, kami membentuk karakter unggul yang siap menghadapi masa depan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
              <div className="text-4xl mb-3">🌟</div>
              <h4 className="font-bold text-lg mb-2 text-gray-800">Metode Pembelajaran Terpadu</h4>
              <p className="text-gray-600 text-sm">Kombinasi sempurna antara ilmu agama dan pengetahuan umum</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
              <div className="text-4xl mb-3">👨‍🏫</div>
              <h4 className="font-bold text-lg mb-2 text-gray-800">Ustadz Berpengalaman</h4>
              <p className="text-gray-600 text-sm">Dibimbing langsung oleh para ustadz lulusan universitas ternama</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="font-bold text-lg mb-2 text-gray-800">Prestasi Gemilang</h4>
              <p className="text-gray-600 text-sm">Ratusan alumni diterima di PTN dan universitas luar negeri</p>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Pilih Jenjang Pendidikan Anda
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border-2 border-green-100 hover:shadow-xl hover:border-primary transition-all transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary text-5xl">📚</div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800">
                    Madrasah Tsanawiyah
                  </h4>
                  <span className="text-sm text-gray-500">(Setara SMP)</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fondasi kuat untuk masa depan gemilang! Kami padukan kurikulum nasional dengan pendidikan agama yang mendalam, membentuk santri yang cerdas dan berakhlak mulia.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">Program Tahfidz Intensif</span>
                    <p className="text-sm text-gray-600">Target hafalan 3-5 juz selama 3 tahun</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">Bahasa Arab & Inggris</span>
                    <p className="text-sm text-gray-600">Komunikasi aktif sehari-hari</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">Pengembangan Karakter</span>
                    <p className="text-sm text-gray-600">Pembinaan akhlak dan kepemimpinan</p>
                  </div>
                </div>
              </div>
              <a href="#daftar" className="mt-6 block text-center bg-primary hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition">
                Daftar MTs Sekarang →
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border-2 border-green-100 hover:shadow-xl hover:border-primary transition-all transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary text-5xl">🎓</div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800">
                    Madrasah Aliyah
                  </h4>
                  <span className="text-sm text-gray-500">(Setara SMA)</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Persiapan maksimal menuju perguruan tinggi impian! Santri kami tidak hanya unggul akademik, tapi juga kuat dalam ilmu agama dan siap bersaing di tingkat nasional.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">Persiapan UTBK & SBMPTN</span>
                    <p className="text-sm text-gray-600">Bimbingan intensif masuk PTN favorit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">Kajian Kitab Kuning</span>
                    <p className="text-sm text-gray-600">Mendalami ilmu agama dari sumber asli</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">Kelas Peminatan</span>
                    <p className="text-sm text-gray-600">IPA, IPS, dan Keagamaan</p>
                  </div>
                </div>
              </div>
              <a href="#daftar" className="mt-6 block text-center bg-primary hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition">
                Daftar MA Sekarang →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formulir Pendaftaran */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-green-50" id="daftar">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold mb-4">
                🎉 Pendaftaran GRATIS - Tanpa Biaya Administrasi!
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Daftar Sekarang, Raih Masa Depan Gemilang!
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Hanya butuh 2 menit untuk mengisi formulir. Langkah pertama menuju kesuksesan dimulai dari sini!
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl mb-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💬</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Proses Cepat via WhatsApp!</h4>
                  <p className="text-green-50 text-sm leading-relaxed">
                    Setelah mengisi formulir, data Anda akan otomatis terkirim ke admin kami melalui WhatsApp. 
                    Tim kami akan segera menghubungi Anda untuk informasi lebih lanjut. Mudah, cepat, dan aman!
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <span>👤</span> Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="namaLengkap"
                    required
                    value={formData.namaLengkap}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="Contoh: Ahmad Fauzi"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <span>📍</span> Tempat Lahir <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="tempatLahir"
                      required
                      value={formData.tempatLahir}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                      placeholder="Contoh: Pontianak"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <span>📅</span> Tanggal Lahir <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="tanggalLahir"
                      required
                      value={formData.tanggalLahir}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <span>⚧</span> Jenis Kelamin <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="jenisKelamin"
                    required
                    value={formData.jenisKelamin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  >
                    <option value="">Pilih jenis kelamin</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <span>🏡</span> Alamat Lengkap <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="alamat"
                    required
                    value={formData.alamat}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="Contoh: Jl. Merdeka No. 123, Pontianak"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <span>👨‍👩‍👦</span> Nama Orang Tua/Wali <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="namaOrangTua"
                    required
                    value={formData.namaOrangTua}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="Contoh: Bapak Ahmad"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <span>📱</span> No. Telepon/WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="noTelepon"
                    required
                    value={formData.noTelepon}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="Contoh: 081234567890"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <span>🎓</span> Jenjang Pendidikan <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="jenjang"
                    required
                    value={formData.jenjang}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  >
                    <option value="">Pilih jenjang yang Anda inginkan</option>
                    <option value="MTs">Madrasah Tsanawiyah (MTs) - Setara SMP</option>
                    <option value="MA">Madrasah Aliyah (MA) - Setara SMA</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-green-700 text-white font-bold py-4 rounded-lg transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>💬</span>
                  Kirim via WhatsApp
                </button>
                <p className="text-center text-sm text-gray-500 mt-2">
                  Data akan dikirim melalui WhatsApp ke admin Ponpes Assalam
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section className="py-16 bg-white" id="fasilitas">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Fasilitas Lengkap untuk Kenyamanan Belajar
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan fasilitas terbaik agar santri dapat belajar dengan nyaman dan optimal
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl hover:shadow-lg transition">
              <div className="text-5xl mb-4">🕌</div>
              <h4 className="font-bold text-lg mb-2 text-gray-800">Masjid Megah</h4>
              <p className="text-gray-600 text-sm">Masjid luas ber-AC untuk ibadah dan kajian ilmu</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl hover:shadow-lg transition">
              <div className="text-5xl mb-4">🏠</div>
              <h4 className="font-bold text-lg mb-2 text-gray-800">Asrama Nyaman</h4>
              <p className="text-gray-600 text-sm">Asrama terpisah putra-putri dengan kamar bersih</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl hover:shadow-lg transition">
              <div className="text-5xl mb-4">�</div>
              <h4 className="font-bold text-lg mb-2 text-gray-800">Perpustakaan Digital</h4>
              <p className="text-gray-600 text-sm">Ribuan koleksi buku fisik dan digital</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl hover:shadow-lg transition">
              <div className="text-5xl mb-4">💻</div>
              <h4 className="font-bold text-lg mb-2 text-gray-800">Lab Komputer</h4>
              <p className="text-gray-600 text-sm">Teknologi modern untuk pembelajaran digital</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl hover:shadow-lg transition">
              <div className="text-5xl mb-4">⚽</div>
              <h4 className="font-bold text-lg mb-2 text-gray-800">Lapangan Olahraga</h4>
              <p className="text-gray-600 text-sm">Futsal, basket, voli untuk santri aktif</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl hover:shadow-lg transition">
              <div className="text-5xl mb-4">🍽️</div>
              <h4 className="font-bold text-lg mb-2 text-gray-800">Katering Sehat</h4>
              <p className="text-gray-600 text-sm">Makan Gratis 3X Sehari</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Menjadi Bagian dari Keluarga Besar Kami?
          </h3>
          <p className="text-xl mb-8 text-green-50 max-w-2xl mx-auto">
            Jangan lewatkan kesempatan emas ini! Kuota terbatas, daftar sekarang dan raih masa depan gemilang bersama Ponpes Assalam.
          </p>
          <a 
            href="#daftar"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition transform hover:scale-105"
          >
            � Ya, Saya Mau Daftar Sekarang!
          </a>
          <p className="mt-6 text-sm text-green-100">
            ⏰ Pendaftaran ditutup saat kuota penuh
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">PA</span>
                </div>
                <h4 className="font-bold text-xl">Ponpes Assalam Kubar</h4>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Membentuk generasi Qurani dengan akhlak mulia, ilmu yang bermanfaat, dan siap menghadapi tantangan masa depan.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4 text-green-400">Hubungi Kami</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span>📍</span>
                  <span>Kalimantan Barat, Indonesia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📞</span>
                  <span>[Nomor Telepon]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✉️</span>
                  <span>[Email]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>💬</span>
                  <span>WhatsApp: [Nomor WA]</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4 text-green-400">Jam Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="font-semibold">08.00 - 16.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sabtu</span>
                  <span className="font-semibold">08.00 - 12.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Minggu</span>
                  <span className="font-semibold">Libur</span>
                </li>
              </ul>
              <div className="mt-6">
                <a href="#daftar" className="inline-block bg-primary hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                  Daftar Sekarang →
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">
              &copy; 2026 Pondok Pesantren Assalam Kalimantan Barat. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Investasi terbaik adalah investasi untuk akhirat 🤲
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

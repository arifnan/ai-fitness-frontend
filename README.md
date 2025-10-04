# FitCare AI: Antarmuka Pengguna (Next.js)

## 1. Project Overview

### Latar Belakang & Permasalahan yang Diangkat

Pengalaman pengguna adalah kunci utama dalam aplikasi kesehatan. Website informasi fitness tradisional seringkali lambat, statis, dan tidak menarik, menyebabkan pengguna cepat kehilangan minat. Jika backend adalah otak dari FitCare AI, maka frontend ini adalah **wajah, suara, dan hatinya**—dirancang untuk menjadi kebalikan dari pengalaman yang membosankan tersebut.

**Tujuan proyek frontend ini sangat jelas:** **Menciptakan antarmuka pengguna yang secepat kilat, sangat interaktif, dan secara visual memotivasi, yang mengubah cara pengguna berinteraksi dengan data kesehatan.** Kami ingin membuat proses belajar tentang fitness dan nutrisi terasa semudah dan semenyenangkan membuka aplikasi media sosial favorit.

### Pendekatan Kami

Kami memilih arsitektur **frontend yang terpisah (decoupled)**, di mana antarmuka pengguna dibangun sebagai aplikasi mandiri yang berkomunikasi dengan backend melalui API. Pendekatan ini adalah standar industri modern yang memberikan fleksibilitas dan performa maksimal.

---

## 2. Teknologi yang Digunakan

Pemilihan teknologi difokuskan untuk mencapai tiga tujuan utama: **kecepatan, pengalaman developer modern, dan skalabilitas.**

| Teknologi        | Peran dalam Proyek                                                                                              | Alasan Pemilihan                                                                                                                                                                                              |
| :--------------- | :-------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Next.js** | *Framework* React untuk aplikasi web modern.                                                                    | Dipilih karena kemampuannya untuk **Server-Side Rendering (SSR)** dan **Static Site Generation (SSG)**. Ini berarti halaman dimuat dengan sangat cepat, memberikan pengalaman pengguna yang superior dan optimal untuk SEO. |
| **React** | *Library* utama untuk membangun UI.                                                                             | Komponen berbasis arsitekturnya memungkinkan kami membangun UI yang kompleks (seperti Chat Widget) yang mudah dikelola, diuji, dan digunakan kembali di seluruh aplikasi.                                         |
| **TypeScript** | *Superset* dari JavaScript dengan penambahan tipe statis.                                                       | Dipilih untuk **meningkatkan keandalan dan mengurangi bug**. Dengan TypeScript, kami dapat menangkap banyak kesalahan pada tahap pengembangan, menghasilkan aplikasi frontend yang lebih robust dan mudah dirawat.       |
| **CSS Global** | Metode styling utama.                                                                                          | Memberikan pendekatan yang sederhana dan kuat untuk memastikan konsistensi visual di seluruh aplikasi, dari halaman statis hingga komponen dinamis.                                                           |
| **Netlify** | Platform untuk *hosting* dan *Continuous Deployment*.                                                           | Dipilih karena integrasinya yang mulus dengan GitHub. Setiap kali kode baru di-*push*, Netlify secara otomatis membangun dan men-deploy versi terbaru, menyederhanakan alur kerja rilis secara dramatis.              |

---

## 3. Fitur Utama

Frontend ini dirancang untuk memberikan pengalaman yang kaya fitur dan berpusat pada pengguna.

* **Pemuatan Halaman Cepat dengan SSR**
    * **Cara Kerja:** Halaman `Workouts` dan `Nutrition` mengambil data dari API backend saat diminta oleh pengguna di sisi server. Halaman HTML yang sudah lengkap dengan data kemudian dikirim ke browser, sehingga konten langsung terlihat tanpa menunggu JavaScript dimuat.
    * **Fungsi:** Secara drastis mengurangi waktu tunggu pengguna dan meningkatkan performa yang dirasakan.

* **Filtering Data Interaktif di Sisi Klien**
    * **Cara Kerja:** Setelah data lengkap dimuat, komponen *Client Component* (`WorkoutBrowser.tsx` & `NutritionBrowser.tsx`) mengambil alih. Menggunakan *state management* React (`useState`), filter dan pencarian terjadi secara instan di dalam browser pengguna.
    * **Fungsi:** Memberikan pengalaman seperti aplikasi desktop yang responsif, di mana pengguna dapat menjelajahi ratusan data tanpa ada jeda atau *loading screen*.

* **Komponen Chat Widget Universal & Asinkron**
    * **Cara Kerja:** `ChatWidget.tsx` adalah sebuah *Client Component* mandiri. Saat pengguna mengirim pesan, ia secara asinkron (tanpa membekukan UI) mengirim permintaan `fetch` ke API backend. Ia mengelola status "mengetik..." dan secara dinamis merender jawaban setelah diterima.
    * **Fungsi:** Memberikan akses konstan ke fitur AI dari mana saja di dalam aplikasi, menciptakan pengalaman percakapan yang mulus dan terintegrasi.

---

## 4. Penjelasan Dukungan AI

Peran frontend dalam sistem AI ini adalah sebagai **jembatan antara kompleksitas backend dan kesederhanaan yang dibutuhkan pengguna.**

### Dampak Nyata pada Pengalaman Pengguna
* **Mengabstraksi Kompleksitas:** Pengguna tidak perlu tahu tentang API, RAG, atau model AI. Komponen `ChatWidget` menyembunyikan semua kerumitan teknis ini di belakang antarmuka yang familiar—sebuah jendela chat. Ia menerjemahkan tindakan sederhana (mengetik dan menekan enter) menjadi panggilan API yang kompleks.
* **Memberikan Umpan Balik Instan:** Dengan mengelola status `loading` secara lokal, frontend memberikan umpan balik visual yang penting kepada pengguna (`"Coach FitCare sedang mengetik..."`). Ini membuat proses menunggu yang mungkin lama terasa lebih interaktif dan meyakinkan bahwa sistem sedang bekerja.
* **Menjaga Keamanan:** Dengan memastikan semua interaksi dengan AI terjadi melalui panggilan API ke backend, frontend menegakkan prinsip keamanan yang fundamental: **kunci API Replicate tidak pernah sekalipun ada atau terekspos di browser pengguna.**

Secara keseluruhan, frontend adalah kunci yang membuat teknologi AI yang kuat ini terasa **mudah didekati, personal, dan aman** untuk digunakan oleh siapa saja.


## ⚙️ Instruksi Setup & Menjalankan

1.  **Clone repositori ini** ke mesin lokal Anda.
2.  **Install semua dependensi** Node.js:
    ```bash
    npm install
    ```
3.  **Konfigurasi Environment Variable**: Buat file bernama `.env.local` di direktori utama. File ini akan memberitahu Next.js alamat API backend Anda.
    * **Untuk development lokal (menghubungkan ke server Flask di komputer Anda):**
        ```
        NEXT_PUBLIC_API_URL=[http://127.0.0.1:5000](http://127.0.0.1:5000)
        ```
    * **Untuk koneksi ke backend yang sudah di-deploy:**
        ```
        NEXT_PUBLIC_API_URL=[https://alamat-backend-anda.onrender.com](https://alamat-backend-anda.onrender.com)
        ```
4.  **Jalankan server development Next.js:**
    ```bash
    npm run dev
    ```
5.  Buka `http://localhost:3000` di browser Anda untuk melihat aplikasi berjalan.

## Link Deployment Project
silahkan pergi ke halamaan berikut **https://ai-fitness-coach-for-health.netlify.app/**

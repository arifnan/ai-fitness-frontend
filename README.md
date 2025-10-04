# FitCare AI: Antarmuka Pengguna (Next.js)

## 🚀 Visi & Pengalaman Pengguna

Jika backend adalah otak, maka frontend ini adalah **wajah, suara, dan hati** dari FitCare AI. Kami percaya bahwa aplikasi kesehatan tidak hanya harus fungsional, tetapi juga harus **menginspirasi, mudah digunakan, dan membangun kepercayaan**. Dibangun dengan **Next.js**, aplikasi ini dirancang untuk memberikan pengalaman pengguna yang secepat kilat, modern, dan memotivasi dari klik pertama.

Tujuan kami adalah menyajikan data kesehatan yang kompleks dalam format yang indah dan mudah dipahami, memungkinkan siapa saja, dari pemula hingga mahir, untuk mengambil kendali atas perjalanan kesehatan mereka.

---

## 💻 Teknologi yang Digunakan

| Kategori             | Teknologi                                                    |
| :------------------- | :----------------------------------------------------------- |
| **Framework Utama** | Next.js 14+ (dengan App Router)                              |
| **Library UI** | React 18+                                                    |
| **Bahasa** | TypeScript                                                   |
| **Styling** | Global CSS                                                   |
| **Arsitektur** | Server & Client Components, Decoupled Frontend               |
| **Deployment** | Netlify                                                      |

---

## ✨ Fitur Unggulan

* **Pengambilan Data Sisi Server (Server-Side Rendering)**: Halaman "Explore Workouts" dan "Nutrition Guide" mengambil data dari API backend saat *build time* atau saat diminta, memastikan *load time* yang cepat dan SEO yang baik.
* **Filtering Interaktif Sisi Klien**: Pengguna dapat mencari, menyortir, dan memfilter ratusan data latihan dan nutrisi secara instan di browser tanpa me-reload halaman.
* **Komponen Chat Widget Universal**: Sebuah komponen React yang canggih dan mandiri, menyediakan akses ke Coach AI dari halaman mana pun di seluruh situs.
* **Desain Portofolio Profesional**: Halaman "About" dirancang khusus sebagai etalase portofolio, menampilkan keahlian teknis dan visi developer.
* **Deployment Otomatis**: Terintegrasi dengan Netlify untuk proses *Continuous Deployment*—setiap `git push` ke branch utama akan otomatis men-deploy versi terbaru.

---

## 🧠 Arsitektur & Interaksi dengan AI

Frontend ini dibangun dengan arsitektur **decoupled (terpisah)**. Ia tidak tahu-menahu tentang bagaimana AI bekerja; tugasnya hanyalah berkomunikasi dengan backend melalui API.

**Alur Kerja Chatbot:**

1.  **Input Pengguna**: Pengguna mengetik pertanyaan di dalam `ChatWidget.tsx`, sebuah *Client Component* yang interaktif.
2.  **Permintaan API**: Komponen tersebut mengirimkan pertanyaan pengguna dalam format JSON melalui permintaan `POST` ke endpoint backend (misalnya, `https://ai-fitness-backend.onrender.com/api/ask`).
3.  **Menunggu Jawaban**: Selama menunggu, UI secara dinamis menampilkan pesan "sedang mengetik...".
4.  **Menampilkan Hasil**: Setelah menerima respons JSON dari backend, komponen akan menampilkan jawaban AI di dalam antarmuka chat.

Pemisahan ini sangat penting karena menjaga **keamanan** (kunci API tidak pernah terekspos di browser) dan **fleksibilitas** (kita bisa mengganti model AI atau bahkan seluruh backend tanpa perlu mengubah kode frontend).

---

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

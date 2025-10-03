import Image from 'next/image';
import HomeSlider from '@/components/HomeSlider'; // Import komponen slider yang baru

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Image Slider */}
      <HomeSlider /> {/* Menggunakan komponen slider yang interaktif */}

      {/* 2. Features Section */}
      <section className="features">
        <h2>How It Works</h2>
        <div className="feature-cards">
          <div className="card"><i className="fas fa-search"></i><h3>Explore Workouts</h3><p>Browse our extensive library of exercises for every level.</p></div>
          <div className="card"><i className="fas fa-robot"></i><h3>Ask Coach FitCare</h3><p>Get instant, personalized advice from our AI-powered coach.</p></div>
          <div className="card"><i className="fas fa-chart-line"></i><h3>Track Your Progress</h3><p>Stay motivated by seeing how far you've come on your journey.</p></div>
        </div>
      </section>

      {/* 3. "Temui Coach FitCare" Section */}
      <section className="ai-intro-section alternate-bg">
        <div className="ai-intro-content">
          <div className="ai-intro-text">
            <h2>Temui Coach FitCare, Pelatih Cerdas Anda</h2>
            <p>Lupakan kebingungan di gym atau keraguan tentang nutrisi. Coach FitCare adalah partner AI Anda yang didukung oleh model bahasa canggih dan database latihan yang luas. Dapatkan jawaban berbasis sains untuk pertanyaan seperti:</p>
            <ul>
              <li><i className="fas fa-check-circle"></i> "Bagaimana cara melakukan deadlift dengan benar?"</li>
              <li><i className="fas fa-check-circle"></i> "Apa makanan tinggi protein terbaik setelah berolahraga?"</li>
              <li><i className="fas fa-check-circle"></i> "Buatkan saya rencana latihan 3 hari untuk pemula."</li>
            </ul>
            <p>Kecerdasan ada di ujung jari Anda, tersedia 24/7 untuk memastikan setiap langkah Anda di jalan kesehatan adalah langkah yang tepat.</p>
          </div>
          <div className="ai-intro-image">
            {/* Pastikan gambar ini ada di public/images/ai-visualization.jpg */}
            <Image src="/images/ai.png" alt="AI Brain Visualization" width={500} height={300} style={{ objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* 4. "Kisah Transformasi" Section */}
      <section className="testimonials">
        <h2>Kisah Transformasi Pengguna Kami</h2>
        <div className="testimonial-cards">
            <div className="card">
                <p>"Awalnya saya ragu, tapi Coach FitCare benar-benar mengubah cara saya berolahraga. Jawabannya selalu akurat dan memotivasi!"</p>
                <h4>- Alex (Pengguna Aktif)</h4>
            </div>
            <div className="card">
                <p>"Sebagai seorang pemula, saya sering takut salah. Aplikasi ini memberi saya kepercayaan diri untuk mencoba gerakan baru di gym."</p>
                <h4>- Sarah (Pemula Fitness)</h4>
            </div>
        </div>
      </section>

      {/* 5. Call to Action (CTA) Section */}
      <section className="cta-section alternate-bg">
        <h2>Siap untuk Memulai Transformasi Anda?</h2>
        <p>Panduan kesehatan cerdas Anda hanya berjarak satu klik. Coba Coach FitCare sekarang!</p>
        <button className="chat-toggle-btn-main">Mulai Mengobrol dengan AI</button>
      </section>
    </>
  );
}
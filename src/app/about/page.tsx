import Image from 'next/image';

export default function AboutPage() {
    // Pastikan gambar 'nanda.jpg' ada di dalam folder public/images
    const profilePic = "/images/nanda.jpg"; 

    return (
        <div className="about-page">
            {/* Section 1: Hero */}
            <section className="about-hero-new">
                <Image src={profilePic} alt="Foto Profesional Nanda Nan Arif H" className="hero-profile-pic" width={200} height={200} />
                <h1>Nanda Nan Arif H</h1>
                <p>AI & Full-Stack Developer | Mobile Developer | Graphic Designer</p>
                <a href="#contact" className="btn-primary">Hubungi Saya</a>
            </section>

            {/* Section 2: Keahlian Utama Saya (Piramida Terbalik) */}
            <section className="skills-pyramid-section alternate-bg">
                <h2>Keahlian Utama Saya</h2>
                <div className="skills-pyramid-container">
                    <div className="skill-row">
                        <div className="skill-tag">Python</div>
                        <div className="skill-tag">Flask</div>
                        <div className="skill-tag">JavaScript</div>
                        <div className="skill-tag">HTML5 & CSS3</div>
                        <div className="skill-tag">AI & Machine Learning</div>
                        <div className="skill-tag">RAG Architecture</div>
                        <div className="skill-tag">REST APIs</div>
                    </div>
                    <div className="skill-row">
                        <div className="skill-tag">Kotlin Development</div>
                        <div className="skill-tag">Adobe Illustrator</div>
                        <div className="skill-tag">Photoshop</div>
                    </div>
                    <div className="skill-row">
                        <div className="skill-tag">UI/UX Design</div>
                    </div>
                </div>
            </section>

            {/* Section 3: Visi & Misi Saya */}
            <section className="vision-section">
                <h2>Visi & Misi Saya</h2>
                <p className="section-subtitle">Saya tidak hanya menulis kode, saya membangun solusi yang bermakna.</p>
                <div className="vision-content">
                    <div className="vision-item">
                        <h3>Visi Saya</h3>
                        <p>Menjadi developer yang menciptakan produk teknologi inovatif yang mudah diakses dan memberikan dampak positif bagi kehidupan sehari-hari masyarakat.</p>
                    </div>
                    <div className="vision-item">
                        <h3>Misi Saya</h3>
                        <p>Mengaplikasikan keahlian dalam pengembangan web dan AI untuk memecahkan masalah nyata, sambil terus belajar dan berkolaborasi dalam lingkungan yang dinamis.</p>
                    </div>
                </div>
            </section>

            {/* Section 4: Project Showcase */}
            <section className="project-showcase alternate-bg">
                <h2>Project Showcase</h2>
                <div className="project-block">
                    <div className="project-slider-container">
                        <div className="project-image-slide fade">
                            <Image src="/images/slide1.jpg" alt="FitCoach AI 1" layout="fill" objectFit="cover" />
                        </div>
                        <div className="project-image-slide fade">
                             <Image src="/images/slide3.jpg" alt="FitCoach AI 2" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                    <div className="project-text">
                        <h3>AI Fitness Coach</h3>
                        <p>Aplikasi web full-stack yang memberikan saran fitness yang dipersonalisasi menggunakan arsitektur RAG dengan Large Language Model dari Replicate.</p>
                        <div className="tech-tags"><span>Flask</span><span>Replicate API</span><span>RAG</span></div>
                        <div className="project-links"><a href="#" className="btn-secondary">Lihat Kode</a></div>
                    </div>
                </div>
            </section>

            {/* Section 5: Apa yang Saya Tawarkan */}
            <section className="value-section">
                <h2>Apa yang Saya Tawarkan</h2>
                <p className="section-subtitle">Tiga pilar yang saya bawa ke dalam setiap tim dan proyek.</p>
                <div className="value-items-container">
                    <div className="value-item">
                        <i className="fas fa-users"></i>
                        <h3>Semangat Kolaboratif</h3>
                        <p>Saya berkembang dalam tim, senang berbagi pengetahuan, dan percaya bahwa hasil terbaik datang dari kerja sama yang solid.</p>
                    </div>
                    <div className="value-item">
                        <i className="fas fa-brain"></i>
                        <h3>Pendekatan Berbasis Data</h3>
                        <p>Saya terbiasa membuat keputusan yang didukung oleh data dan logika untuk memastikan solusi yang dibangun benar-benar efektif.</p>
                    </div>
                    <div className="value-item">
                        <i className="fas fa-heart"></i>
                        <h3>Fokus Pada Pengguna</h3>
                        <p>Bagi saya, pengguna adalah pusat dari segalanya. Saya berdedikasi untuk menciptakan pengalaman yang intuitif dan menyenangkan.</p>
                    </div>
                </div>
            </section>

            {/* Section 6: Kontak */}
            <section id="contact" className="contact-section">
                <h2>Mari Terhubung</h2>
                <p>Saya selalu antusias untuk mendiskusikan peluang baru, proyek kolaboratif, atau sekadar mengobrol tentang teknologi.</p>
                <div className="social-links-lg">
                    <a href="https://github.com/arifnan/ai-fitness-coach" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/nanda-nan-arif-h-673847287/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    <a href="mailto:arifnanda79@gmail.com" title="Email"><i className="fas fa-envelope"></i></a>
                </div>
            </section>
        </div>
    );
}
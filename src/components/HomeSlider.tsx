'use client'; // Ini adalah Client Component

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
    { src: "/images/slide1.jpg", alt: "Healthy Lifestyle", text: "Transform Your Body, Transform Your Life" },
    { src: "/images/slide2.jpg", alt: "Fitness Workout", text: "Achieve Your Dream Fitness Goals" },
    { src: "/images/slide3.jpg", alt: "Healthy Food", text: "Fuel Your Body, Nourish Your Soul" },
];

export default function HomeSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 5000); // Ganti slide setiap 5 detik

        return () => clearInterval(interval); // Cleanup interval saat komponen di-unmount
    }, []);

    return (
        <div className="slider-container">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide fade ${index === currentSlide ? 'active' : ''}`}
                    style={{ display: index === currentSlide ? 'block' : 'none' }}
                >
                    <Image
                        src={slide.src}
                        alt={slide.alt}
                        layout="fill"
                        objectFit="cover"
                        priority={index === 0} // Prioritaskan gambar pertama untuk loading lebih cepat
                    />
                    <div className="slide-text">{slide.text}</div>
                </div>
            ))}
        </div>
    );
}
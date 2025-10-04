'use client'; // Menandakan ini adalah Client Component

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'; // Impor Image dari Next.js

// Mendefinisikan tipe untuk setiap pesan
type Message = {
    text: string;
    type: 'user' | 'bot' | 'bot-loading';
};

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: 'Halo! Saya Coach FitCare. Ada yang bisa saya bantu?', type: 'bot' }
    ]);
    const [userInput, setUserInput] = useState('');
    const chatMessagesRef = useRef<HTMLDivElement>(null);

    // Fungsi untuk scroll otomatis ke pesan terakhir
    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]);

        // === GANTI SELURUH FUNGSI INI ===
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        const userMessage: Message = { text: userInput, type: 'user' };
        const loadingMessage: Message = { text: 'Coach FitCare sedang mengetik...', type: 'bot-loading' };

        setMessages(prev => [...prev, userMessage, loadingMessage]);
        setUserInput('');

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000';
            const response = await fetch(`${apiUrl}/api/ask`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: userMessage.text })
            });
            
            // Membaca respons dari backend
            const data = await response.json();

            // Jika respons TIDAK sukses (misalnya error 500 dari Flask)
            if (!response.ok) {
                // Tampilkan pesan error dari backend jika ada, atau pesan default
                const errorMessageText = data.error || 'Terjadi kesalahan pada server.';
                throw new Error(errorMessageText);
            }

            // Jika respons sukses
            const botMessage: Message = { text: data.answer || 'Maaf, saya tidak mendapat jawaban.', type: 'bot' };
            setMessages(prev => [...prev.slice(0, -1), botMessage]);

        } catch (error) {
            console.error("Error fetching AI response:", error);
            // Menampilkan pesan error yang lebih informatif di chat
            const errorMessageText = error instanceof Error ? error.message : 'Tidak bisa terhubung ke server.';
            const errorMessage: Message = { text: `Error: ${errorMessageText}`, type: 'bot' };
            setMessages(prev => [...prev.slice(0, -1), errorMessage]);
        }
    };
    return (
        <>
            <div className={`chat-popup ${isOpen ? 'active' : ''}`} id="chat-popup">
                <div className="chat-header">
                    <h2>Coach FitCare</h2>
                    <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>
                </div>
                <div className="chat-messages" ref={chatMessagesRef}>
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.type}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <form className="chat-input-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Ketik pertanyaanmu..."
                        required
                        autoComplete="off"
                    />
                    <button type="submit"><i className="fas fa-paper-plane"></i></button>
                </form>
            </div>
            
            {/* Tombol Toggle Chatbot dengan gambar */}
            <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                {/* Ganti dengan path gambar chatbot Anda */}
                <Image src="/images/chat.png" alt="Chat with AI" width={30} height={30} /> 
            </button>
        </>
    );
}
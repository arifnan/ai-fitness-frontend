import './globals.css';
import Link from 'next/link';
import ChatWidget from '../components/ChatWidget'; // Impor komponen chat

export const metadata = {
  title: 'AI Fitness Coach',
  description: 'Your personal AI-powered fitness and nutrition guide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
        <nav className="navbar">
            <div className="nav-container">
                <Link href="/" className="nav-logo">FitCoach AI</Link>
                <div className="nav-links">
                    <Link href="/">Home</Link>
                    <Link href="/workouts">Explore Workouts</Link>
                    <Link href="/nutrition">Nutrition Guide</Link>
                    <Link href="/about">About</Link>
                </div>
            </div>
        </nav>
        
        <main>
          {children}
        </main>
        
        <ChatWidget /> {/* Tambahkan komponen chat di sini */}
      </body>
    </html>
  );
}

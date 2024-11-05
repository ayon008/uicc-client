import { Montserrat } from 'next/font/google'
import "./globals.css";
import Navbar from '@/shared/Navbar';
import Footer from '@/shared/Footer';


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};




export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${montserrat.className}`}
      >
        <main className='max-w-[1920px] mx-auto min-h-screen'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

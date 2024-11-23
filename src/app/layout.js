import { Montserrat } from 'next/font/google'
import "./globals.css";
import Navbar from '@/shared/Navbar';
import Footer from '@/shared/Footer';
import AuthProvider from '@/Provider/AuthProvider';
import AOSProvider from '@/Provider/AOSProvider';
import ScrollTopBtn from '@/Components/ScrollTopBtn';


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
          <AOSProvider>
            <AuthProvider>
              <Navbar />
              {children}
              <div className='fixed 2xl:bottom-28 xl:bottom-28 2xl:right-16 xl:right-16 bottom-10 right-8 z-50'>
                <ScrollTopBtn />
              </div>
              <Footer />
            </AuthProvider>
          </AOSProvider>
        </main>
      </body>
    </html>
  );
}

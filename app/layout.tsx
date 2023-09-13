import Navbar from '@/components/Navbar';
import './globals.css'
import Footer from '@/components/Footer';


export const metadata = {
  title: "Flexibile",
  description: "Showcase & discover Developer Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

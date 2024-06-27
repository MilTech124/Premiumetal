import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Garázsok PREMIUMetal -  A legmagasabb minőség az Ön igényeinek!",
  description: `Fedezze fel prémium garázskínálatunkat az Ön igényeire szabva.
 Bízzon meg a PREMIUMetalban!`,
  keywords:
    "lemezgarázsok, bádoggarázsok, fahatású garázsok, akril garázsok, kennelek, kutya kennelek, prémium garázsok",
  robots: "index, follow",
  openGraph: {
    images: "/og-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pl"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body className={inter.className}>
        <Header />
         {children}
        <Footer />
      </body>
    </html>
  );
}

export const revalidate = 3600; // revalidate at most every hour

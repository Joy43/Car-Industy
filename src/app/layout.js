import { Inter } from "next/font/google";
import "./globals.css";




import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import Navbar from "./components/share/Navbar";
import Footer from "./components/share/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "car industry",
    template: "%s | Car Industry",
  },
  description: "Car Reaper Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Suspense>
      <ToastContainer/>
        {/* <AuthProvider> */}
          <Navbar />
          {children}
          <Footer />
        {/* </AuthProvider> */}
        </Suspense>
      </body>
    </html>
  );
}

import { Unbounded } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
const unbounded = Unbounded({
  display: 'swap',
  subsets: ["latin"],
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.className} antialiased`}
      >
        <Header></Header>
        <main className="h-screen w-screen flex flex-col items-center">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
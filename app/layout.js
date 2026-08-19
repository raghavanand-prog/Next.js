import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "FSD Lab 9 & 10",
  description:
    "Full Stack Development Lab Assignment - SSR, CSR and Responsive Layout in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {/* Simple navigation shown on every page */}
        <Navbar />

        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>

        <footer className="border-t bg-white py-6 text-center text-sm text-slate-500">
          FSD Lab 9 &amp; 10 — Next.js SSR, CSR &amp; Responsive Layout
          <br />
          <span className="text-slate-400">MCA Lab Assignment</span>
        </footer>
      </body>
    </html>
  );
}

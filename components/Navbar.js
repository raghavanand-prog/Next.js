export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <a href="/" className="text-lg font-bold text-blue-600">
          FSD Lab 9 &amp; 10
        </a>
        <div className="flex gap-4 text-sm font-medium">
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
          <a href="/ssr" className="hover:text-blue-600">
            SSR
          </a>
          <a href="/csr" className="hover:text-blue-600">
            CSR
          </a>
        </div>
      </div>
    </nav>
  );
}
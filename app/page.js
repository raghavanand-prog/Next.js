export const metadata = {
  title: 'Home | FSD Lab 9 & 10',
};

export default function Home() {
  return (
    <section>
      <h1 className="text-2xl sm:text-3xl font-bold mb-3">
        Full Stack Development Lab 9 &amp; 10
      </h1>
      <p className="mb-8 text-slate-600 leading-relaxed">
        This is a simple lab assignment that demonstrates Server-Side Rendering
        (SSR), Client-Side Rendering (CSR), fetching data from a public API, and
        a mobile-first responsive layout built with Next.js and Tailwind CSS.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="/ssr"
          className="block bg-white rounded-lg border shadow-sm p-6 hover:shadow-md"
        >
          <h2 className="text-lg font-semibold text-blue-600 mb-1">
            Server-Side Rendering (SSR)
          </h2>
          <p className="text-sm text-slate-600">
            Posts are fetched on the server before the page is sent to the
            browser.
          </p>
        </a>
        <a
          href="/csr"
          className="block bg-white rounded-lg border shadow-sm p-6 hover:shadow-md"
        >
          <h2 className="text-lg font-semibold text-blue-600 mb-1">
            Client-Side Rendering (CSR)
          </h2>
          <p className="text-sm text-slate-600">
            Users are fetched in the browser after the page loads.
          </p>
        </a>
      </div>

      <div className="mt-6 bg-white rounded-lg border shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-2">Responsive Layout</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Tailwind responsive classes are used so the content adjusts to the
          screen size: one column on mobile, two columns on tablet, and three
          columns on desktop.
        </p>
      </div>
    </section>
  );
}

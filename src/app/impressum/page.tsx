import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex min-h-screen w-screen items-center justify-center bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
      <div className="grid max-w-2xl gap-8 px-4 text-center md:px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Seppis Fit@Home
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Römerweg 9, 32760 Detmold, Deutschland
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Telefon: +49 176 55377034
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Email: seppmann.s@web.de
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Rechtsform: Einzelunternehmen
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Vertretungsberechtigt: Sascha Seppmann
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:seppmann.s@web.de"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          >
            Schreib mir
          </a>
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          >
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}

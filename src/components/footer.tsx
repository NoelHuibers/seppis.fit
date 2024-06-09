import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-4 py-6 dark:bg-gray-900 md:px-6">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 text-gray-500 dark:text-gray-400 md:mb-0">
          <div className="flex flex-row space-x-2">
            <p>Telefon:</p>
            <a className="hover:underline" href="tel:+4915165474766">
              +49 151 65474766
            </a>
          </div>
          <div className="flex flex-row space-x-2">
            <p>E-Mail:</p>
            <a className="hover:underline" href="mailto:seppmann.s@web.de">
              seppmann.s@web.de
            </a>
          </div>
        </div>
        <Link
          className="text-gray-500 hover:underline dark:text-gray-400"
          href="/impressum"
        >
          Impressum
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

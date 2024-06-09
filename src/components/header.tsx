import { LiaDumbbellSolid } from "react-icons/lia";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-black to-yellow-500 px-4 py-3 text-slate-50 dark:text-slate-400">
      <Link className="flex items-center" href="#">
        <LiaDumbbellSolid className="mr-2 h-6 w-6" />
        <span className="text-xl font-bold">Seppis Fit@Home</span>
      </Link>
      <div className="flex items-center space-x-4">
        <a href="mailto:seppmann.s@web.de">
          <IoIosMail className="h-6 w-6" />
        </a>
      </div>
    </header>
  );
};

export default Header;

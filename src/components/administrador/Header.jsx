import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/administrador/home" className="flex items-center">
          <img
            src="/user.png"
            className="mr-3 h-6 sm:h-9"
            alt="logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Administrador
          </span>
        </Link>

        <span className="text-white">{new Date().toDateString()}</span>
      </div>
    </nav>
  );
}

export default Header;

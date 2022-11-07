import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import { useContext } from "react";
function Header() {
  const { display, setdisplay } = useContext(AppContext);

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/administrador/home" className="flex items-center">
          <img src="/user.png" className="mr-3 h-6 sm:h-9" alt="logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Administrador
          </span>
        </Link>
        <div className="flex gap-2">
          <span className="text-white">{new Date().toDateString()}</span>
          <button
            className="text-slate-100 w-8"
            onClick={() => setdisplay(!display)}
          >
            <div className="space-y-2">
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;

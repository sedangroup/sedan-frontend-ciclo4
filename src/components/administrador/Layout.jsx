import Aside from "./Aside";
import Header from "./Header";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="flex flex-col h-screen min-w-min md:flex-row lg:flex-row bg-red-400">
        <Aside />
        <div className="flex flex-col items-center justify-center w-full h-auto overflow-y-auto bg-gray-50 p-4">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;

import Formulario from "../components/login/Formulario";
import Links from "../components/login/Links";

function Login() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-7 mx-auto md:h-screen lg:h-screen sm:h-screen" >
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src="src\assets\user.png" alt="logo" />
          Sistema GEUV
        </a>
        <Formulario />
      </div>
    </section>
  );
}

export default Login;

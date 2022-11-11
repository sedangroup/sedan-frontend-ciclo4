import BarChar from "../../components/administrador/home/BarChar";
import Layout from "../../components/administrador/Layout";
import AreaChar from "../../components/administrador/home/AreaChar";
import MultiaxisChar from "../../components/administrador/home/MultiaxisChar";
import RatedProductos from "../../components/administrador/home/RatedProductos";
import BalanceVentas from "../../components/administrador/home/BalanceVentas";
import AlertaProducto from "../../components/administrador/home/AlertaProducto";

function Home() {
  return (
    <Layout>
      <div className="w-full h-auto min-h-screen  overscroll-scroll pt-3">
        <div className="grid grid-cols-1 h-48 bg-gray-900 rounded p-5">
          <div className="rounded bg-slate-50">
            <MultiaxisChar />
          </div>
        </div>
        <div className="grid grid-cols-1   grid-rows-3  md:grid-cols-3 md:grid-rows-1 place-content-center ali w-full h-auto md:h-48 lg:h-52   border-t-amber-800 bg-gray-900 mt-5 p-5 gap-2 rounded">
          <div className="rounded  p-1 bg-slate-50">
            <BarChar />
          </div>
          <div className=" rounded p-1 bg-slate-50">
            <AreaChar />
          </div>
          <div className="rounded  bg-slate-50 max-h-44">
            <RatedProductos/>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1  bg-gray-900 mt-5 rounded p-5 gap-4">
          <div className="bg-slate-200 h-60 rounded">
            <BalanceVentas/>
          </div>
          <div className="bg-slate-200 h-auto md:h-60 rounded flex justify-center items-center p-2">
            <AlertaProducto/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

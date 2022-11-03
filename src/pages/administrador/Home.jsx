import BarChar from "../../components/administrador/BarChar";
import Layout from "../../components/administrador/Layout";
import AreaChar from "../../components/administrador/AreaChar";

function Home() {
  return (
    <Layout>
      <div className="w-full h-auto min-h-screen bg-slate-500 overscroll-scroll pt-3">
        <div className="w-full h-52 bg-black rounded ">aa</div>
        <div className="grid grid-cols-1  grid-rows-3 md:grid-cols-3 md:grid-rows-1 place-content-center ali w-full h-48 max-h-52 bg-slate-200 border-t-amber-800 dark:bg-gray-900 mt-5 p-5 gap-2 rounded">
          <div className="rounded border-red-600 p-1 bg-slate-50">
            <BarChar />
          </div>
          <div className=" rounded border-red-600 bg-slate-50">
            <AreaChar />
          </div>
          <div className="bg-orange-900 rounded">3</div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 bg-orange-800 mt-5 rounded p-5 gap-4">
          <div className="bg-green-600 h-60 rounded">1</div>
          <div className="bg-indigo-500 h-60 rounded">2</div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 bg-orange-800 mt-5 rounded p-5 gap-4">
          <div className="bg-green-600 h-60 rounded">1</div>
          <div className="bg-indigo-500 h-60 rounded">2</div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

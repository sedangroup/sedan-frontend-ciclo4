import { productos } from "./data";
function BalanceVentas() {
  let proyeccion = 0;
  let ingresos_reales = 0;
  productos.map((val) => (proyeccion += val.price * 1.5));
  productos.map((val) => (ingresos_reales += val.price));
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-2 gap-2">
      <div className="w-full p-5 text-center box-border border-2 rounded-md border-slate-300 bg-slate-100">
        <h2 className="text-md font-semibold">Ingresos previstos</h2>
        <p className="text-4xl font-bold">{`$${proyeccion.toLocaleString()}`}</p>
      </div>
      <div className="w-full p-5 text-center box-border border-2 rounded-md border-slate-300 bg-slate-100">
        <h2 className="text-md font-semibold">Ingresos reales</h2>
        <p className="text-4xl font-bold">{`$${ingresos_reales.toLocaleString()}`}</p>
      </div>
    </div>
  );
}

export default BalanceVentas;

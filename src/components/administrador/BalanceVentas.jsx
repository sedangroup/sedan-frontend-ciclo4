import { productos } from "./data";
function BalanceVentas() {
  let proyeccion = 0;
  let ingresos_reales = 0;
  productos.map((val) => (proyeccion += val.price * 1.5));
  productos.map((val) => (ingresos_reales += val.price));
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-2 gap-2">
      <div className="w-full p-5 text-center box-border border-2 rounded-md border-slate-200">
        <h2 className="text-xl font-bold">Ingresos previstos</h2>
        <p className="text-3xl font-light">{`$${proyeccion.toLocaleString()}`}</p>
      </div>
      <div className="w-full p-5 text-center box-border border-2 rounded-md border-slate-200">
        <h2 className="text-xl font-bold">Ingresos reales</h2>
        <p className="text-3xl font-light">{`$${ingresos_reales.toLocaleString()}`}</p>
      </div>
    </div>
  );
}

export default BalanceVentas;

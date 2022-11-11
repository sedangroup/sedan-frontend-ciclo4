import { productos } from "./data";
function AlertaProducto() {
  const peor_calificacion = productos.sort(function (a, b) {
    return a.rating - b.rating;
  });
  console.log(peor_calificacion);
  return (
    <div className="flex flex-col  justify-center items-center h-full w-full bg-slate-50 rounded-md">
      <div className=" flex flex-col justify-center items-center">
        <div className=" flex flex-row items-center justify-center  md:gap-2 w-full p-2">
            <img src="/warning.png" className="w-8 h-8 "/>
            <h2 className="text-2xl font-bold text-red-600 text-center">Cuidado con este producto:</h2>
        </div>
        <p className="font-bold text-lg">{peor_calificacion[0].name}</p>
      </div>
      <div>
        <b className="text-base font-medium">Promedio ventas por mes: <b className="font-bold">{3}</b></b>
      </div>
      <div>
        <b className=" text-base font-medium">promedio calificacion usuarios: <b className="font-bold">{2.9}</b></b>
      </div>
      <div className=" text-center">
        <b className="text-base font-medium">frase o palabra mas repetida en calificaciones:</b>
        <p className="font-bold">{`"Malo", "no sirve", "se daña rapido"`}</p>
      </div>
    </div>
  );
}

export default AlertaProducto;

import { PolarGrid } from "recharts";
import { productos } from "../home/data";
import ProductCard from "./ProductCard";

function ProductosList() {
  return (
    <ul className="flex  flex-col h-screen w-full overflow-auto p-1 bg-slate-100 divide-y-4">
      <div className=" flex w-full justify-start pb-2">
        <button className=" bg-lime-500 p-2 rounded-full text-gray-50 hover:font-bold w-full md:w-auto">
          Nuevo Producto
        </button>
      </div>
      {productos.map((prod, key) => (
        <ProductCard
          key={key}
          nombre={prod.name}
          imagen={prod.img}
          precio={prod.price}
          rating={prod.rating}
        />
      ))}
    </ul>
  );
}

export default ProductosList;

import StarRating from "./StarRating";
import { productos } from "./data";

function RatedProductos() {
  let sortedProducts = productos.sort(function(a, b){return a.rating-b.rating;}).reverse();
  return (
    <div className="h-full w-full overflow-auto">
      <h2 className="text-lg text-center font-bold">
        Productos mejor valorados
      </h2>
      <ul className=" p-3 overflow-auto  grid grid-cols-1 divide-y ">
        {sortedProducts?.map((prod, key) => (
          <li className="flex gap-2 items-center justify-center p-1" key={key}>
            <img
              src={prod.img}
              className="w-8 h-8 object-contain rounded-full "
            />
            <p className="text-sm font-medium truncate w-36">{prod.name}</p>
            <div className="font-bold text-md flex items-center justify-end float-right ml-2">
              {prod.rating}
              <StarRating />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RatedProductos;

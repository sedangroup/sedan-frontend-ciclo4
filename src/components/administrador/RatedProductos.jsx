import StarRating from "./StarRating";

function RatedProductos() {
  const productos = [
    {
      name: "Nvidia Gt 1030 2gb",
      img: "/prod1.jpg",
      rating: 4.98,
    },
    {
      name: "Asus TUF G10 intel i9 10900k",
      img: "/prod2.jpg",
      rating: 4.93,
    },
    {
      name: "jfk audifonos bluetooth 5.1",
      img: "/prod3.jpg",
      rating: 4.81,
    },
    {
      name: "Microfono sound blaster",
      img: "/prod4.jpg",
      rating: 4.79,
    },
  ];
  return (
    <div className="h-full w-full overflow-auto">
      <h2 className="text-lg text-center font-bold">
        Productos mejor valorados
      </h2>
      <ul className=" p-3 overflow-auto  grid grid-cols-1 divide-y ">
        {productos.map((prod, key) => (
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

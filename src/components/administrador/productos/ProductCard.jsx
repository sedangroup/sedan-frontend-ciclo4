import StarRating from "../home/StarRating";

function ProductCard(props) {
  return (
    <li className="flex gap-2 items-center justify-center p-1 w-full h-20 bg-slate-50 hover:bg-slate-200">
      <img
        src={props.imagen}
        className="w-16 h-full object-contain rounded-full hover:scale-105"
      />
      <p className="text-md font-semibold truncate w-60">{props.nombre}</p>
      <p className="text-2xl font-bold">{`$${props.precio.toLocaleString()}`}</p>
      <div className="font-bold text-md flex items-center justify-end float-right ml-2">
        <StarRating />
        {props.rating}
      </div>
    </li>
  );
}

export default ProductCard;

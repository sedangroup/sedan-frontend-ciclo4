function Home() {
  let libros = [
    {
      id: "130013da",
      nombre: "leche",
      edicion: "02/04/2020",
      autor: 'joao',
    },
    {
      id: "130013da",
      nombre: "amazon",
      edicion: "02/04/2020",
      autor: 123123,
    },
    {
      id: "130013da",
      nombre: "asdd",
      edicion: "02/04/2020",
      autor: 123123,
    },
  ];

  let autor = {
    id: 13123,
    nombre: "gabo",
  };

  return (
    <div>
      <h1>libros</h1>
      {libros.map((libro) => (
        <>
          <p>{libro.autor}</p>
          <p>{libro.nombre}</p>
        </>
      ))}
    </div>
  );
}

export default Home;

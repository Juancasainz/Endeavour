import React, { useState, useEffect } from "react";

// const Listdata = ({datos , eliminar}) => {
const Step2 = ({
  datos,
  setLista,
  lista,
  potmax,
  setPotmax,
  potmed,
  setPotmed,
}) => {
  const [opcion, setOpcionState] = useState("");

  useEffect(() => {
    console.log("ueffec", lista);
    total();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lista]);

  const addrow = (e) => {
    const lista2 = lista.concat([
      {
        id: e.target.value,
        one: 1,
        two: JSON.parse(e.target.value),
      },
    ]);
    setLista(lista2);
  };

  const deleteRow = (id) => {
    //newList.filter((item) => item.two.Electrodomestico !== id)
    const lista2 = lista.filter((item) => item.two.Electrodomestico != id);
    setLista(lista2);
  };

  const handlerCant = (e, index) => {
    const list2 = [...lista];
    list2[index].one = e.target.value;
    setLista(list2);
  };

  function total() {
    if (lista.length === 0) {
      setPotmax(0);
      setPotmed(0);
    }
    let potmed2 = 0;
    let potmax2 = 0;
    lista.map((input) => {
      setPotmax(
        potmax2 + parseInt(input.one * input.two.Potencia * input.two.Arranque)
      );
      potmax2 =
        potmax2 + parseInt(input.one * input.two.Potencia * input.two.Arranque);
      setPotmed(
        potmed2 +
          parseFloat(
            parseFloat(
              input.one * input.two.Potencia * input.two.Porcentaje
            ).toFixed(2)
          )
      );
      potmed2 =
        potmed2 +
        parseFloat(
          parseFloat(
            input.one * input.two.Potencia * input.two.Porcentaje
          ).toFixed(2)
        );
    });

    //   if (potmax <= 3000 && this.potmed <= 600 && potmax > 0) {
    //     index = this.combo[2];
    //   } else if (
    //     potmax > 3001 &&
    //     potmax <= 6000 &&
    //     potmed > 601 &&
    //     potmed <= 1200
    //   ) {
    //     index = combo[3];
    //   } else if (potmax == 0) {
    //     index = combo.filter((el) => el.Producto == "0")[0]
    //     console.log(index)
    //   } else {
    //     index = combo[4];
    //   }
  }

  return (
    <div className="list">
      {potmed}:{potmax}:{JSON.stringify(lista)}
      <select value={opcion} onChange={(e) => addrow(e)}>
        <option disabled value="">
          Seleciona
        </option>
        {datos.map((dato) => (
          <option key={dato.Electrodomestico} value={JSON.stringify(dato)}>
            {dato.Electrodomestico}
          </option>
        ))}
      </select>
      <div id="lista">
        {lista.map((item, index) => (
          <div key={item.two.Electrodomestico}>
            <input
              type="number"
              id={item.two.Electrodomestico}
              min="1"
              value={lista[index].one}
              onChange={(e) => handlerCant(e, index)}
            />
            <span> {item.two.Electrodomestico}</span>
            <span> {item.Consumo}</span>
            <button onClick={() => deleteRow(item.two.Electrodomestico, index)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step2;

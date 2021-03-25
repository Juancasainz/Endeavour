import { useState } from "react";

// const Listdata = ({datos , eliminar}) => {
    const Step2 = ({datos,setLista,lista,potmax,setPotmax,potmed,setPotmed}) => {
        const [opcion,setOpcion]=useState('');

    //     const borrarBlog = (id) => {
    //         const newBlogs = items.filter((blog) => blog.id !== id)
    //         setBlogs(newBlogs);
    //    }

       const addrow=(e)=>{
        const lista2 = lista
        lista2.push({
            id: e.target.value,
            one: 1,
            two: JSON.parse(e.target.value)
         })
        setLista(lista2)
        total()
       }

       const deleteRow = (id)=>{          
            //newList.filter((item) => item.two.Electrodomestico !== id)
            const lista2 = lista.filter((item) => item.two.Electrodomestico != id)
            setLista(lista2)
            total2(lista2)
       }

       const handlerCant = (e,index)=>{
        const lista2 = lista
        lista2[index].one = e.target.value

        setLista(lista2)
      // const newLista = lista.filter((item)) 
        total()
   }

function total2(lista2){
    console.log(lista2.length);

    if(lista2.length === 0){
        setPotmax(0)
        setPotmed(0)
    }
            let potmed2 = 0
            let potmax2 = 0
            lista2.map((input) => {    
                setPotmax(potmax2 + parseInt(input.one * input.two.Potencia * input.two.Arranque))
                potmax2= potmax2 + parseInt(input.one * input.two.Potencia * input.two.Arranque)
                setPotmed(potmed2 + parseFloat(parseFloat(input.one * input.two.Potencia * input.two.Porcentaje).toFixed(2))) 
                potmed2 = potmed2 + parseFloat(parseFloat(input.one * input.two.Potencia * input.two.Porcentaje).toFixed(2))
            });
}

        function total(){
            if(lista.length === 0){
                setPotmax(0)
                setPotmed(0)
            }
        
            let potmed2 = 0
            let potmax2 = 0
            lista.map((input) => {    
                setPotmax(potmax2 + parseInt(input.one * input.two.Potencia * input.two.Arranque))
                potmax2= potmax2 + parseInt(input.one * input.two.Potencia * input.two.Arranque)
                setPotmed(potmed2 + parseFloat(parseFloat(input.one * input.two.Potencia * input.two.Porcentaje).toFixed(2))) 
                potmed2 = potmed2 + parseFloat(parseFloat(input.one * input.two.Potencia * input.two.Porcentaje).toFixed(2))
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
                <select value={opcion} onChange={(e)=>addrow(e)}>
                    <option disabled value="">Seleciona</option>
                    {datos.map((dato)=>(
                        <option value={JSON.stringify(dato)} key={dato.Electrodomestico}>{dato.Electrodomestico}</option>
                    ))}
                </select>
                {lista.map((item,index)=>(
                    <div >
                        <input type="number" id={item.two.Electrodomestico} min="1" value={item.one}  onChange={(e)=>handlerCant(e,index)}/>
                        <span > {item.two.Electrodomestico}</span>
                        <span> {item.Consumo}</span>
                    <button onClick={()=>deleteRow(item.two.Electrodomestico,index)}>X</button>
                    </div>
                ))}
            </div>
            
        );
}
 
export default Step2;
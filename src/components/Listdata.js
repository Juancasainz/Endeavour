import { useState } from "react";

// const Listdata = ({datos , eliminar}) => {
    const Listdata = ({datos}) => {
        const [opcion,setOpcion]=useState('');
        const [lista, setLista] = useState([]);
        const [cant, setCant] = useState(1);

    //     const borrarBlog = (id) => {
    //         const newBlogs = items.filter((blog) => blog.id !== id)
    //         setBlogs(newBlogs);
    //    }

       const addrow=(e)=>{
           setLista(lista.concat({
               one: 1,
               two: JSON.parse(e.target.value)
            }))
       }

       const deleteRow = (id)=>{
            const newList = lista.filter((item) => item.two.Electrodomestico !== id)
            setLista(newList);
       }

       const handlerCant = ()=>{
        console.log('object');
   }

        return ( 
            <div className="list">
                <select value={opcion} onChange={addrow}>
                    <option disabled value="">Seleciona</option>
                    {datos.map((dato)=>(
                        <option value={JSON.stringify(dato)} key={dato.Electrodomestico}>{dato.Electrodomestico}</option>
                    ))}
                </select>
                {lista.map((item,index)=>(
                    <div>
                        <input type="number" value={item.one} onChange={(e)=>handlerCant(e)}/>
                        <span key={item.two.Electrodomestico}> {item.two.Electrodomestico}</span>
                        <span> {item.Consumo}</span>
                    <button onClick={()=>deleteRow(item.two.Electrodomestico)}>X</button>
                    </div>
                ))}
            </div>
            
        );
}
 
export default Listdata;
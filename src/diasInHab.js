export default function DiasInhabiles(props){    
    let listaDias = document.getElementById("listaDias")
    const fechas  = props.fecha
    const listaFechas = fechas.map((f)=>
        <li key={f.fecha.toString()}>{f.fecha} ({f.feriado})</li>
    );
    return(
        <lu>{listaFechas}</lu>          
    )
}

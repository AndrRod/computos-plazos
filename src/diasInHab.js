export default function DiasInhabiles(props){    
    let listaDias = document.getElementById("listaDias")
    const fechas  = props.fecha
    const listaFechas = fechas.map((f)=>
        <li key={f.fecha.toString()} class="list-group-item">{f.fecha} ({f.feriado})</li>
    );
    return(
        <lu class="list-group list-group-flush">{listaFechas}</lu>          
    )
}

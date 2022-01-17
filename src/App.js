import React, {useState} from 'react'
// import html2canvas from "html2canvas"
// import logo from './logo.svg';
// import './App.css';
import moment from 'moment'
import diasInhabilesJson from './diasInhabilesJson.json'

function App() {



  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');

 
  
  const onChangeLinea1 = function(evento){    
      setLinea1(evento.target.value);
    }
  const onChangeLinea2 = function(evento){          
      toString(setLinea2(evento.target.value));      
    };
  
  
  const compPlazosDiasCorridos = (fechaInicial, diasAComputar) =>{
        
        let fecha = moment(fechaInicial, "DD/MM/YYYY");
        for (let i = 1; i <= diasAComputar; i++) { 
        fecha.add(1, 'days').format('DD/MM/YYYY');
        }
        let parrafo = document.getElementById("resultado")
        // let parrafo = document.createElement("p")
        // parrafo.insertAdjacentText)
        return parrafo.replaceChildren(`fecha inicial ${fechaInicial} más ${diasAComputar} días corridos = vencimiento del plazo: ` + fecha.format('DD/MM/YYYY'));
        // document.write(`fecha inicial ${fechaInicial} más ${diasAComputar} días corridos =`, fecha.format('DD/MM/YYYY'));
    }



  const [fechaHabil, setFechaHabil] = useState('');
  const [cantDiasHab, setDiasHab] = useState('');
  const onChangeFechaHabil = function(evento){    
    setFechaHabil(evento.target.value);
  }
  const onChangeDiaHabil = function(evento){          
    toString(setDiasHab(evento.target.value));      
  };


  let DIAS_INHABILES = [moment("14/1/2021", "DD/MM/YYYY"),
  moment("17/1/2022", "DD/MM/YYYY")]

  let DIAS_INHABILES1 = diasInhabilesJson;
  // [{"fecha": moment("14/1/2021", "DD/MM/YYYY")},
  // {"fecha": moment("17/1/2022", "DD/MM/YYYY")}]

  const lu1 = document.createElement("lu");  

  const diasInhabiles = (diasInhab) =>{   
          // console.log(diasInhab.format("DD/MM/YYYY"))          
          let li = document.createElement("li");          
          li.insertAdjacentHTML("afterbegin", diasInhab.format("DD/MM/YYYY"));
          console.log(li);
          // lu1.appendChild(li);            
          lu1.appendChild(li);            
          document.body.appendChild(lu1)        
        }
        
        
        
        const compPlazosDiasHabiles = (fechaInicial, diasAComputar) =>{
        let dias = diasAComputar;
        let fecha = moment(fechaInicial, "DD/MM/YYYY");
        for (let i = 1; i <= diasAComputar; i++) {        
            if(fecha.isoWeekday() === 6 || fecha.isoWeekday() === 7) {
                diasAComputar++;
            }
            fecha.add(1, 'days').format('DD/MM/YYYY');
            DIAS_INHABILES.forEach((n)=>{if((n).format('DD/MM/YYYY')===fecha.format('DD/MM/YYYY')) diasAComputar++});
        }
        let parrafo = document.getElementById("resultado1")       
        return parrafo.replaceChildren(`fecha inicial ${fechaInicial} más ${diasAComputar} días corridos o ${dias} habiles = `, fecha.format('DD/MM/YYYY'));
    }


  return (
      
    <div className="App">
      <br/><br/>      
      
      <h1>Computo dias Corridos</h1>
      <br/>
      <p className="parrafo">Escribe la fecha y cantidad de dias para computar:</p>
      <input onChange={onChangeLinea1} type="text" placeholder="inserte fecha"/><br/>
      <input onChange={onChangeLinea2} type="text" placeholder="inserte días" /><br/>
      <br/>      
      
      <button className="boton" onClick={()=> compPlazosDiasCorridos(linea1, linea2)}>computar plazo</button> 
      
      <p id="resultado"></p>

      <br/><br/>      
      
      <h1>Computo dias HABILES</h1>
      <br/>
      <p className="parrafo">Escribe la fecha y cantidad de dias para computar:</p>
      <input onChange={onChangeFechaHabil} type="text" placeholder="inserte fecha"/><br/>
      <input onChange={onChangeDiaHabil} type="text" placeholder="inserte días" /><br/>
      <br/>      
      
      <button className="boton" onClick={()=> compPlazosDiasHabiles(fechaHabil, cantDiasHab)}>computar plazo</button> 
      
      <p id="resultado1"></p>   

            
      {/* <ul id="diaInhab">{diasInhabiles(DIAS_INHABILES1)}</ul> */}
      {/* {diasInhabiles(DIAS_INHABILES)} */}
      {DIAS_INHABILES1.map((dias)=>{diasInhabiles(toString(dias.fecha))})}

    </div>
  );
}

export default App;
 




// let diasInhabiles1 = [moment("14/1/2021", "DD/MM/YYYY")];
    
//     const compPlazosDiasHabiles = (fechaInicial, diasAComputar) =>{
//         const dias = diasAComputar;
//         let fecha = moment(fechaInicial, "DD/MM/YYYY");
//         for (let i = 1; i <= diasAComputar; i++) {        
//             if(fecha.isoWeekday() === 6 || fecha.isoWeekday() === 7) {
//                 diasAComputar++;
//             }
//             fecha.add(1, 'days').format('DD/MM/YYYY');
//             diasInhabiles1.forEach(function(n){if(n.format('DD/MM/YYYY')===fecha.format('DD/MM/YYYY')) diasAComputar++});
//         }
//         console.log(`fecha inicial ${fechaInicial} más ${diasAComputar} días corridos o ${dias} habiles =`, fecha.format('DD/MM/YYYY'));
//     }


//     const compPlazosDiasCorridos = (fechaInicial, diasAComputar) =>{
        
//         let fecha = moment(fechaInicial, "DD/MM/YYYY");
//         for (let i = 1; i <= diasAComputar; i++) { 
//         fecha.add(1, 'days').format('DD/MM/YYYY');
//         }
//         console.log(`fecha inicial ${fechaInicial} más ${diasAComputar} días corridos =`, fecha.format('DD/MM/YYYY'));
//     }

    
//     compPlazosDiasHabiles("6/1/2022", 6);
//     compPlazosDiasCorridos("6/1/2022", 6);    

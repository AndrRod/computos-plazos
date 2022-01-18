import React, {useState} from 'react'
import moment from 'moment'
import diasInhabilesJson from './diasInhabilesJson.json'
import DiasInhabiles from './diasInHab';
import LogicaComputos from './logicaCompu'
function App() {
  // let DIAS_INHABILES = [moment("14/1/2021", "DD/MM/YYYY"),
  // moment("17/1/2022", "DD/MM/YYYY")]

  let diasInHJson = diasInhabilesJson;

  return(
    <LogicaComputos>
      <h4>Dias inhábiles:</h4>
      <h6>Son días inhábiles los días Sábados y Domingos, y ademas los siguientes días: </h6>
      <div className="elementoOculto">
        <DiasInhabiles fecha={diasInHJson}> 
            </DiasInhabiles>
             {/* document.getElementById("listaDias") */}
      </div>        
    </LogicaComputos>
    );
}
export default App;

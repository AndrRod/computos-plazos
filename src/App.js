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
        <DiasInhabiles fecha={diasInHJson}> 
            </DiasInhabiles>
             {/* document.getElementById("listaDias") */}         
    </LogicaComputos>
    );
}
export default App;

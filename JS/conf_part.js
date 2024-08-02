const radar = document.getElementById('Radar')

const radarContainer = document.getElementById('instru')

document.getElementById("numInstru").hidden = true;
document.getElementById("numInstru2").hidden = true;

var radarCounter = 0
var shootCounter = 0
var avanzarCounter = 0

var instruccion = 0

let instrucciones = []

function agregarRadar() {

  const radarDataContainer = document.createElement('div')

  radarDataContainer.className = 'actionIntruction'
  radarDataContainer.id = `c${instruccion}`

  const radarData = document.createElement('img')

  var sele = document.getElementById("Radar").value

  if(sele == "Radar al norte"){
    radarData.src= ("./IMAGES/rnorte.jpg")
    instrucciones.push('R-N')
  }else{
    if(sele == "Radar al sur"){
      radarData.src= ("./IMAGES/rsur.jpg")
      instrucciones.push('R-S')
    }else{
      if(sele == "Radar al este"){
        radarData.src= ("./IMAGES/reste.jpg")
        instrucciones.push('R-E')
      }else{
        if(sele == "Radar al oeste"){
          radarData.src= ("./IMAGES/roeste.jpg")
          instrucciones.push('R-O')
        }else{
          if(sele == "Radar"){
            radarData.src= ("./IMAGES/roeste.jpg")
            instrucciones.push('R')
          }else{
            radarData.src= ("./IMAGES/vida.png")
            instrucciones.push('S')
          }
        }
      }
    }
  }
  

  // Creando elemento para datos de radar
  radarDataContainer.appendChild(radarData)

  //Añadiendo datos de radar con botón
  radarContainer.appendChild(radarDataContainer)
  radarCounter += 1
  instruccion += 1 
  llenarComboNumInstru();
}

function deleteComponente() {
  try{
    var id = instruccion-1;
    var radarToDelete = document.getElementById('c'+id.toString());
    var select = document.getElementById("numInstru");
    var select2 = document.getElementById("numInstru2");
    radarToDelete.remove();
    instruccion--;
    instrucciones.pop();
    select.remove(instruccion);
    select2.remove(instruccion);
  }catch{
    console.log("No hay que borrar")
  }
}

// Acción Disparar

const armaSelector = document.getElementById('ADisp')
const directionSelctor = document.getElementById('Direc')
const cantidadSelector = document.getElementById('Cant')

const dispararContainer = document.getElementById('instru')


function agregarDisparo() {
  const DataContainer = document.createElement('div')

  DataContainer.className = 'actionIntruction'
  DataContainer.id = `c${instruccion}`

  const shootData = document.createElement('img')

  var sele = document.getElementById("ADisp").value
  var sele2 = document.getElementById("Direc").value
  var sele3 = document.getElementById("Cant").value

  switch(sele){
    case "Disparar torreta":
      if(sele2 == "Norte"){
        shootData.src= ("./IMAGES/tnorte.jpg")
        instrucciones.push('DT-N')
      }else{
        if(sele2 == "Sur"){
          shootData.src= ("./IMAGES/tsur.jpg")
          instrucciones.push('DT-S')
        }else{
          if(sele2 == "Este"){
            shootData.src= ("./IMAGES/teste.jpg")
            instrucciones.push('DT-E')
          }else{
            if(sele2 == "Oeste"){
              shootData.src= ("./IMAGES/toeste.jpg")
              instrucciones.push('DT-O')
            }
          }
        }
      }
    break;
    case "Disparar cañón":
      if(sele2 == "Norte"){
        shootData.src= ("./IMAGES/cnorte.jpg")
        instrucciones.push('DC-N-'+sele3)
      }else{
        if(sele2 == "Sur"){
          shootData.src= ("./IMAGES/csur.jpg")
          instrucciones.push('DC-S-'+sele3)
        }else{
          if(sele2 == "Este"){
            shootData.src= ("./IMAGES/ceste.jpg")
            instrucciones.push('DC-E-'+sele3)
          }else{
            if(sele2 == "Oeste"){
              shootData.src= ("./IMAGES/coeste.jpg")
              instrucciones.push('DC-O-'+sele3)
            }
          }
        }
      }
    break;
    default:
      shootData.src= ("./IMAGES/mina.png")
      instrucciones.push('M')
    break;
  }
  
  // Creando elemento para datos de radar
  DataContainer.appendChild(shootData)

  //Añadiendo datos de radar con botón
  dispararContainer.appendChild(DataContainer)
  shootCounter += 1
  instruccion += 1
  llenarComboNumInstru();
}

// Acción Avanzar 

const avanzar = document.getElementById('AvanzarAction')

const avanzarContainer = document.getElementById('instru')

function agregarAvanzar() {

  const DataContainer = document.createElement('div')

  DataContainer.className = 'actionIntruction'
  DataContainer.id = `c${instruccion}`

  const avanzarData = document.createElement('img')

  var sele = document.getElementById("AvanzarAction").value

  if(sele == "Norte"){
    avanzarData.src= ("./IMAGES/norte.jpg")
    instrucciones.push('A-N')
  }else{
    if(sele == "Sur"){
      avanzarData.src= ("./IMAGES/sur.jpg")
      instrucciones.push('A-S')
    }else{
      if(sele == "Este"){
        avanzarData.src= ("./IMAGES/este.jpg")
        instrucciones.push('A-E')
      }else{
        if(sele == "Oeste"){
          avanzarData.src= ("./IMAGES/oeste.jpg")
          instrucciones.push('A-O')
        }
      }
    }
  }
  
  // Creando elemento para datos de radar
  DataContainer.appendChild(avanzarData)

  //Añadiendo datos de radar con botón
  avanzarContainer.appendChild(DataContainer)
  avanzarCounter += 1
  instruccion += 1
  llenarComboNumInstru();
}

//ESTRUCTURAS DE CONTROL
const control = document.getElementById('ControlAction')

const controlContainer = document.getElementById('instru')

function agregarControl() {

  const DataContainer = document.createElement('div')

  DataContainer.className = 'actionIntruction2'
  DataContainer.id = `c${instruccion}`

  const controlData = document.createElement('img')

  var sele = document.getElementById("Estructura").value
  var salC = document.getElementById("numInstru").value

  var condicion = document.getElementById("OpcCondi").value 
  var r = document.getElementById("rDirec2").value
  var op = document.getElementById("Operadores").value
  var va = document.getElementById("Valor").value
  var instru = document.getElementById("InstruCondi").value
  var dir = document.getElementById("Direc3").value
  var can = document.getElementById("Cant2").value
  var instru2 = document.getElementById("numInstru2").value

  if(sele == "Salto"){
    controlData.src= ("./IMAGES/SALTO.PNG")
    instrucciones.push('JMP-'+salC)
  }else{
    controlData.src= ("./IMAGES/sin.PNG")
    switch(condicion){
      case "Radar":
        switch(r){
          case "Valor":
            switch(op){
              case "Menor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|<|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|<|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R|<|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|<|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|<|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|<|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R|<|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|<|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|<|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|<|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R|<|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|<|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|<|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|<|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|<|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R|<|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|<|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Mayor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|>|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|>|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R|>|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|>|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|>|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|>|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R|>|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|>|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|>|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|>|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R|>|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|>|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|>|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|>|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|>|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R|>|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|>|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MenorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MayorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Igual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|==|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|==|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R|==|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|==|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|==|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|==|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R|==|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|==|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|==|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|==|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R|==|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|==|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|==|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|==|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|==|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R|==|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|==|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Diferente":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|!=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|!=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R|!=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|!=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|!=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|!=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R|!=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|!=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R|!=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R|!=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R|!=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R|!=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    instrucciones.push('IF-R|!=|'+va+"-JMP?"+instru2)
                  break;
                  case "DejaMina":
                    instrucciones.push('IF-R|!=|'+va+"-M")
                  break;
                }
              break;
            }
          break;
          case "Norte":
            switch(op){
              case "Menor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|<|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|<|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|<|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|<|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|<|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|<|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|<|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|<|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|<|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|<|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|<|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|<|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|<|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|<|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|<|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|<|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|<|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Mayor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|>|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|>|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|>|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|>|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|>|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|>|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|>|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|>|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|>|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|>|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|>|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|>|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|>|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|>|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|>|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|>|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|>|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MenorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MayorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Igual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|==|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|==|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|==|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|==|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|==|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|==|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|==|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|==|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|==|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|==|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|==|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|==|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|==|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|==|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|==|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|==|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|==|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Diferente":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|!=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|!=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|!=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|!=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|!=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|!=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|!=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|!=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?N|!=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?N|!=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?N|!=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?N|!=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    instrucciones.push('IF-R?N|!=|'+va+"-JMP?"+instru2)
                  break;
                  case "DejaMina":
                    instrucciones.push('IF-R?N|!=|'+va+"-M")
                  break;
                }
              break;
            }
          break;
          case "Sur":
            switch(op){
              case "Menor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|<|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|<|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|<|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|<|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|<|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|<|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|<|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|<|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|<|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|<|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|<|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|<|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|<|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|<|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|<|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|<|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|<|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Mayor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|>|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|>|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|>|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|>|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|>|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|>|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|>|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|>|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|>|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|>|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|>|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|>|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|>|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|>|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|>|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|>|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|>|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MenorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MayorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Igual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|==|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|==|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|==|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|==|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|==|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|==|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|==|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|==|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|==|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|==|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|==|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|==|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|==|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|==|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|==|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|==|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|==|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Diferente":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|!=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|!=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|!=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|!=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|!=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|!=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|!=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|!=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?S|!=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?S|!=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?S|!=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?S|!=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    instrucciones.push('IF-R?S|!=|'+va+"-JMP?"+instru2)
                  break;
                  case "DejaMina":
                    instrucciones.push('IF-R?S|!=|'+va+"-M")
                  break;
                }
              break;
            }
          break;
          case "Este":
            switch(op){
              case "Menor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|<|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|<|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|<|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|<|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|<|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|<|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|<|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|<|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|<|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|<|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|<|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|<|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|<|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|<|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|<|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|<|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|<|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Mayor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|>|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|>|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|>|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|>|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|>|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|>|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|>|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|>|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|>|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|>|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|>|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|>|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|>|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|>|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|>|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|>|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|>|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MenorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MayorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Igual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|==|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|==|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|==|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|==|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|==|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|==|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|==|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|==|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|==|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|==|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|==|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|==|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|==|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|==|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|==|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|==|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|==|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Diferente":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|!=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|!=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|!=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|!=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|!=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|!=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|!=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|!=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?E|!=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?E|!=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?E|!=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?E|!=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    instrucciones.push('IF-R?E|!=|'+va+"-JMP?"+instru2)
                  break;
                  case "DejaMina":
                    instrucciones.push('IF-R?E|!=|'+va+"-M")
                  break;
                }
              break;
            }
          break;
          case "Oeste":
            switch(op){
              case "Menor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|<|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|<|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|<|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|<|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|<|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|<|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|<|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|<|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|<|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|<|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|<|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|<|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|<|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|<|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|<|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|<|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|<|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Mayor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|>|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|>|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|>|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|>|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|>|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|>|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|>|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|>|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|>|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|>|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|>|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|>|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|>|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|>|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|>|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|>|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|>|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MenorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MayorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Igual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|==|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|==|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|==|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|==|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|==|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|==|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|==|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|==|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|==|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|==|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|==|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|==|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|==|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|==|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|==|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|==|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|==|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Diferente":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|!=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|!=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|!=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|!=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|!=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|!=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|!=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|!=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-R?O|!=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-R?O|!=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-R?O|!=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-R?O|!=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    instrucciones.push('IF-R?O|!=|'+va+"-JMP?"+instru2)
                  break;
                  case "DejaMina":
                    instrucciones.push('IF-R?O|!=|'+va+"-M")
                  break;
                }
              break;
            }
          break;
        }
      break;
      case "Salud":
        switch(r){
          case "Valor":
            switch(op){
              case "Menor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Mayor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MenorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MayorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Igual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Diferente":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|!=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|!=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|!=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|!=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|!=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|!=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|!=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|!=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|!=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|!=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|!=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|!=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    instrucciones.push('IF-S|!=|'+va+"-JMP?"+instru2)
                  break;
                  case "DejaMina":
                    instrucciones.push('IF-S|!=|'+va+"-M")
                  break;
                }
              break;
            }
          break;
          case "Norte":
            switch(op){
              case "Menor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Mayor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MenorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MayorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Igual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Diferente":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|!=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|!=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|!=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|!=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|!=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|!=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|!=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|!=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|!=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|!=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|!=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|!=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    instrucciones.push('IF-S|!=|'+va+"-JMP?"+instru2)
                  break;
                  case "DejaMina":
                    instrucciones.push('IF-S|!=|'+va+"-M")
                  break;
                }
              break;
            }
          break;
          case "Sur":
            switch(op){
              case "Menor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Mayor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MenorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MayorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Igual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Diferente":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|!=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|!=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|!=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|!=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|!=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|!=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|!=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|!=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|!=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|!=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|!=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|!=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    instrucciones.push('IF-S|!=|'+va+"-JMP?"+instru2)
                  break;
                  case "DejaMina":
                    instrucciones.push('IF-S|!=|'+va+"-M")
                  break;
                }
              break;
            }
          break;
          case "Este":
            switch(op){
              case "Menor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Mayor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MenorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MayorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Igual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Diferente":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|!=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|!=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|!=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|!=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|!=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|!=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|!=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|!=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|!=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|!=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|!=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|!=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    instrucciones.push('IF-S|!=|'+va+"-JMP?"+instru2)
                  break;
                  case "DejaMina":
                    instrucciones.push('IF-S|!=|'+va+"-M")
                  break;
                }
              break;
            }
          break;
          case "Oeste":
            switch(op){
              case "Menor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Mayor":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|>|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MenorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "MayorIgual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|<=|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Igual":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-JMP?"+instru2)
                      break;
                    }
                  break;
                  case "DejaMina":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|==|'+va+"-M")
                      break;
                    }
                  break;
                }
              break;
              case "Diferente":
                switch(instru){
                  case "Avanzar":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|!=|'+va+"-A?N")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|!=|'+va+"-A?S")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|!=|'+va+"-A?E")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|!=|'+va+"-A?O")
                      break;
                    }
                  break;
                  case "DispararCanon":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|!=|'+va+"-DC?N?"+can)
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|!=|'+va+"-DC?S?"+can)
                      break;
                      case "Este":
                        instrucciones.push('IF-S|!=|'+va+"-DC?E?"+can)
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|!=|'+va+"-DC?O?"+can)
                      break;
                    }
                  break;
                  case "DispararTorreta":
                    switch(dir){
                      case "Norte":
                        instrucciones.push('IF-S|!=|'+va+"-DT?N?")
                      break;
                      case "Sur":
                        instrucciones.push('IF-S|!=|'+va+"-DT?S?")
                      break;
                      case "Este":
                        instrucciones.push('IF-S|!=|'+va+"-DT?E?")
                      break;
                      case "Oeste":
                        instrucciones.push('IF-S|!=|'+va+"-DT?O?")
                      break;
                    }
                  break;
                  case "Saltar":
                    instrucciones.push('IF-S|!=|'+va+"-JMP?"+instru2)
                  break;
                  case "DejaMina":
                    instrucciones.push('IF-S|!=|'+va+"-M")
                  break;
                }
              break;
            }
          break;
        }
      break;
    }
    console.log(instrucciones);
  }
  
  // Creando elemento para datos de radar
  DataContainer.appendChild(controlData)

  //Añadiendo datos de radar con botón
  controlContainer.appendChild(DataContainer)
  //controlCounter += 1
  instruccion += 1
  llenarComboNumInstru();
}

function llenarComboNumInstru(){
  var combo = document.getElementById('numInstru');
  for (i = 0; i < instruccion; i++){
    combo.options[i] = new Option(i,i);
  }
  var combo = document.getElementById('numInstru2');
  for (i = 0; i < instruccion; i++){
    combo.options[i] = new Option(i,i);
  }
}

function tipoD() {
  var selectTipoP = document.getElementById("ADisp");
  switch (selectTipoP.value) {
      case "Disparar cañón":
          document.getElementById("Direc").hidden = false;
          document.getElementById("Cant").hidden = false;
          break;
      case "Disparar torreta":
          document.getElementById("Direc").hidden = false;
          document.getElementById("Cant").hidden = true;
          break;
      default:
          document.getElementById("Direc").hidden = true;
          document.getElementById("Cant").hidden = true;
          break;
  }
}

function tipoPartida() {
  var selectTipoP = document.getElementById("tipoPartida");
  switch (selectTipoP.value) {
      case "tiempo":
          document.getElementById("tiempoJuego").hidden = false;
          document.getElementById("rondasJuego").hidden = true;
          break;
      case "rondas":
          document.getElementById("tiempoJuego").hidden = true;
          document.getElementById("rondasJuego").hidden = false;
          break;
      default:
          document.getElementById("tiempoJuego").hidden = true;
          document.getElementById("rondasJuego").hidden = true;
          break;
  }
}

function tipoEstructura() {
  var selectTipoP = document.getElementById("tipoPartida");
  switch (selectTipoP.value) {
      case "tiempo":
          document.getElementById("tiempoJuego").hidden = false;
          document.getElementById("rondasJuego").hidden = true;
          break;
      case "rondas":
          document.getElementById("tiempoJuego").hidden = true;
          document.getElementById("rondasJuego").hidden = false;
          break;
      default:
          document.getElementById("tiempoJuego").hidden = true;
          document.getElementById("rondasJuego").hidden = true;
          break;
  }
}

function EstructuraDeControl() {
  var selectTipoP = document.getElementById("Estructura");
  switch (selectTipoP.value) {
      case "Condicion":
          document.getElementById("numInstru").hidden = true;
          document.getElementById("Cant2").hidden = true;
          document.getElementById("rDirec2").hidden = false;
          document.getElementById("Operadores").hidden = false;
          document.getElementById("Valor").hidden = false;
          document.getElementById("InstruCondi").hidden = false;
          document.getElementById("OpcCondi").hidden = false;
          document.getElementById("Direc3").hidden = false;
          break;
      case "Salto":
          document.getElementById("numInstru").hidden = false;
          document.getElementById("numInstru2").hidden = true;
          document.getElementById("rDirec2").hidden = true;
          document.getElementById("Operadores").hidden = true;
          document.getElementById("Valor").hidden = true;
          document.getElementById("InstruCondi").hidden = true;
          document.getElementById("OpcCondi").hidden = true;
          document.getElementById("Cant2").hidden = true;
          document.getElementById("Direc3").hidden = true;
          break;
      default:
          document.getElementById("numInstru").hidden = true;
          document.getElementById("rDirec2").hidden = true;
          document.getElementById("Operadores").hidden = true;
          document.getElementById("Valor").hidden = true;
          document.getElementById("InstruCondi").hidden = true;
          document.getElementById("OpcCondi").hidden = true;
          document.getElementById("Cant2").hidden = true;
          document.getElementById("Direc3").hidden = true;
          break;
  }
}

function instrC(){
  var selectTipoP = document.getElementById("InstruCondi");
  switch (selectTipoP.value) {
      case "Avanzar":
          document.getElementById("Cant2").hidden = true;
          document.getElementById("numInstru2").hidden = true;
          document.getElementById("Direc3").hidden = false;
          break;
      case "DispararCanon":
          document.getElementById("Cant2").hidden = false;
          document.getElementById("numInstru2").hidden = true;
          document.getElementById("Direc3").hidden = false;
          break;
      case "DispararTorreta":
          document.getElementById("Cant2").hidden = true;
          document.getElementById("numInstru2").hidden = true;
          document.getElementById("Direc3").hidden = false;
        break;
      case "DejaMina":
            document.getElementById("Cant2").hidden = true;
            document.getElementById("numInstru2").hidden = true;
            document.getElementById("Direc3").hidden = true;
        break;
      case "Saltar":
          document.getElementById("Cant2").hidden = true;
          document.getElementById("numInstru2").hidden = false;
          document.getElementById("Direc3").hidden = true;
          break;
      default:
          document.getElementById("Cant2").hidden = true;
          document.getElementById("numInstru2").hidden = true;
          document.getElementById("Direc3").hidden = false;
          break;
  }
}

function radar2(){
  var selectTipoP = document.getElementById("OpcCondi");
  if(selectTipoP.value == "Radar"){
    document.getElementById("rDirec2").hidden = false;
  }else{
    document.getElementById("rDirec2").hidden = true;
  }
}


function listo(){
  if (localStorage.getItem("contGlobal") == null) {

    localStorage.setItem("contGlobal", 0);

  }
  var c = localStorage.getItem('contGlobal');
  guardaValores(c);
  localStorage.setItem('contGlobal',parseInt(c)+1);
  console.log(instrucciones);
}

function guardaValores(num) {

  var object = {'nombre': document.getElementById("txtListo").value, 'instrucciones': instrucciones};

  localStorage.setItem(num, JSON.stringify(object));

}
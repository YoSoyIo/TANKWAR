var canvas;
var context;
var FPS = 1;

const WIDTH = 700;
const HEIGTH = 700;

var anchoF = WIDTH / 10;
var altoF = HEIGTH / 10;

var muro = "#382406";
var tierra = "#3b4d1f";
var tierra2 = "#496919";
var misil = "#ff0000";
var disparoColor = "#ffffff";
var mina  = "#0000ff";
var radarColor = "#00FF00";

var numeroTanques;
var Tanques = [];
var ubicacionMinas = [];

var movimientos = 5000;
var k = 0;
var cont = 0;
var limJuga = 4;
var contGlobal = 0;

var MINAS = 2;
var MCANON = 10;
var MTORRET = 10;
var VIDA = 100;

var arr_Programas = ["Destructor","Disparador","Minero","Precavido","Julio"];

var escenario = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

arr_1 = ["IF-R?E|>|0-DC?E?R","IF-R?O|>|0-DC?O?R","IF-R?N|>|0-DC?N?R","IF-R?S|>|0-DC?S?R","IF-R?E|<|0-A?E","IF-R?O|<|0-A?O","IF-R?N|<|0-A?N","IF-R?S|<|0-A?S","IF-MC|>|0-JMP?0",
        "IF-R?E|>|0-DT?E","IF-R?O|>|0-DT?O","IF-R?N|>|0-DT?N","IF-R?S|>|0-DT?S","IF-MT|>|0-JMP?9","A-N","A-E","A-S","A-O","JMP-14"];

arr_2 = [];
function inicializa() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  
  // Inicializacion de tamques
  llenaCombos("cmb1");
  llenaCombos("cmb2");
  llenaCombos("cmb3");
  llenaCombos("cmb4");

  Tanques[0] = new Tanque('Tanque 1',4, 8, arr_2, "./IMAGES/tanque.png",VIDA, MCANON, MTORRET, MINAS, 0);
  Tanques[1] = new Tanque("Tanque 2",2, 2, arr_2, "./IMAGES/tanque2.png",VIDA, MCANON, MTORRET, MINAS, 0);
  Tanques[2] = new Tanque("Tanque 3",4, 2, arr_2, "./IMAGES/tanque3.png",VIDA, MCANON, MTORRET, MINAS, 0);
  Tanques[3] = new Tanque("Tanque 4",8, 2, arr_2, "./IMAGES/tanque4.png",VIDA, MCANON, MTORRET, MINAS, 0);
  
  for(i = 1; i<=4; i++){
    var salud = document.getElementById("Salud" + i.toString());
    salud.value = Tanques[i-1].getSalud();
    var radar = document.getElementById("radar"+ i.toString());
    radar.value = Tanques[i-1].getRadar();
    var minas = document.getElementById("minas"+i.toString());
    minas.value = Tanques[i-1].getM();
    var mC = document.getElementById("mCD"+i.toString());
    mC.value = Tanques[i-1].getMC();
    var mT = document.getElementById("mTD"+i.toString());
    mT.value = Tanques[i-1].getMT();
  }

  borraCanvas();
  dibujaEscenario();

  dibujaTanque(Tanques[0].getTanque());
  dibujaTanque(Tanques[1].getTanque());
  dibujaTanque(Tanques[2].getTanque());
  dibujaTanque(Tanques[3].getTanque());
}

function clic(){
  contGlobal++;
  if(verificaVivos()>1){
    principal(cont);
    cont++;
    if(cont == limJuga){
      cont = 0;
    }
  }else{
    alert("Partida terminada ganador "+ganador());
    return 0;
  }
  document.getElementById("txtJugador").value = cont;
  document.getElementById("txtRonda").value = contGlobal;
  return 1;
}

function automatico(){
  var window = setInterval(() => {
    if (i < Tanques.length) {
        if(clic()==0){
          clearInterval(window);
        }
        i++;    
    } else {
        i = 0;
    }
  }, 500);
}

function rapido(){
  while(verificaVivos()>1){
    clic();
  }
  alert("Partida terminada ganador "+ganador());
}

function ganador(){
  estado = 0;
  for(i = 0; i<Tanques.length; i+=1){
    if(Tanques[i].getVivo()==true){
      estado = i;
    }
  }
  return Tanques[estado].getNombre();
}

function verificaVivos(){
  estado = 0;
  for(i = 0; i<Tanques.length; i+=1){
    if(Tanques[i].getVivo()==true){
      estado +=1
    }
  }
  return estado;
}

function deshabilitar(deshabilita,h)
	{
		var variable = document.getElementById(deshabilita); 
 		variable.disabled = true;
    console.log(JSON.parse(localStorage.getItem(variable.value)));
    Tanques[h].instrucciones = JSON.parse(localStorage.getItem(variable.value)).instrucciones;
	}

function recuperaValores(id) {

  return JSON.parse(localStorage.getItem(id));

}

function llenaCombos(nomCombo){
  var limit = localStorage.getItem('contGlobal');
  var combo = document.getElementById(nomCombo);
  for (i = 0; i < limit; i++){
    var a = recuperaValores(i.toString());
    combo.options[i] = new Option(a.nombre,i);
  }
}

function habilitar(habilita)
	{
       	var variable = document.getElementById(habilita);
		    variable.disabled = false;
	}

function controlaTanquesIF(i,opc){
  caracterIf = opc.split("?");
  switch(caracterIf[0]){
    case "A":
      // LECTURA DEL TECLADO
      if (caracter[1] == "N") {
        var indice = compruebaColisionTanques(Tanques[i],i); 
        if(indice == -1){
          mueveTanques("N", i);
          contador = 0;
        }else{
          Tanques[i].damageColli();
          Tanques[indice].damageColli();
        }
      }
      if (caracter[1] == "S"){ 
        var indice = compruebaColisionTanques(Tanques[i],i); 
        if(indice == -1){
          mueveTanques("S", i);
          contador = 0;
        }else{
          Tanques[i].damageColli();
          Tanques[indice].damageColli();
        }
        }
      if (caracter[1] == "O"){ 
        var indice = compruebaColisionTanques(Tanques[i],i); 
        if(indice == -1){
          mueveTanques("O", i);
          contador = 0;
        }else{
          Tanques[i].damageColli();
          Tanques[indice].damageColli();
        }
      }
      if (caracter[1] == "E"){ 
        var indice = compruebaColisionTanques(Tanques[i],i); 
        if(indice == -1){
          mueveTanques("E", i);
          contador = 0;
        }else{
          Tanques[i].damageColli();
          Tanques[indice].damageColli();
        }
        }
    break;
    case "DC":
      console.log(caracterIf[2]);
      proyectil(Tanques[i],caracterIf[1],caracterIf[2]);
    break;
    case "DT":
      if (caracterIf[1] == "N") { 
        disparaTorreta("N", i);
        contador = 0;
      }
      if (caracterIf[1] == "S"){ 
          disparaTorreta("S", i);
          contador = 0;
        }
      if (caracterIf[1] == "O"){ 
          disparaTorreta("O", i);
          contador = 0;
          }
      if (caracterIf[1] == "E"){ 
          disparaTorreta("E", i);
          contador = 0;
        }
    break;
    case "M":
      DejarMina(Tanques[i]);
    break;
    case "R":
      if (caracterIf[1] == "N") { 
        usaRadar("N", i);
        var radar = document.getElementById("radar"+ (i+1).toString());
        radar.value = Tanques[i].getRadar();
        contador = 0;
      }
      if (caracterIf[1] == "S"){ 
        usaRadar("S", i);
        var radar = document.getElementById("radar"+ (i+1).toString());
        radar.value = Tanques[i].getRadar();
        contador = 0;
      }
      if (caracterIf[1] == "O"){ 
        usaRadar("O", i);
        var radar = document.getElementById("radar"+ (i+1).toString());
        radar.value = Tanques[i].getRadar();
        contador = 0;
      }
      if (caracterIf[1] == "E"){ 
        usaRadar("E", i);
        var radar = document.getElementById("radar"+ (i+1).toString());
        radar.value = Tanques[i].getRadar();
        contador = 0;
      }
    break;
    case "JMP":
      Tanques[i].setIterador(parseInt(caracterIf[1]));
    break;
  }
}

function controlaTanques(i,opc) {
  caracter = opc.split("-");
  switch(caracter[0]){
    case "A":
      // LECTURA DEL TECLADO
      if (caracter[1] == "N") {
        var indice = compruebaColisionTanques(Tanques[i],i); 
        if(indice == -1){
          mueveTanques("N", i);
          contador = 0;
        }else{
          Tanques[i].damageColli();
          Tanques[indice].damageColli();
        }
      }
      if (caracter[1] == "S"){ 
        var indice = compruebaColisionTanques(Tanques[i],i); 
        if(indice == -1){
          mueveTanques("S", i);
          contador = 0;
        }else{
          Tanques[i].damageColli();
          Tanques[indice].damageColli();
        }
        }
      if (caracter[1] == "O"){ 
        var indice = compruebaColisionTanques(Tanques[i],i); 
        if(indice == -1){
          mueveTanques("O", i);
          contador = 0;
        }else{
          Tanques[i].damageColli();
          Tanques[indice].damageColli();
        }
      }
      if (caracter[1] == "E"){ 
        var indice = compruebaColisionTanques(Tanques[i],i); 
        if(indice == -1){
          mueveTanques("E", i);
          contador = 0;
        }else{
          Tanques[i].damageColli();
          Tanques[indice].damageColli();
        }
        }
    break;
    case "DC":
      console.log(caracter[2]);
      proyectil(Tanques[i],caracter[1],caracter[2]);
    break;
    case "DT":
      if (caracter[1] == "N") { 
        disparaTorreta("N", i);
        contador = 0;
      }
      if (caracter[1] == "S"){ 
          disparaTorreta("S", i);
          contador = 0;
        }
      if (caracter[1] == "O"){ 
          disparaTorreta("O", i);
          contador = 0;
          }
      if (caracter[1] == "E"){ 
          disparaTorreta("E", i);
          contador = 0;
        }
    break;
    case "M":
      DejarMina(Tanques[i]);
    break;
    case "R":
      if (caracter[1] == "N") { 
        usaRadar("N", i);
        var radar = document.getElementById("radar"+ (i+1).toString());
        radar.value = Tanques[i].getRadar();
        contador = 0;
      }
      if (caracter[1] == "S"){ 
        usaRadar("S", i);
        var radar = document.getElementById("radar"+ (i+1).toString());
        radar.value = Tanques[i].getRadar();
        contador = 0;
      }
      if (caracter[1] == "O"){ 
        usaRadar("O", i);
        var radar = document.getElementById("radar"+ (i+1).toString());
        radar.value = Tanques[i].getRadar();
        contador = 0;
      }
      if (caracter[1] == "E"){ 
        usaRadar("E", i);
        var radar = document.getElementById("radar"+ (i+1).toString());
        radar.value = Tanques[i].getRadar();
        contador = 0;
      }
    break;
    case "JMP":
      Tanques[i].setIterador(parseInt(caracter[1]));
    break;
    case "IF":
      condicion = caracter[1].split("|");
      switch(condicion[0]){
        case "R?N":
        case "R?E":
        case "R?O": 
        case "R?S":
          controlaTanquesIF(i,condicion[0]);
          var valRadarIf = Tanques[i].getRadar();
          switch(condicion[1]){
            case "<":
              if(valRadarIf < parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case ">":
              if(valRadarIf > parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "<=":
              if(valRadarIf <= parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case ">=":
              if(valRadarIf >= parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "==":
              if(valRadarIf == parseInt(condicion[2])){
                console.log(i,caracter)
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "!=":
              if(valRadarIf != parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
          }
        break;
        case "R":
          var valRadarIf = Tanques[i].getRadar();
          switch(condicion[1]){
            case "<":
              if(valRadarIf < parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case ">":
              if(valRadarIf > parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "<=":
              if(valRadarIf <= parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case ">=":
              if(valRadarIf >= parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "==":
              if(valRadarIf == parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "!=":
              if(valRadarIf != parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
          }
        break;
        case "S":
          var valSaludIf = Tanques[i].getSalud();
          switch(condicion[1]){
            case "<":
              if(valSaludIf < parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case ">":
              if(valSaludIf > parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "<=":
              if(valSaludIf <= parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case ">=":
              if(valSaludIf >= parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "==":
              if(valSaludIf == parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "!=":
              if(valSaludIf != parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
          }
        break;
        case "MM":
          var valMuniMina = Tanques[i].getM();
          switch(condicion[1]){
            case "<":
              if(valMuniMina < parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case ">":
              if(valMuniMina > parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "<=":
              if(valMuniMina <= parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case ">=":
              if(valMuniMina >= parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "==":
              if(valMuniMina == parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "!=":
              if(valMuniMina != parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
          }
        break;
        case "MC":
          var valMuniCa = Tanques[i].getMC();
          switch(condicion[1]){
            case "<":
              if(valMuniCa < parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case ">":
              if(valMuniCa > parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "<=":
              if(valMuniCa <= parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case ">=":
              if(valMuniCa >= parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "==":
              if(valMuniCa == parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "!=":
              if(valMuniCa != parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
          }
        break;
        case "MT":
          var valMuniTorr = Tanques[i].getMT();
          switch(condicion[1]){
            case "<":
              if(valMuniTorr < parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case ">":
              if(valMuniTorr > parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "<=":
              if(valMuniTorr <= parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case ">=":
              if(valMuniTorr >= parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "==":
              if(valMuniTorr == parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
            case "!=":
              if(valMuniTorr != parseInt(condicion[2])){
                controlaTanquesIF(i,caracter[2]);
              }
            break;
          }
        break;
      }
    break;
  }
  console.log(Tanques[i].getNombre(),Tanques[i].getRadar());
}

function compruebaColisionTanques(obj,i){
  var valor = -1;
  switch(i){
    case 0:
      if(obj.x+1 == Tanques[1].x && obj.y == Tanques[1].y){
         valor = 1;
      }
      if(obj.x+1 == Tanques[2].x && obj.y == Tanques[2].y){
         valor = 2;
      }
      if(obj.x+1 == Tanques[3].x && obj.y == Tanques[3].y){
         valor = 3;
      }
      if(obj.x == Tanques[1].x && obj.y+1 == Tanques[1].y){
        valor = 1;
      }
      if(obj.x == Tanques[2].x && obj.y+1 == Tanques[2].y){
          valor = 2;
      }
      if(obj.x == Tanques[3].x && obj.y+1 == Tanques[3].y){
          valor = 3;
      }
    break;
    case 1:
      if(obj.x+1 == Tanques[0].x && obj.y == Tanques[0].y){
        valor = 0;
      }
      if(obj.x+1 == Tanques[2].x && obj.y == Tanques[2].y){
          valor = 2;
      }
      if(obj.x+1 == Tanques[3].x && obj.y == Tanques[3].y){
          valor = 3;
      }
      if(obj.x == Tanques[0].x && obj.y+1 == Tanques[0].y){
        valor = 0;
      }
      if(obj.x == Tanques[2].x && obj.y+1 == Tanques[2].y){
        valor = 2;
      }
      if(obj.x == Tanques[3].x && obj.y+1 == Tanques[3].y){
        valor = 3;
      }
    break;
    case 2:
      if(obj.x+1 == Tanques[0].x && obj.y == Tanques[0].y){
        valor = 0;
      }
      if(obj.x+1 == Tanques[2].x && obj.y == Tanques[2].y){
          valor = 2;
      }
      if(obj.x+1 == Tanques[3].x && obj.y == Tanques[3].y){
          valor = 3;
      }
      if(obj.x == Tanques[0].x && obj.y+1 == Tanques[0].y){
        valor = 0;
      }
      if(obj.x == Tanques[2].x && obj.y+1 == Tanques[2].y){
        valor = 2;
      }
      if(obj.x == Tanques[3].x && obj.y+1 == Tanques[3].y){
        valor = 3;
      }
    break;
    case 3:
      if(obj.x+1 == Tanques[0].x && obj.y == Tanques[0].y){
        valor = 0;
      }
      if(obj.x+1 == Tanques[2].x && obj.y == Tanques[2].y){
          valor = 2;
      }
      if(obj.x+1 == Tanques[3].x && obj.y == Tanques[3].y){
          valor = 3;
      }
      if(obj.x == Tanques[0].x && obj.y+1 == Tanques[0].y){
        valor = 0;
      }
      if(obj.x == Tanques[2].x && obj.y+1 == Tanques[2].y){
        valor = 2;
      }
      if(obj.x == Tanques[3].x && obj.y+1 == Tanques[3].y){
        valor = 3;
      }
    break;
    default:
       valor = -1;
  }
  console.log(valor);
  return valor;
}

function disparaTorreta(sentido, t){
  Tanques[t].direccion = "A-"+sentido;
  dispararTorreta(Tanques[t],sentido);
}

function usaRadar(sentido, t){
  console.log(t)
  Tanques[t].direccion = "A-"+sentido;
  usarRadar(Tanques[t],sentido);
}

function mueveTanques(sentido, t) {
  switch (sentido) {
      case "N":
        Tanques[t].arriba();
        comprobarMina(Tanques[t]);
        Tanques[t].setContador(0);
        break;
      case "S":
        Tanques[t].abajo();
        comprobarMina(Tanques[t]);
        Tanques[t].setContador(0);
          break;
      case "O":
        Tanques[t].izquierda();
        comprobarMina(Tanques[t]);
        Tanques[t].setContador(0);
        break;
      case "E":
        Tanques[t].derecha();
        comprobarMina(Tanques[t]);
        Tanques[t].setContador(0);
        break;
    }
}

function comprobarImpactoCanon(x,y){
  var impacto = false;
  if(Tanques[0].x == x && Tanques[0].y == y){
    Tanques[0].damageMisilDirecto();
    console.log("Le di un misilazo",0);
    impacto = true;
  }
  if(Tanques[1].x == x && Tanques[1].y == y){
    Tanques[1].damageMisilDirecto();
    console.log("Le di un misilazo",1);
    impacto = true;
  }
  if(Tanques[2].x == x && Tanques[2].y == y){
    Tanques[2].damageMisilDirecto();
    console.log("Le di un misilazo",2);
    impacto = true;
  }
  if(Tanques[3].x == x && Tanques[3].y == y){
    Tanques[3].damageMisilDirecto();
    console.log("Le di un misilazo",3);
    impacto = true;
  }
}

function comprobarMina(obj){
  //debugger;
  for(mx = 0; mx < ubicacionMinas.length; mx+=2){
    var arrUb = ubicacionMinas[mx].split(",");
    if(obj.x == parseInt(arrUb[0],10) && obj.y == parseInt(arrUb[1],10)){
      obj.damageMina();
      ubicacionMinas.splice(mx, 1)
      console.log("Exploto ",obj.getNombre());
    }
  }
}

function comprobarValorY(x,y){
  if(Tanques[0].y == y && Tanques[0].x == x){
    return Tanques[0].y;
  }else{
    if(Tanques[1].y == y && Tanques[1].x == x){
      return Tanques[1].y;
    }else{
      if(Tanques[2].y == y && Tanques[2].x == x){
        return Tanques[2].y;
      }else{
        if(Tanques[3].y == y && Tanques[3].x == x){
          return Tanques[3].y;
        }else{
          return -1;
          }
        }
      }
    }
}

function comprobarValorX(x,y){
  if(Tanques[0].y == y && Tanques[0].x == x){
    return Tanques[0].x;
  }else{
    if(Tanques[1].y == y && Tanques[1].x == x){
      return Tanques[1].x;
    }else{
      if(Tanques[2].y == y && Tanques[2].x == x){
        return Tanques[2].x;
      }else{
        if(Tanques[3].y == y && Tanques[3].x == x){
          return Tanques[3].x;
        }else{
          return -1;
          }
        }
      }
    }
}

function comprobarValorYT(x,y){
  if(Tanques[0].y == y && Tanques[0].x == x){
    Tanques[0].damageBala();
    return Tanques[0].y;
  }else{
    if(Tanques[1].y == y && Tanques[1].x == x){
      Tanques[1].damageBala();
      return Tanques[1].y;
    }else{
      if(Tanques[2].y == y && Tanques[2].x == x){
        Tanques[2].damageBala();
        return Tanques[2].y;
      }else{
        if(Tanques[3].y == y && Tanques[3].x == x){
          Tanques[3].damageBala();
          return Tanques[3].y;
        }else{
          return -1;
          }
        }
      }
    }
}

function comprobarValorXT(x,y){
  if(Tanques[0].y == y && Tanques[0].x == x){
    Tanques[0].damageBala();
    return Tanques[0].x;
  }else{
    if(Tanques[1].y == y && Tanques[1].x == x){
      Tanques[1].damageBala();
      return Tanques[1].x;
    }else{
      if(Tanques[2].y == y && Tanques[2].x == x){
        Tanques[2].damageBala();
        return Tanques[2].x;
      }else{
        if(Tanques[3].y == y && Tanques[3].x == x){
          Tanques[3].damageBala();
          return Tanques[3].x;
        }else{
          return -1;
          }
        }
      }
    }
}

function principal(turno) {
  borraCanvas();
  dibujaEscenario();
  
  if(Tanques[0].getVivo() == true){
    dibujaTanque(Tanques[0].getTanque());
  }
  if(Tanques[1].getVivo() == true){
    dibujaTanque(Tanques[1].getTanque());
  }
  if(Tanques[2].getVivo() == true){
    dibujaTanque(Tanques[2].getTanque());
  }
  if(Tanques[3].getVivo() == true){
    dibujaTanque(Tanques[3].getTanque());
  }

  if(Tanques[turno].getSalud()<=0){
    if(Tanques[turno].getSalud() != -1){
      console.log("Has muerto jugador "+Tanques[turno].getNombre());
    }
    Tanques[turno].setVivo(false);
    Tanques[turno].x = -1;
    Tanques[turno].y = -1;
    turno2 = turno+1;
    var salud = document.getElementById("Salud" + turno2.toString());
    salud.style.backgroundColor = '#000000';     
    var radar = document.getElementById("radar"+ turno2.toString());
    radar.style.backgroundColor = '#000000'; 
    var minas = document.getElementById("minas"+turno2.toString());
    minas.style.backgroundColor = '#000000'; 
    var mC = document.getElementById("mCD"+turno2.toString());
    mC.style.backgroundColor = '#000000'; 
    var mT = document.getElementById("mTD"+turno2.toString());
    mT.style.backgroundColor = '#000000'; 
    Tanques[turno].setSalud(-1);
  }else{
    var a = Tanques[turno].getInstruction();
    console.log(a);
    controlaTanques(turno,a);
  }
 
  for(i = 1; i<=4; i++){
    var salud = document.getElementById("Salud" + i.toString());
    salud.value = Tanques[i-1].getSalud();
    var radar = document.getElementById("radar"+ i.toString());
    radar.value = Tanques[i-1].getRadar();
    var minas = document.getElementById("minas"+i.toString());
    minas.value = Tanques[i-1].getM();
    var mC = document.getElementById("mCD"+i.toString());
    mC.value = Tanques[i-1].getMC();
    var mT = document.getElementById("mTD"+i.toString());
    mT.value = Tanques[i-1].getMT();
  }

}

function dibujaEscenario() {
  var color;
  var uyu = true;
  for (y = 0; y < 10; y++) {
    for (x = 0; x < 10; x++) {
      if (escenario[y][x] == 0){
        color = muro;
        context.fillStyle = color;
        context.fillRect(x * anchoF, y * altoF, anchoF, altoF);
      }else{
        if((x+y) % 2 == 0){
          uyu = true;
        }else{
          uyu = false;
        }
        if (escenario[y][x] == 1 && uyu == true) {
          color = tierra;
          context.fillStyle = color;
          context.fillRect(x * anchoF, y * altoF, anchoF, altoF);
          context.fillStyle = tierra2;
          context.textAlign = 'start';
          context.textBaseline = "top";           
          context.font = '10px Arial';
          context.fillText(`[${x},${y}]`,x*anchoF  + 10,y*altoF + 10);
        }else{
          color = tierra2;
          context.fillStyle = color;
          context.fillRect(x * anchoF, y * altoF, anchoF, altoF);
          context.fillStyle = tierra;
          context.textAlign = 'start';
          context.textBaseline = "top";           
          context.font = '10px Arial';
          context.fillText(`[${x},${y}]`,x*anchoF  + 10,y*altoF + 10);
        }
    }
    }
  }
}

function dibujaTanque(tanque) {
  context.translate(tanque.x, tanque.y);
  context.rotate(tanque.sentido);
  context.translate(-tanque.x, -tanque.y);
  context.drawImage(tanque.img, tanque.x, tanque.y, anchoF, altoF);
  context.setTransform(1,0,0,1,0,0);
}

function borraCanvas() {
  canvas.width = WIDTH;
  canvas.height = HEIGTH;
}

function pruebaMisil(){
  proyectil(Tanques[0],"S",2);
}

function pruebaDisparo(){
  dispararTorreta(Tanques[0],"E");
}

function proyectil(obj, direccion, distancia){
  if(obj.getMC()>0){
    var dist = 0;
    if(distancia == "R"){
      dist = obj.getRadar();
    }else{
      dist = parseInt(distancia);
    }
    switch(direccion){
      case "N":
        obj.direccion = "A-N"; 
        context.fillStyle = misil;
        context.fillRect(obj.x * anchoF + (anchoF)/3, (obj.y-dist) * altoF +altoF/3, anchoF/4, altoF/4);   
        comprobarImpactoCanon(obj.x,(obj.y-dist)); 
      break;
      case "S":
        obj.direccion = "A-S";
        context.fillStyle = misil;
        context.fillRect(obj.x * anchoF + (anchoF)/3, (obj.y+dist) * altoF +altoF/3, anchoF/4, altoF/4); 
        comprobarImpactoCanon(obj.x,(obj.y+dist));    
      break;
      case "E":
        obj.direccion = "A-E";
        context.fillStyle = misil;
        context.fillRect((obj.x+dist) * altoF +altoF/3, obj.y * anchoF + (anchoF)/3, anchoF/4, altoF/4);  
        comprobarImpactoCanon((obj.x+dist), obj.y);  
      break;
      case "O":
        obj.direccion = "A-O";
        context.fillStyle = misil;
        context.fillRect((obj.x-dist) * altoF +altoF/3, obj.y * anchoF + (anchoF)/3, anchoF/4, altoF/4); 
        comprobarImpactoCanon((obj.x-dist), obj.y);      
      break;
    }
    obj.setMC(obj.getMC()-1);
    }
}

function dispararTorreta(obj, direccion){
  if(obj.getMT()>0){
    switch(direccion){
      case "N": 
        var limiteTablero = obj.y-1;
        obj.direccion = "A-N";
        for(j = 1; j<=limiteTablero; j++){ 
          var veri = comprobarValorYT(obj.x, (obj.y-j));        
          if(veri > 0){
            context.fillStyle = disparoColor;
            context.fillRect(obj.x * anchoF + (anchoF)/3, (obj.y-j) * altoF +altoF/3, anchoF/4, altoF/4);  
            obj.setRadar(obj.y-veri);
            j = limiteTablero+1;
          }
        }
      break;
      case "S": 
        var limiteTablero =8 - obj.y;
        obj.direccion = "A-S";
        for(j = 1; j<=limiteTablero; j++){ 
          var veri = comprobarValorYT(obj.x, (obj.y+j));        
          if(veri > 0){
            context.fillStyle = disparoColor;
            context.fillRect(obj.x * anchoF + (anchoF)/3, (obj.y+j) * altoF +altoF/3, anchoF/4, altoF/4);  
            obj.setRadar(veri-obj.y);
            j = limiteTablero+1;
          }
        }
      break;
      case "E":
        var limiteTablero = 8 - obj.x;
        obj.direccion = "A-E";
        for(j = 1; j<=limiteTablero; j++){ 
          var veri = comprobarValorXT(obj.x+j, (obj.y));        
          if(veri > 0){
            context.fillStyle = disparoColor;
            context.fillRect((obj.x+j) * anchoF + (anchoF)/3, (obj.y) * altoF +altoF/3, anchoF/4, altoF/4);  
            obj.setRadar(veri-obj.x);
            j = limiteTablero+1;
          }
        }
      break;
      case "O":
        var limiteTablero =obj.x - 1;
        obj.direccion = "A-O";
        for(j = 1; j<=limiteTablero; j++){ 
          var veri = comprobarValorXT(obj.x-j, (obj.y));        
          if(veri > 0){
            context.fillStyle = disparoColor;
            context.fillRect((obj.x-j) * anchoF + (anchoF)/3, (obj.y) * altoF +altoF/3, anchoF/4, altoF/4);  
            obj.setRadar(obj.x-veri);
            j = limiteTablero+1;
          }
        }
      break;
    }
    obj.setMT(obj.getMT()-1);
  }
}

function usarRadar(obj, direccion){
  switch(direccion){
    case "N": 
      var limiteTablero = obj.y-1;
      obj.direccion = "A-N";
      for(j = 1; j<=limiteTablero; j++){ 
        var veri = comprobarValorY(obj.x, (obj.y-j));        
        if(veri > 0){
          context.fillStyle = radarColor;
          context.fillRect(obj.x * anchoF + (anchoF)/3, (obj.y-j) * altoF +altoF/3, anchoF/4, altoF/4);  
          obj.setRadar(obj.y-veri);
          j = limiteTablero+1;
        }
      }
      if(veri == -1){
        obj.setRadar(-1*(limiteTablero));
      }
    break;
    case "S": 
      var limiteTablero =8 - obj.y;
      obj.direccion = "A-S";
      for(j = 1; j<=limiteTablero; j++){ 
        var veri = comprobarValorY(obj.x, (obj.y+j));        
        if(veri > 0){
          context.fillStyle = radarColor;
          context.fillRect(obj.x * anchoF + (anchoF)/3, (obj.y+j) * altoF +altoF/3, anchoF/4, altoF/4);  
          obj.setRadar(veri-obj.y);
          j = limiteTablero+1;
        }
      }
      if(veri == -1){
        obj.setRadar(-1*(limiteTablero));
      }
    break;
    case "E":
      var limiteTablero = 8 - obj.x;
      obj.direccion = "A-E";
      for(j = 1; j<=limiteTablero; j++){ 
        var veri = comprobarValorX(obj.x+j, (obj.y));        
        if(veri > 0){
          context.fillStyle = radarColor;
          context.fillRect((obj.x+j) * anchoF + (anchoF)/3, (obj.y) * altoF +altoF/3, anchoF/4, altoF/4);  
          obj.setRadar(veri-obj.x);
          j = limiteTablero+1;
        }
      }
      if(veri == -1){
        obj.setRadar(-1*(limiteTablero));
      }
    break;
    case "O":
      var limiteTablero =obj.x - 1;
      obj.direccion = "A-O";
      for(j = 1; j<=limiteTablero; j++){ 
        var veri = comprobarValorX(obj.x-j, (obj.y));        
        if(veri > 0){
          context.fillStyle = radarColor;
          context.fillRect((obj.x-j) * anchoF + (anchoF)/3, (obj.y) * altoF +altoF/3, anchoF/4, altoF/4);  
          obj.setRadar(obj.x-veri);
          j = limiteTablero+1;
        }
      }
      if(veri == -1){
        obj.setRadar(-1*(limiteTablero));
      }
    break;
  }
}

function DejarMina(obj){
  if(obj.getM()>0){
    context.fillStyle = mina;
    context.fillRect(obj.x * anchoF + anchoF/3, obj.y * altoF + altoF/3, anchoF/4, altoF/4);
    ubicacionMinas.push(obj.x.toString()+","+obj.y.toString());
    obj.setM(obj.getM()-1);
  }
}
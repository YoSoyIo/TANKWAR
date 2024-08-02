const WIDTH = 800;
const HEIGTH = 800;

const FILAS = 8;
const COLUMNS = 8;

const CELDA_WIDTH = WIDTH/FILAS;
const CELDA_HEIGTH = HEIGTH/COLUMNS;

const temas = {
    claro: '#917b3f',
    oscuro: '#d1a838',
}

const piezaTemas = {
    claro: '#ffffff',
    oscuro: '#000000',
}

const piezas = {
    rojo : '🚀',
    azul : '🚀',
    verde : '🚀',
    amarillo : '🚀',
}

const $canvas = document.createElement("canvas");
const contexto = $canvas.getContext('2d');

$canvas.width = WIDTH;
$canvas.height =HEIGTH;

document.body.appendChild($canvas);

document.body.style.display = 'grid';
document.body.style.placeItems = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100%';
document.body.parentElement.style.height = '100%';
document.body.style.backgroundColor = '#333333';

const renderTablero = () =>{
    for(let x = 0; x < FILAS; x += 1){
        for(let y = 0; y<COLUMNS; y += 1){
            let rectColor = temas.claro;
            let textColor = temas.oscuro;
    
            if((x+y) % 2) {
                rectColor = temas.oscuro;
                textColor = temas.claro;
            }
            
            contexto.fillStyle = rectColor;    
            contexto.fillRect(x*CELDA_WIDTH,y*CELDA_HEIGTH,CELDA_WIDTH,CELDA_HEIGTH);
            
            //Colorea posicion
            contexto.fillStyle = textColor;
            contexto.textAlign = 'start';
            contexto.textBaseline = "top";           
            contexto.font = '10px Arial';
            contexto.fillText(`[${x},${y}]`,x*CELDA_WIDTH  + 10,y*CELDA_HEIGTH + 10);
            
            //Colorea la pieza
            const tanque = TableroMatriz[x][y];
            if(tanque){
                contexto.fillStyle = tanque.color;
                contexto.textAlign = 'left';
                contexto.textBaseline = "middle";
                contexto.font = '60px Arial';
                contexto.fillText(tanque.diseno,x*CELDA_WIDTH + 10,y*CELDA_HEIGTH + CELDA_HEIGTH / 2);
            }
        }
    }
}

//Inicializar board
const TableroMatriz = [];
for(let x = 0; x<FILAS; x += 1){
    TableroMatriz[x] = [];
    for(let y = 0; y<COLUMNS; y += 1){
        TableroMatriz[x][y] = null;
    }
}

//Dibujar piezas
TableroMatriz[0][0] = {
    diseno: piezas.amarillo,
    color: temas.claro,
}

TableroMatriz[3][3] = {
    diseno: piezas.verde,
    color: temas.claro,
}

TableroMatriz[6][5] = {
    diseno: piezas.rojo,
    color: temas.claro,
}

TableroMatriz[7][7] = {
    diseno: piezas.azul,
    color: temas.claro,
}

renderTablero();
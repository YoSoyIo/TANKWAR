class Tanque {
    img = new Image();
    
    /**
     * @param x {number} Posición inicial en x
     * @param y {number} Posición inicial en y
     * @param instrucciones {string[]} Arreglo de instrucciones
     * @param imageName {string} Ubicación de la imagen para representar el tanque
     */
    constructor(nombre, x, y, instrucciones, imageName, vida, mT, mC, m, r) {
        this.nombre = nombre;
        this.vivo = true;
        this.x = x;
        this.y = y;
        this.vida = vida;
        this.mT = mT;
        this.mC = mC;
        this.m = m;
        this.r = r;
        this.instrucciones = instrucciones;
        this.imageName = imageName;
        this.direccion = "A-N";
        this.distancia = "1";
        this.iterator = 0;
        this.img.src = this.imageName;
        this.contador = 0;
        this.retraso = 1000;

        //Getters
        this.getRetraso = function(){
          return this.retraso;
        }

        this.getVivo = function(){
          return this.vivo;
        }

        this.getNombre = function(){
          return this.nombre;
        }

        this.getContador = function(){
          return this.contador;
        }

        this.getSalud = function(){
          return this.vida;
        }

        this.getMT = function(){
          return this.mT;
        }

        this.getMC = function(){
          return this.mC;
        }

        this.getM = function(){
          return this.m;
        }

        this.getRadar = function(){
          return this.r;
        }
        //Setters

        this.setSalud = function(S){
          this.vida = S;
        }

        this.setVivo = function(v){
          this.vivo = v;
        }

        this.setNombre = function(name){
          this.nombre = name;
        }

        this.setContador = function(contad){
          this.contador = contad;
        }

        this.setRetraso = function(retraso){
          this.retraso = retraso;
        }

        this.setMT = function(MT){
          this.mT = MT;
        }

        this.setMC = function(MC){
          this.mC = MC;
        }

        this.setM = function(M){
          this.m = M;
        }

        this.setRadar = function(r){
          this.r = r;
        }

        this.setIterador = function(itera){
          this.iterator = itera;       
        }

        this.margenes = function (x, y) {
            var colision = false;

            if (escenario[y][x] == 0) {
                colision = true;
                this.vida = this.vida-20;
            }

            return colision;
        };

        this.colisionEnemigo = function(x,y){
          if(this.x == x && this.y == y){
            this.damageColli();
          }
      
        }

        this.colision = function(x,y){
          if(this.x == x && this.y == y){
            this.damageColli();
          }
        }

        this.damageColli = function(){
          this.vida = this.vida-20;
        }

        this.damageMisilDirecto = function(){
          this.vida = this.vida-50;
        }

        this.damageMisilColateral = function(){
          this.vida = this.vida-20;
        }

        this.damageBala = function(){
          this.vida = this.vida-10;
        }

        this.damageMina = function(){
          this.vida = this.vida-80;
        }

        this.arriba = function () {
            if (this.margenes(this.x, this.y - 1) == false) {
                this.y--;
            }
            this.direccion = "A-N";
        };

        this.abajo = function () {
            if (this.margenes(this.x, this.y + 1) == false) {
              this.y++;
            }
            this.direccion = "A-S";  
        };

        this.izquierda = function () {
            if (this.margenes(this.x - 1, this.y) == false) {
                this.x--;
            }
            this.direccion = "A-O";
        };

        this.derecha = function () {
            if (this.margenes(this.x + 1, this.y) == false) {
                this.x++;
            }
            this.direccion = "A-E";
        };
    }

    /**
     * 
     * @returns {object} Objeto que representa el tanque en el tablero
     */
    getTanque = function () {
      switch (this.direccion) {
        case "A-N":
          // this.dibujaTanque(0, this.x * anchoF, this.y * altoF, this.img);
          return {
            sentido: 0,
            x: this.x * anchoF,
            y: this.y * altoF,
            img: this.img
          };
        case "A-S":
          // this.dibujaTanque(-Math.PI, (this.x + 1) * anchoF, (this.y + 1) * altoF, this.img);
          return {
            sentido: -Math.PI,
            x: (this.x + 1) * anchoF,
            y: (this.y + 1) * altoF,
            img: this.img
          };
        case "A-O":
          // this.dibujaTanque(-Math.PI / 2, this.x * anchoF, (this.y + 1) * altoF, this.img);
          return {
            sentido: -Math.PI / 2,
            x: this.x * anchoF,
            y: (this.y + 1) * altoF,
            img: this.img
          };
        case "A-E":
          // this.dibujaTanque(Math.PI / 2, (this.x + 1) * anchoF, this.y * altoF, this.img);
          return {
            sentido: Math.PI / 2,
            x: (this.x + 1) * anchoF,
            y: this.y * altoF,
            img: this.img
          };
      }        
    };

    /**
     * 
     * @returns {string} Instrucción a ejecutar
     */
    getInstruction = function () {
        if (this.iterator < this.instrucciones.length) {
            return this.instrucciones[this.iterator++];
        } else {
            this.iterator = 0;
            return this.instrucciones[this.iterator++];
        }
    }
}